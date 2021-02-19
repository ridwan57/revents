import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Segment } from 'semantic-ui-react'

class EventForm extends Component {
  state = { ...this.props.event }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }
  componentDidMount () {
    console.log('this.props.selectedEvent:', this.props.selectedEvent)
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleFromSubmit = event => {
    event.preventDefault()
    if (this.state.id) {
      this.props.updateEvent(this.state)
    } else {
      this.props.createEvent(this.state)
    }
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
          <Button type='button' onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {
    title: '',
    city: '',
    venue: '',
    date: '',
    hostedBy: ''
  }
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }
}
export default connect(mapStateToProps)(EventForm)
