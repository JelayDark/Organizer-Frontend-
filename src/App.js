import React, { Component } from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Calendar from './components/MainCalendar';
// import Contacts from './components/Contacts';
// import ToDo from './components/ToDoList';
import MenuPage from './components/MenuPage';
import FigureMenu from './components/FigureMenu';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          {/*<MenuPage />*/}
          <FigureMenu />
          {/*<Navigation />*/}
          {/*<Contacts data="data.json"/>*/}
          {/*<ToDo/>*/}
          {/*<Calendar />*/}
      </div>
    );
  }
}

export default App;
