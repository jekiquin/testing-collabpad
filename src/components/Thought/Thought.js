import moment from 'moment';
import './Thought.scss';

export default function Thought({ thoughtObj }) {
	const { id, title, thought, timestamp } = thoughtObj;
	console.log('timestamp', moment(timestamp).format('hh:mm:ss a'));

	return (
		<article className="Thought" id={id}>
			<h2>{title} </h2>
			<p>{thought}</p>
			<p className="Thought__timestamp">{moment(timestamp).format('hh:mm:ss a')}</p>
		</article>
	);
}
