import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import './Routines.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Routines = () => {
  document.title = 'Home | Radiant';
  document.body.style = 'background-color: #FFFFFF';

  const dispatch = useDispatch();
  const history = useHistory();
  const userRP = useSelector(state => state.routines.userRoutines.user_routine_products);
  const amRoutine = userRP?.AM;
  const pmRoutine = userRP?.PM;

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  if (!amRoutine || !pmRoutine) return null

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
          <form id='am-routine-form'>
            <h4>1 CLEANSE</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Cleanse' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" checked={product.product_name}/>
                  </div>
                }
              </div>
            ))}
            <h4>2 TREAT</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Treat' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>3 NOURISH</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Nourish' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>4 MOISTURIZE</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Moisturize' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>5 PROTECT</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Protect' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>6 MISCELLANEOUS</h4>
            {amRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Miscellaneous' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
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
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Cleanse' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>2 TREAT</h4>
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Treat' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>3 NOURISH</h4>
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Nourish' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>4 MOISTURIZE</h4>
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Moisturize' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>5 PROTECT</h4>
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Protect' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
                  </div>
                }
              </div>
            ))}
            <h4>6 MISCELLANEOUS</h4>
            {pmRoutine.map(product => (
              <div key={product.id}>
                {product.skincare_step === 'Miscellaneous' &&
                  <div key={product.id} className='rp-container'>
                    <img src={product.img_url} alt={product.product_name} height='70' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }} />
                    <p onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>{product.product_name}</p>
                    <input type="checkbox" />
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