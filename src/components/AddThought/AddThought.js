import { useState } from 'react';
import './AddThought.scss';

const MAXLENGTH = 255;

export default function AddThought() {
	const [inputText, setInputText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.thought.value);
		setInputText('');
	};

	const handleOnChange = ({ target }) => {
		setInputText(target.value);
	};
	return (
		<form className="AddThought" onSubmit={handleSubmit}>
			<textarea
				id="thought"
				className="AddThought__input"
				placeholder="Add a thought"
				maxLength={MAXLENGTH}
				value={inputText}
				onChange={handleOnChange}></textarea>
			<p className="AddThought__counter">
				{inputText.length}/{MAXLENGTH}
			</p>
			<button className="AddThought__submit" type="submit">
				Add Thought
			</button>
		</form>
	);
}
