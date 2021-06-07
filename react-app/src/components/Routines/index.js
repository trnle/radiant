import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { createOneEntry } from '../../store/entries';
import Swal from 'sweetalert2'
import './Routines.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Routines = () => {
  document.title = 'Home | Radiant';
  document.body.style = 'background-color: #FFFFFF';

  const dispatch = useDispatch();
  const history = useHistory();

  const userRP = useSelector(state => state.routines?.userRoutines?.user_routine_products);
  const amRoutine = userRP?.AM;
  const pmRoutine = userRP?.PM;

  const [amRP, setAmRP] = useState([]);
  const [pmRP, setPmRP] = useState([]);

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  if (!amRoutine || !pmRoutine) return null;

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
    Swal.fire({
      title: 'Morning Routine Complete!',
      text: 'Do you want to complete your journal entry?',
      showCancelButton: true,
      confirmButtonText: 'Go to Entry'
    }).then(async res => {
      if (res.value) {
        let amProducts = amRP.join(', ');
        const entry = await dispatch(createOneEntry({ amProducts }));
        history.push(`/journal/${entry.id}`);
      }
    })
    // const entry = await dispatch(createOneEntry({amRP}));
    // history.push(`/journal/${entry.id}`);
  }
  
  const completePM = async e => {
    e.preventDefault();
    Swal.fire({
      title: 'Evening Routine Complete!',
      text: 'Do you want to complete your journal entry?',
      showCancelButton: true,
      confirmButtonText: 'Go to Entry'
    }).then(async res => {
      if (res.value) {
        let pmProducts = pmRP.join(', ');
        // const entry = await dispatch(createOneEntry({ pmProducts }));
        // history.push(`/journal/${entry.id}`);
      }
    })
    // const entry = await dispatch(createOneEntry({amRP}));
    // history.push(`/journal/${entry.id}`);
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
            {amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Cleanse' &&
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
            {amRoutine.map((product, idx) => (
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
            {amRoutine.map((product, idx) => (
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
            {amRoutine.map((product, idx) => (
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
            {amRoutine.map((product, idx) => (
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
            <h4>6 MISCELLANEOUS</h4>
            {amRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Miscellaneous' &&
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
              <button>Complete Routine</button>
            </div>
          </form>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <form id='pm-routine-form'>
            <h4>1 CLEANSE</h4>
            {pmRoutine.map((product, idx) => (
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
            {pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Treat' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" 
                    value={product.product_name}
                    onChange={() => handlePMCheck(product.product_name)}/>
                  </div>
                }
              </div>
            ))}
            <h4>3 NOURISH</h4>
            {pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Nourish' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" 
                    value={product.product_name}
                    onChange={() => handlePMCheck(product.product_name)}/>
                  </div>
                }
              </div>
            ))}
            <h4>4 MOISTURIZE</h4>
            {pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Moisturize' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" 
                    value={product.product_name}
                    onChange={() => handlePMCheck(product.product_name)}/>
                  </div>
                }
              </div>
            ))}
            <h4>5 PROTECT</h4>
            {pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Protect' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" 
                    value={product.product_name}
                    onChange={() => handlePMCheck(product.product_name)}/>
                  </div>
                }
              </div>
            ))}
            <h4>6 MISCELLANEOUS</h4>
            {pmRoutine.map((product, idx) => (
              <div key={idx}>
                {product.skincare_step === 'Miscellaneous' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" 
                    value={product.product_name}
                    onChange={() => handlePMCheck(product.product_name)}/>
                  </div>
                }
              </div>
            ))}
            <div id='complete-pm'>
              <button>Complete Routine</button>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Routines;