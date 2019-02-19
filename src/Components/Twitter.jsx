import React from 'react';
import PropTypes from 'prop-types';

function Twitter(props) {
  return (
    <div>
      <h3>{props.user}</h3>
      <p><em>{props.message}</em></p>
      <hr />
    </div>
  );
}

Twitter.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Twitter;