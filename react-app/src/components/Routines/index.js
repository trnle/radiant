import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { createAMEntry, createPMEntry, getExisting } from '../../store/entries';
import Swal from 'sweetalert2'
import './Routines.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Routines = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkExistingEntry = useSelector(state => state.entries?.oneEntry);

  const userRP = useSelector(state => state.routines?.userRoutines?.user_routine_products);
  const amRoutine = userRP?.AM;
  const pmRoutine = userRP?.PM;

  const [amRP, setAmRP] = useState([]);
  const [pmRP, setPmRP] = useState([]);
  let newDate = new Date().toDateString().split(' ');
  const [currentDate, setCurrentDate] = useState(`${newDate[1]} ${newDate[2]}, ${newDate[3]}`);
  const [completeAMBtn, setCompleteAMBtn] = useState('Complete Routine');
  const [completePMBtn, setCompletePMBtn] = useState('Complete Routine');
  const [amDisableBtn, setAmDisableBtn] = useState(false);
  const [pmDisableBtn, setPmDisableBtn] = useState(false);

  useEffect(() => {
    document.title = 'Home | Radiant';
    document.body.style = 'background-color: #FFFFFF';
  }, []);
  
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  useEffect(() => {
    dispatch(getExisting());
  }, [dispatch])

  useEffect(() => {
    if (checkExistingEntry.am_products) {
      setCompleteAMBtn('Finished');
      setAmDisableBtn(true);
    } else {
      setCompleteAMBtn('Complete Routine');
      setAmDisableBtn(false);
    }
  }, [checkExistingEntry.am_products])

  useEffect(() => {
    if (checkExistingEntry.pm_products) {
      setCompletePMBtn('Finished');
      setPmDisableBtn(true);
    } else {
      setCompletePMBtn('Complete Routine');
      setPmDisableBtn(false);
    }
  }, [checkExistingEntry.pm_products])

  const handleAMCheck = product => {
    if (amRP.includes(product)) {
      amRP.splice(amRP.indexOf(product), 1);
      setAmRP([...amRP])
    } else {
      setAmRP([...amRP, product])
    }
  }

  const handlePMCheck = product => {
    if (pmRP.includes(product)) {
      pmRP.splice(pmRP.indexOf(product), 1);
      setPmRP([...pmRP])
    } else {
      setPmRP([...pmRP, product])
    }
  }

  const completeAM = async e => {
    e.preventDefault();
    if (!checkExistingEntry.am_products) {
      Swal.fire({
        title: 'Morning Routine!',
        text: 'Do you want to complete your morning routine?',
        showCancelButton: true,
        confirmButtonText: 'Yes, Go to Entry',
        reverseButtons: true
      }).then(async res => {
        if (res.value) {
          let amProducts = amRP.join(', ');
          const entry = await dispatch(createAMEntry({ amProducts, currentDate }));
          history.push(`/journal/${entry.id}`);
        }
      })
    }
  }

  const completePM = async e => {
    e.preventDefault();
    Swal.fire({
      title: 'Evening Routine!',
      text: 'Do you want to complete your evening routine?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Go to Entry',
      reverseButtons: true
    }).then(async res => {
      if (res.value) {
        let pmProducts = pmRP.join(', ');
        const entry = await dispatch(createPMEntry({ pmProducts, currentDate }));
        history.push(`/journal/${entry.id}`);
      }
    })
  }

  return (
    <div id='routines-page'>
      <h1>Routine</h1>
      <Tabs>
        <TabList>
          <Tab>AM</Tab>
          <Tab disabled>|</Tab>
          <Tab>PM</Tab>
        </TabList>
        <TabPanel>
          <form id='am-routine-form' onSubmit={completeAM}>
            <h4>1 CLEANSE</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {amRoutine && product.skincare_step === 'Cleanse' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>2 TREAT</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Treat' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>3 NOURISH</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Nourish' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>4 MOISTURIZE</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Moisturize' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>5 PROTECT</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Protect' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>6 OTHER</h4>
            {amRoutine && amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Other' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handleAMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <div id='complete-am'>
              <button disabled={amDisableBtn}>{completeAMBtn}</button>
            </div>
          </form>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <form id='pm-routine-form' onSubmit={completePM}>
            <h4>1 CLEANSE</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Cleanse' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>2 TREAT</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Treat' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>3 NOURISH</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Nourish' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>4 MOISTURIZE</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Moisturize' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>5 PROTECT</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Protect' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <h4>6 OTHER</h4>
            {pmRoutine && pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Other' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox"
                      value={product.product_name}
                      onChange={() => handlePMCheck(product.product_name)} />
                  </div>
                }
              </div>
            ))}
            <div id='complete-pm'>
              <button disabled={pmDisableBtn}>{completePMBtn}</button>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Routines;