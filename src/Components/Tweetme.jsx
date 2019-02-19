import React from 'react';
import PropTypes from 'prop-types';

function Tweetme(props) {
    return (
        <div>
            <p>Send me a twitter message</p>
            <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
        </div>
    );
}

Tweetme.propTypes = {
    onTroubleshootingConfirmation: PropTypes.func
};

export default Tweetme;