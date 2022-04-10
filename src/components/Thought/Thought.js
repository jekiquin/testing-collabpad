import { useMemo } from 'react';
import moment from 'moment';
import './Thought.scss';

export default function Thought({ thoughtObj }) {
	const { id, title, thought, timestamp } = thoughtObj;
	const displayTimestamp = moment(timestamp).format('MMM DD, YYYY hh:mm:ss');

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
		</article>
	);
}
