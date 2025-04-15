import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [updatedPlayerName, setUpdatedPlayerName] = useState(initialName);

	let playerName = <span className='player-name'>{updatedPlayerName}</span>;

	let btnCaption = <span>Edit</span>;

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
		console.log(isEditing);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handlePlayerName = (e) => {
		setUpdatedPlayerName(e.target.value);
	};

	if (isEditing) {
		playerName = (
			<input
				type='text'
				value={updatedPlayerName}
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
				{playerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
