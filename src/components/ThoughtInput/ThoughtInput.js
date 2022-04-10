import { useEffect, useState } from 'react';
import { useJournal } from '../../context/journal-context';
import uniqid from 'uniqid';
import moment from 'moment';
import './ThoughtInput.scss';
import AddLink from '../AddLink/AddLink';

const MAXLENGTH = 255;

export default function ThoughtInput({ setShowModal, initialObj }) {
	const [inputText, setInputText] = useState('');
	const [inputTitle, setInputTitle] = useState('');
	const [, setJournal] = useJournal();

	useEffect(() => {
		if (initialObj) {
			setInputText(initialObj.thought);
			setInputTitle(initialObj.title);
		}
	}, [initialObj]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newThought = {
			id: uniqid(),
			title: e.target.title.value,
			thought: e.target.thought.value,
			timestamp: moment.utc(moment.now()).format()
		};

		setJournal((prevJournal) => {
			if (!initialObj) return [newThought, ...prevJournal];
			const copyJournal = JSON.parse(JSON.stringify(prevJournal));
			const thoughtToEdit = copyJournal.find((thought) => thought.id === initialObj.id);
			thoughtToEdit.title = newThought.title;
			thoughtToEdit.thought = newThought.thought;
			return copyJournal;
		});

		setInputText('');
		setInputTitle('');
		setShowModal(false);
	};

	const handleOnChange = (callback) => {
		return ({ target }) => callback(target.value);
	};

	const handleClick = () => {
		setShowModal(false);
	};

	return (
		<div className="ThoughtInput">
			<form className="ThoughtInput__form" onSubmit={handleSubmit}>
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
				<AddLink setInputText={setInputText} initialObj={initialObj} />
				<div className="ThoughtInput__button-group">
					<input
						className="ThoughtInput__button"
						type="submit"
						value={initialObj ? 'Edit Thought' : 'Add Thought'}
					/>
					<input
						className="ThoughtInput__button"
						type="button"
						value="Cancel"
						onClick={handleClick}
					/>
				</div>
			</form>
		</div>
	);
}

ThoughtInput.defaultProps = {
	initialObj: null
};
