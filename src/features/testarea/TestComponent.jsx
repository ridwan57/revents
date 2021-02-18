import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from './testAction'
const mapStateToProps = state => ({
  data: state.test.data
})

class TestComponent extends Component {
  render () {
    const { incrementCounter, decrementCounter } = this.props
    return (
      <>
        <h1>TestComonent: {this.props.data}</h1>
        <button onClick={incrementCounter}>increment</button>
        <button onClick={decrementCounter}>decrement</button>
      </>
    )
  }
}
export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  TestComponent
)
