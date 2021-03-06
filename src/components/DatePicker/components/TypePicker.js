import React from 'react';
import OneDayPicker from './OneDayPicker';
import IntervalPicker from './IntervalPicker';

import 'react-datepicker/dist/react-datepicker.css';

const TypePicker = (props) => {
    let type = props.type;
    let el = null;
    switch(type) {
        case 0: 
            el = <OneDayPicker update={props.update}/>;
            break;
        case 1:
            el = <IntervalPicker update={props.update} />;
            break;
        default: 
            el = (<div>Nothing here...</div>);
    }

    return el;
}

export default TypePicker;