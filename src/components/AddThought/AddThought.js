import { useState } from 'react';
import { useJournal } from '../../context/journal-context';
import uniqid from 'uniqid';
import moment from 'moment';
import './AddThought.scss';

const MAXLENGTH = 255;

export default function AddThought() {
	const [inputText, setInputText] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [, setJournal] = useJournal();

	const handleSubmit = (e) => {
		e.preventDefault();

		setJournal((prevJournal) => {
			const newJournal = {
				id: uniqid(),
				title: e.target.title.value,
				thought: e.target.thought.value,
				timestamp: moment.utc(moment.now()).format()
			};
			return [newJournal, ...prevJournal];
		});

		setInputText('');
		setInputTitle('');
	};

	const handleOnChange = (callback) => {
		return ({ target }) => callback(target.value);
	};

	return (
		<form className="AddThought" onSubmit={handleSubmit}>
			<input
				className="AddThought__title"
				id="title"
				type="text"
				placeholder="Title"
				onChange={handleOnChange(setInputTitle)}
				value={inputTitle}
				required
			/>
			<textarea
				id="thought"
				className="AddThought__input"
				placeholder="Add a thought"
				maxLength={MAXLENGTH}
				value={inputText}
				onChange={handleOnChange(setInputText)}
				required></textarea>
			<p className="AddThought__counter">
				{inputText.length}/{MAXLENGTH}
			</p>
			<button className="AddThought__submit" type="submit">
				Add Thought
			</button>
		</form>
	);
}
