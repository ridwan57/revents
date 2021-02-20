import cuid from 'cuid'
import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import {
  combineValidators,
  composeValidators,
  hasLengthGreaterThan,
  isRequired
} from 'revalidate'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import DateInput from '../../../app/common/form/DateInput'
import SelectInput from '../../../app/common/form/SelectInpt'
import TextArea from '../../../app/common/form/TextArea'
import TextInput from '../../../app/common/form/TextInput'
import { createEvent, updateEvent, deleteEvent } from '../eventActions'
const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
]

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'The category is required' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({ message: 'Description is too small' })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})
class EventForm extends Component {
  onFromSubmit = values => {
    const { initialValues } = this.props
    if (initialValues.id) {
      this.props.updateEvent(values)
      this.props.history.push(`/events/${initialValues.id}`)
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      }
      this.props.createEvent(newEvent)
      this.props.history.push(`/events/${newEvent.id}`)
    }
  }
  render () {
    const { initialValues, history, invalid, submitting, pristine } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            <Form
              autoComplete='off'
              onSubmit={this.props.handleSubmit(this.onFromSubmit)}
            >
              <Field
                name='title'
                component={TextInput}
                placeholder='Give your filed a name'
              />
              <Field
                name='category'
                component={SelectInput}
                placeholder='whats your category'
                options={category}
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Description please'
              />
              <Header sub color='teal' content='Event Location Details' />
              <Field name='city' component={TextInput} placeholder='City..?' />
              <Field
                name='venue'
                component={TextInput}
                placeholder='Venue..?'
              />
              <Field
                name='date'
                component={DateInput}
                placeholder='Date.....?'
                dateFormat='dd LLL yyyy h:mm a'
                showTimeSelect
                timeFormat='HH:mm'
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
                onClick={this.handleFromSubmit}
              >
                Submit
              </Button>
              <Button
                type='button'
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {}
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    initialValues: event
  }
}
export default connect(mapStateToProps, {
  createEvent,
  deleteEvent,
  updateEvent
})(
  reduxForm({
    form: 'eventForm',
    validate: validate
  })(EventForm)
)
