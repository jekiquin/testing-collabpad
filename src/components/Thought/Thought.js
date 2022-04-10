import moment from 'moment';

export default function Thought({ thoughtObj }) {
	const { id, title, thought, timestamp } = thoughtObj;
	console.log('timestamp', moment(timestamp).format('hh:mm:ss a'));

	return (
		<article>
			<h2>{title}</h2>
			<p>{thought}</p>
			<p>{moment(timestamp).format('hh:mm:ss a')}</p>
		</article>
	);
}
