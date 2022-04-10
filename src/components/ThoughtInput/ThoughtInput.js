import { useState } from 'react';
import { useJournal } from '../../context/journal-context';
import uniqid from 'uniqid';
import moment from 'moment';
import './ThoughtInput.scss';

const MAXLENGTH = 255;

export default function ThoughtInput() {
	const [inputText, setInputText] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [journal, setJournal] = useJournal();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newThought = {
			id: uniqid(),
			title: e.target.title.value,
			thought: e.target.thought.value,
			timestamp: moment.utc(moment.now()).format()
		};

		setJournal((prevJournal) => {
			return [newThought, ...prevJournal];
		});

		setInputText('');
		setInputTitle('');
	};

	const handleOnChange = (callback) => {
		return ({ target }) => callback(target.value);
	};

	return (
		<form className="ThoughtInput" onSubmit={handleSubmit}>
			<input
				className="ThoughtInput__title"
				id="title"
				type="text"
				placeholder="Title"
				onChange={handleOnChange(setInputTitle)}
				value={inputTitle}
				required
			/>
			<textarea
				id="thought"
				className="ThoughtInput__input"
				placeholder="Add a thought"
				maxLength={MAXLENGTH}
				value={inputText}
				onChange={handleOnChange(setInputText)}
				required></textarea>
			<p className="ThoughtInput__counter">
				{inputText.length}/{MAXLENGTH}
			</p>

			<input className="ThoughtInput__button" type="submit" value="Add Thought" />
		</form>
	);
}
