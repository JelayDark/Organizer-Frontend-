import React from 'react';
// import ToDoList from './ToDoList';
import Contacts from './ContactsOLD';
import ContactsApp from './Contacts';
import Calendar from './MainCalendar';
import DatePage from './DatePicker';
import ToDoApp from './ToDo';

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
            // el = <ToDoList />;
            el = <ToDoApp />;
            break;
        case 3:
            el = <Contacts />;
            // el = <ContactsApp />;
            break;
        default: 
            el = (<div>Nothing here...</div>);
    }

    return el;
}

export default Page;