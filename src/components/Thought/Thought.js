import moment from 'moment';
import './Thought.scss';

export default function Thought({ thoughtObj }) {
	const { id, title, thought, timestamp } = thoughtObj;
	const displayTimestamp = moment(timestamp).format('MMM DD, YYYY hh:mm:ss');

	return (
		<article className="Thought" id={id}>
			<h2>{title} </h2>
			<p>{thought}</p>
			<p className="Thought__timestamp">{displayTimestamp}</p>
		</article>
	);
}
