import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import EventForm from '../EventForm/EventForm'
import EventList from '../EventList/EventList'
import cuid from 'cuid'
import { connect } from 'react-redux'
import { createEvent, deleteEvent, updateEvent } from '../eventActions'
class EventDashBoard extends Component {
  handleCreateEvent = newEvent => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent)
  }

  handleDeleteEvent = id => {
    this.props.deleteEvent(id)
  }
  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent)
  }

  render () {
    const { events } = this.props

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity feed</h2>
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
