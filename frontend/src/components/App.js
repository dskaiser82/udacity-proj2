import React, { Component } from 'react'
import { addRecipe, removeFromCalendar  } from '../actions'

class App extends Component {
  state = {}

  componentDidMount () {
    const { store } = this.props


    //This is a store change listener to update the store
    store.subscribe(() => {
      this.setState(() => ({

        //calendar is from reducers
        //Like the master function
        calendar: store.getState()
      }))
    })
  }
  //This Uses a the reducer
  //and updates the store with this function
  //It an Onlick see html below
  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      meal: this.input.value

    }))

    this.input.value = ''
  }

  //normall we'd have things in the object,
  //but the reducer function makes meal null
  killFood = () => {
    this.props.store.dispatch(removeFromCalendar({}))

  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>
        <button onClick={this.killFood}>KILL FOOD</button>

        <p>
          Breakfast: {this.state.calendar && this.state.calendar.meal}
        </p>
      </div>
    )
  }
}

export default App
