import { useMemo } from 'react';
import { useJournal } from '../../context/journal-context';
import Thought from '../Thought/Thought';
import './ThoughtList.scss';

export default function ThoughtsList() {
	const [journal] = useJournal();

	const displayThoughts = useMemo(
		() => journal.map((thoughtObj) => <Thought key={thoughtObj.id} thoughtObj={thoughtObj} />),
		[journal]
	);

	return <section className="ThoughtList">{displayThoughts}</section>;
}
