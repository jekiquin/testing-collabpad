import { useMemo, useState } from 'react';
import { useJournal } from '../../context/journal-context';

export default function AddLink({ setInputText }) {
	const [selectedOption, setSelectedOption] = useState('');
	const [linkToAdd, setLinkToAdd] = useState('');
	const [journal] = useJournal();

	const handleClick = () => {
		console.log(linkToAdd);
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
			journal.map((thoughtObj) => (
				<option key={thoughtObj.id} value={thoughtObj.id}>
					{thoughtObj.title}
				</option>
			)),
		[journal]
	);

	return (
		<div>
			<select name="links" id="links-select" value={selectedOption} onChange={handleChange}>
				<option value="" disabled>
					--Add Link--
				</option>
				{displayOptions}
			</select>
			<input type="button" value="Add Link" onClick={handleClick} />
		</div>
	);
}
