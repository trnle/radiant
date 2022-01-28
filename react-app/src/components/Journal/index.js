import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment'
import { getEntries } from '../../store/entries';
import './Journal.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Journal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const entries = useSelector(state => state.entries.userEntries);

  useEffect(() => {
    document.title = 'Journal | Radiant';
    document.body.style = 'background-color: #FFFFFF';
  }, []);

  useEffect(() => {
    dispatch(getEntries())
  }, [dispatch])

  let months = moment.monthsShort();

  return (
    <div id='journal-page'>
      <h1>Care Journal</h1>
      <h4 id='progress-sub'>Log your progress</h4>
      {/* <CreateEntryModal /> */}
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>2022</Tab>
          <Tab>2021</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel defaultIndex={new Date().getMonth()}>
            <TabList>
              {months.map(month => (
                <Tab key={month}>{month}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jan') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Feb') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Mar') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Apr') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('May') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jun') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jul') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Aug') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Sep') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Oct') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Nov') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Dec') && entry.created_at.includes('2022') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel defaultIndex={new Date().getMonth()}>
            <TabList>
              {months.map(month => (
                <Tab key={month}>{month}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jan') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Feb') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Mar') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Apr') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('May') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jun') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Jul') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Aug') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Sep') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Oct') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Nov') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(entry => (
                  entry.created_at.includes('Dec') && entry.created_at.includes('2021') &&
                  <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
                    <h4>{entry.created_at}</h4>
                    {entry.rating && <p>Skin rating: {entry.rating}</p>}
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Journal;