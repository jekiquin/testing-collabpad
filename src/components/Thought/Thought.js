import React from 'react';
import { useMemo, useState } from 'react';
import moment from 'moment';
import ThoughtInput from '../ThoughtInput/ThoughtInput';
import { useJournal } from '../../context/journal-context';
import './Thought.scss';

function Thought({ thoughtObj }) {
	const [showModal, setShowModal] = useState(false);
	const [, setJournal] = useJournal();

	const { id, title, thought, timestamp } = thoughtObj;
	const displayTimestamp = moment(timestamp).format('MMM DD, YYYY hh:mm:ss');

	const handleEdit = () => {
		setShowModal(true);
	};

	const handleDelete = (e) => {
		const id = e.target.parentElement.parentElement.id;
		setJournal((prevJournal) => {
			const copyJournal = JSON.parse(JSON.stringify(prevJournal));
			const filteredThought = copyJournal.filter((thought) => thought.id !== id);
			return filteredThought;
		});
	};

	const newThought = useMemo(() => {
		const regex = /\[\[(.*? - .*?)\]\]/g;
		const thoughtSplit = thought.split(regex);
		return thoughtSplit.map((str, idx) => {
			if (idx % 2 === 0) return <span key={idx}>{str}</span>;
			const strArr = str.split(' - ');
			return (
				<a key={idx} href={`#${strArr[1]}`}>
					{strArr[0]}
				</a>
			);
		});
	}, [thought]);

	return (
		<article className="Thought" id={id}>
			<h2>{title} </h2>
			<p>{newThought}</p>
			<p className="Thought__timestamp">{displayTimestamp}</p>
			<div className="Thought__button-group">
				<button className="Thought__button" onClick={handleEdit}>
					Edit Thought
				</button>
				<button className="Thought__button" onClick={handleDelete}>
					Delete Thought
				</button>
			</div>

			{showModal && <ThoughtInput setShowModal={setShowModal} initialObj={thoughtObj} />}
		</article>
	);
}

export default React.memo(Thought);
