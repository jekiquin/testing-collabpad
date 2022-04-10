import AddThought from '../../components/AddThought/AddThought';
import ThoughtsList from '../../components/ThoughtsList/ThoughtsList';
import './Journal.scss';

export default function Journal() {
	return (
		<div className="Journal">
			<AddThought />
			<ThoughtsList />
		</div>
	);
}
