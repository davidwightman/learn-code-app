import React from 'react';
import PropTypes from 'prop-types';

const GuestNote = props =>  {
	if (props.isEditing) {
		return (
			<input 
				type="text" 
				value={props.children}
				onChange={props.handleNoteEdits} />
		);
	}

	return (
		<span>
			{props.children}
		</span>
	);
};

GuestNote.propTypes = {
	isEditing: PropTypes.bool.isRequired,
	handleNoteEdits: PropTypes.func.isRequired	
}

export default GuestNote;