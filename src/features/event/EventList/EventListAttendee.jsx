import React, { Component } from 'react'
import { Image, List } from 'semantic-ui-react'

export default class EventListAttendee extends Component {
  render () {
    const { attendee } = this.props
    return (
      <List.Item>
        <Image
          as='a'
          size='mini'
          circular
          src={attendee.photoURL}
        />
      </List.Item>
    )
  }
}
