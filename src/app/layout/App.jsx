import { Button, Container } from 'semantic-ui-react'
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard'
import EventListItem from '../../features/event/EventList/EventListItem'
import NavBar from '../../features/nav/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <>
      <Container className='main'>
        <NavBar />
      </Container>
      <Container>
        <EventDashBoard />
      </Container>
    </>
  )
}

export default App
