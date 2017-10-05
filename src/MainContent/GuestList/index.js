import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => 
	    <ul>
      <PendingGuest 
        name={props.pendingGuest}
        note={props.pendingNote} />

          {props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed)
            .map((guest, index) =>
          	<Guest 
              key={index} 
              name={guest.name} 
              note={guest.note}
              isConfirmed={guest.isConfirmed}
              isLanguage={guest.isLanguage}
              isEditing={guest.isEditing}
              //handleLanguage={() => props.}
              handleConfirmation={() => props.toggleConfirmation(guest.id)}
              handleToggleEditing={() => props.toggleEditing(guest.id)}
              setName={text => props.setName(text, guest.id)}
              setNote={text => props.setNote(text, guest.id)}
              handleRemove={() => props.removeGuest(guest.id)} />
      		)}
      </ul>;

GuestList.propTypes = {
	guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNote: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  pendingNote: PropTypes.string.isRequired
};

export default GuestList;