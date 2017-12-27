import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',
                    'saturday', 'sunday'];
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal];
        return meals;
      }, {})
    }))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
