import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import TSlider from './components/Slider';
import Calendar from './components/MainCalendar';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Navigation />
          <Calendar />
      </div>
    );
  }
}

export default App;
