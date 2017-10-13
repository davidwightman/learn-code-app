import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';
import GuestNote from './GuestNote';
const languages = ['JavaScript', 'Python', 'Java', 'Ruby', 'PHP']; 

const Guest = props => 
  
          	<li>
            	<GuestName 
                isEditing={props.isEditing}
                handleNameEdits={e => props.setName(e.target.value)}>
            		{props.name}
            	</GuestName>
              <GuestNote
              isEditing={props.isEditing}
                handleNoteEdits={e => props.setNote(e.target.value)}
              >{props.note}
              </GuestNote>

              {languages.map((lang, index) => {
                return(
                  <label key={lang}>
                    <input 
                      type="radio"
                      name="language"
                      checked={props.isLanguage}
                      onChange={props.handleLanguage} /> {lang}
                  </label>
                )
              })}
            	<label>
              		<input 
              			type="checkbox" 
              			checked={props.isConfirmed}
              			onChange={props.handleConfirmation} /> Confirmed
            	</label>
            	<button onClick={props.handleToggleEditing}>
                {props.isEditing ? "save" : "edit"}
              </button>
            	<button onClick={props.handleRemove}>remove</button>
          	</li>;

Guest.propTypes = {
	name: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
	isConfirmed: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleConfirmation: PropTypes.func.isRequired,
	handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNote: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  isLanguage: PropTypes.bool.isRequired,
  handleLanguage:PropTypes.func.isRequired
}

export default Guest;