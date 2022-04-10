import { useState } from 'react';
import ThoughtInput from '../../components/ThoughtInput/ThoughtInput';
import ThoughtsList from '../../components/ThoughtsList/ThoughtsList';
import './Journal.scss';

export default function Journal() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	return (
		<div className="Journal">
			<button className="Journal__button" onClick={handleClick}>
				Add Thought
			</button>
			{showModal && <ThoughtInput setShowModal={setShowModal} />}
			<ThoughtsList />
		</div>
	);
}
