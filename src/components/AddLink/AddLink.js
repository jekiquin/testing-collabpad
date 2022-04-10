import { useMemo, useState } from 'react';
import { useJournal } from '../../context/journal-context';
import './AddLink.scss';

export default function AddLink({ setInputText, initialObj }) {
	const [selectedOption, setSelectedOption] = useState('');
	const [linkToAdd, setLinkToAdd] = useState('');
	const [journal] = useJournal();

	const handleClick = () => {
		setInputText((prevText) => `${prevText}${linkToAdd}`);
		setSelectedOption('');
		setLinkToAdd('');
	};

	const handleChange = ({ target }) => {
		setSelectedOption(target.value);
		setLinkToAdd(`[[${target.selectedOptions[0].text} - ${target.value}]] `);
	};

	const displayOptions = useMemo(
		() =>
			journal
				.filter((thoughtObj) => thoughtObj.id !== initialObj?.id)
				.map((thoughtObj) => (
					<option key={thoughtObj.id} value={thoughtObj.id}>
						{thoughtObj.title}
					</option>
				)),
		[journal, initialObj]
	);

	return (
		<div className="AddLinks">
			<select
				className="AddLinks__selection"
				name="links"
				id="links-select"
				value={selectedOption}
				onChange={handleChange}>
				<option value="" disabled>
					--Add Link--
				</option>
				{displayOptions}
			</select>
			<input
				className="AddLinks__button"
				type="button"
				value="Add Link"
				onClick={handleClick}
			/>
		</div>
	);
}

AddLink.defaultProps = {
	initialObj: null
};
