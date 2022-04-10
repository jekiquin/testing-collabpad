import ThoughtInput from '../../components/ThoughtInput/ThoughtInput';
import ThoughtsList from '../../components/ThoughtsList/ThoughtsList';
import './Journal.scss';

export default function Journal() {
	return (
		<div className="Journal">
			<ThoughtInput />
			<ThoughtsList />
		</div>
	);
}
