import { createContext, useContext, useState } from 'react';

const JournalContext = createContext();

export const useJournal = () => {
	return useContext(JournalContext);
};

export default function JournalProvider({ children }) {
	const [journal, setJournal] = useState([]);

	return (
		<JournalContext.Provider value={[journal, setJournal]}>{children}</JournalContext.Provider>
	);
}
