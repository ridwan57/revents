import React, { Component } from 'react'
import EventListItem from './EventListItem'

export default class EventList extends Component {
  state = {
    events: this.props.events
  }
  render () {
    const { events } = this.props
    console.log('list: events:', events)
    return (
      <div>
        {events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </div>
    )
  }
}
