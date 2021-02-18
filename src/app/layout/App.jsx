import { Route } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import EventForm from '../../features/event/EventForm/EventForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar/NavBar'
import TestComponent from '../../features/testarea/TestComponent'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import './App.css'

function App () {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/events' component={EventDashBoard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
              <Route path='/test' component={TestComponent} />
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
