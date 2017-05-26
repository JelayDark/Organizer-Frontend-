import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Contacts from './Contacts';
import Calendar from './MainCalendar';
// import DatePage from './DatePicker';
import DatePage from './DatePicker/index';

const Page = (props) => {
    let page = props.page;
    let el = null;
    switch(page) {
        case 0: 
            el = <Calendar />;
            break;
        case 1:
            el = <DatePage />;
            break;
        case 2:
            el = <ToDoList />;
            break;
        case 3:
            el = <Contacts data="data.json"/>;
            break;
        default: 
            el = (<div>Nothing here...</div>);
    }

    return el;
}

export default Page;