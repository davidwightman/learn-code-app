import React from 'react';
import PropTypes from 'prop-types';

const PendingGuest = props =>  {
    if (props.name || props.note){
      return (
          	<li className="pending">
            	<span>
            		{props.name}
              </span>
              <span>
                {props.note}
            	</span>
          	</li>
            );
          }
          return null;
        };

PendingGuest.propTypes = {
	name: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default PendingGuest;