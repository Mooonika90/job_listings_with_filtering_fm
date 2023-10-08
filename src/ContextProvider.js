import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);

	const [selectedFilters, setSelectedFilters] = useState({
		languages: [],
		level: '',
		role: '',
	});

	const filterJobs = ({ languages, level, role, ...job }) =>
		(selectedFilters.languages.length === 0 ||
			selectedFilters.languages.every((lang) =>
				selectedFilters.languages.includes(lang)
			)) &&
		(selectedFilters.level === '' || level === selectedFilters.level) &&
		(selectedFilters.role === '' || role === selectedFilters.role);
	const handleLanguageClick = (language) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			languages: prevFilters.languages.includes(language)
				? prevFilters.languages.filter((lang) => lang !== language)
				: [...prevFilters.languages, language],
		}));
	};
	const handleLevelClick = (level) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			level: prevFilters.level === level ? '' : level,
		}));
	};

	const handleRoleClick = (role) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			role: prevFilters.role === role ? '' : role,
		}));
	};

	const clearAll = () => {
		setSelectedFilters({
			languages: [],
			level: '',
			role: '',
		});
		setShowModal(false);
	};
	return (
		<JobContext.Provider
			value={{
				selectedFilters,
				setSelectedFilters,
				handleLanguageClick,
				handleLevelClick,
				handleRoleClick,
				clearAll,
				showModal,
				filterJobs,
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
