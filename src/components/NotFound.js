import React, { Component }  from 'react';

class NotFound extends Component {
    componentDidMount() {
        let body = document.querySelector('body');
        body.classList.add('no-overflow');
    }

    render() {
        return (
            <div className="page404-container">
                <div className="twinkling"></div>
                <div className="video">
	                <video id="InformationVideo" className="information__video information__video--visible" preload="auto" autoPlay="true" loop="true">
		                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.mp4" type="video/mp4" />
		                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.webm" type="video/webm" />
		                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.ogg" type="video/ogg" />
                    </video>		
                </div>
                <div className="page404">
	                <h1>404</h1>
	                <h3>error</h3><br />
	                <hr />
	                <p>
		                "Monkey...<br />
		                I've got some bad news pal.<br />
		                I think we're lost."
	                </p>
                </div>
            </div>
        );
    }
};

export default NotFound;
