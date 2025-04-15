import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	// const [updatedPlayerName, setUpdatedPlayerName] = useState(initialName);
	const [playerName, setPlayerName] = useState(initialName);

	let editablePlayerName = <span className='player-name'>{playerName}</span>;

	let btnCaption = <span>Edit</span>;

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
		//console.log(isEditing);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handlePlayerName = (e) => {
		setPlayerName(e.target.value);
	};

	if (isEditing) {
		editablePlayerName = (
			<input
				type='text'
				value={playerName}
				onChange={handlePlayerName}
				required
			/>
		);
	}

	if (isEditing) {
		btnCaption = <span>Save</span>;
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
