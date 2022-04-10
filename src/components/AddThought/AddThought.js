export default function AddThought() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.thought.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<textarea placeholder="Add a thought" id="thought"></textarea>
			<button type="submit">Add Thought</button>
		</form>
	);
}
