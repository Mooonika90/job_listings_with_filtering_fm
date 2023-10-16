import { createContext, useContext, useState } from 'react';
import { Data } from './data/data';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
	const [data, setData] = useState(Data);
	const [filterJobs, setFilterJobs] = useState([]);

	const addFilter = (filter) => {
		if (filterJobs.includes(filter)) return;
		setFilterJobs([...filterJobs, filter]);
	};

	const removeFilter = (filter) => {
		setFilterJobs(filterJobs.filter((fil) => fil !== filter));
	};

	const clearAll = () => {
		setFilterJobs([]);
	};
	const handleFilters = ({ role, level, tools, languages }) => {
		if (!filterJobs || filterJobs.length === 0) {
			return true;
		}
		const filterOption = [role, level, ...(tools || []), ...(languages || [])];
		return filterJobs.every((filter) => filterOption.includes(filter));
	};

	const selectedFilters = data.filter(handleFilters);

	return (
		<JobContext.Provider
			value={{
				addFilter,
				removeFilter,
				clearAll,
				filterJobs,
				selectedFilters,
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
