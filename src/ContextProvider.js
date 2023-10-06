import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const [selectedLevel, setSelectedLevel] = useState('');
	const [selectedRole, setSelectedRole] = useState('');
	const [showModal, setShowModal] = useState(false);
	const handleLanguageClick = (language) =>
		setSelectedLanguages((prevLanguages) =>
			prevLanguages.includes(language)
				? prevLanguages.filter((lang) => lang !== language)
				: [...prevLanguages, language]
		);

	const handleLevelClick = (level) => {
		setSelectedLevel((prevLevel) => (prevLevel === level ? '' : level));
	};

	const handleRoleClick = (role) => {
		setSelectedRole((prevRole) => (prevRole === role ? '' : role));
	};
	const clearAll = () => {
		setSelectedLanguages([]);
		setSelectedLevel('');
		setSelectedRole('');
		setShowModal(false);
	};
	return (
		<JobContext.Provider
			value={{
				selectedLanguages,
				selectedLevel,
				selectedRole,
				handleLanguageClick,
				handleLevelClick,
				handleRoleClick,
				clearAll,
				showModal,
				setShowModal,
			}}>
			{children}
		</JobContext.Provider>
	);
};

export const useJobContext = () => {
	const context = useContext(JobContext);
	if (!context) {
		throw new Error('useJobContext must be used within a JobProvider');
	}
	return context;
};
