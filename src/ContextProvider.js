import { createContext, useContext, useState } from 'react';
import { Data } from './data/data';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
	const [jobs, setJobs] = useState(Data);

	const [filters, setFilters] = useState([]);

	const addFilter = (filter) => {
		if (filters.includes(filter)) return;
		setFilters([...filters, filter]);
	};
	console.log(filters.length);
	const removeFilter = (filter) => {
		setFilters(filters.filter((f) => f !== filter));
	};

	const clearFilters = () => {
		setFilters([]);
	};
	const filterFunction = ({ role, level, tools, languages }) => {
		if (filters.length === 0) {
			return true;
		}

		const tags = [role, level];

		if (tools) {
			tags.push(...tools);
		}

		if (languages) {
			tags.push(...languages);
		}

		return filters.every((filter) => tags.includes(filter));
	};

	const filteredJobs = jobs.filter(filterFunction);

	return (
		<JobContext.Provider
			value={{
				addFilter,
				removeFilter,
				clearFilters,
				filters,
				filteredJobs,
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
