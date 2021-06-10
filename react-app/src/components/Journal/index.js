import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment'
import { getEntries } from '../../store/entries';
import './Journal.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Journal = () => {
  document.title = 'Journal | Radiant';
  document.body.style = 'background-color: #FFFFFF';

  const dispatch = useDispatch();
  const history = useHistory();
  const entries = useSelector(state => state.entries.userEntries);
  // const user = useSelector(state => state.session.user)

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
                  entry.created_at.includes('Jan') &&
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
                  entry.created_at.includes('Feb') &&
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
                  entry.created_at.includes('Mar') &&
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
                  entry.created_at.includes('Apr') &&
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
                  entry.created_at.includes('May') &&
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
                  entry.created_at.includes('Jun') &&
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
                  entry.created_at.includes('Jul') &&
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
                  entry.created_at.includes('Aug') &&
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
                  entry.created_at.includes('Sep') &&
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
                  entry.created_at.includes('Oct') &&
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
                  entry.created_at.includes('Nov') &&
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
                  entry.created_at.includes('Dec') &&
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