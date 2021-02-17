import React, { Component, useRef } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

export default class EventForm extends Component {
  state = {
    title: '',
    city: '',
    venue: '',
    date: '',
    hostedBy: ''
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleFromSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.props.createEvent(this.state)
  }
  render () {
    const { title, date, city, venue, hostedBy } = this.state
    return (
      <Segment>
        <Form onSubmit={this.handleFromSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              value={title}
              onChange={this.handleInputChange}
              placeholder='First Name'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              onChange={this.handleInputChange}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.handleInputChange}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.handleInputChange}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.handleInputChange}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit' onClick={this.handleFromSubmit}>
            Submit
          </Button>
          <Button type='button' onClick={this.props.closeModal}>
            Cancel
          </Button>
        </Form>
      </Segment>
    )
  }
}
