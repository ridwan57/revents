import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import EventForm from '../EventForm/EventForm'
import EventList from '../EventList/EventList'
import cuid from 'cuid'
import { connect } from 'react-redux'
import { createEvent, deleteEvent, updateEvent } from '../eventActions'
class EventDashBoard extends Component {
  state = {
    events: this.props.events,
    isOpen: false,
    selectedEvent: null
  }
  toggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }))
  }
  handleCreateFormOpen = () => {
    this.setState({ isOpen: true, selectedEvent: null })
  }
  handleFormCancel = () => {
    this.setState({ isOpen: false })
  }
  handleCreateEvent = newEvent => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent)
    this.setState({
      isOpen: false
    })
  }
  handleSelectEvent = event => {
    this.setState({ selectedEvent: event, isOpen: true })
  }
  handleDeleteEvent = id => {
    this.props.deleteEvent(id)
  }
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent)
    this.setState({ isOpen: false, selectedEvent: null })
  }

  render () {
    const { isOpen, selectedEvent } = this.state
    const { events } = this.props

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content='Create Event'
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              selectedEvent={selectedEvent}
              closeModal={this.handleFormCancel}
              updateEvent={this.handleUpdateEvent}
              createEvent={this.handleCreateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = state => ({
  events: state.events
})
export default connect(mapStateToProps, {
  createEvent,
  deleteEvent,
  updateEvent
})(EventDashBoard)
