import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
	<header>
		<h1>Learn Code</h1>
		<p>optimize your study habits</p>
		<GuestInputForm
		  newGuestSubmitHandler={props.newGuestSubmitHandler}
      pendingGuest={props.pendingGuest}
      pendingNote={props.pendingNote}
      handleNameInput={props.handleNameInput}
      handleNoteInput={props.handleNoteInput}
    />
  </header>;

    Header.propTypes = {
    	newGuestSubmitHandler: PropTypes.func.isRequired,
      pendingGuest: PropTypes.string.isRequired,
      pendingNote: PropTypes.string.isRequired,
      handleNameInput: PropTypes.func.isRequired,
      handleNoteInput: PropTypes.func.isRequired
    };

export default Header;