import React, { Component } from 'react'
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount () {
    const { store } = this.props


    store.subscribe(() => {
      this.setState(() => ({
        //calendar is from reducers
        calendar: store.getState()
      }))
    })
  }
  //This Uses a the reducer
  //and updates the store with this function
  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      meal: 'breakfast',
      typed: this.input.value

    }))

    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <p>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.breakfast}
        </p>
      </div>
    )
  }
}

export default App
