import React from 'react';
import reactDOM from 'react-dom';

function Display() {
    return (
        <div>Did Yall get sick in there
            <br />
        <button>yes</button>
            <button>nope</button>
            <img
                src="https://sevierair.com/wp-content/uploads/2016/09/kids.png"/>
        </div>
    )
}

//https://sevierair.com/wp-content/uploads/2016/09/kids.png
reactDOM.render(<Display />, document.querySelector('#root'));
