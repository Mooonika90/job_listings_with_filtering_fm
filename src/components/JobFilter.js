import { useJobContext } from '../ContextProvider';
import removeBtn from '../assets/icon-remove.svg';

function JobFilter() {
	const { selectedFilters, setSelectedFilters, clearAll } = useJobContext();
	const handleRemoveFilter = (key, value) => {
		setSelectedFilters((prevFilters) => {
			const updatedFilters = { ...prevFilters };

			if (Array.isArray(updatedFilters[key])) {
				updatedFilters[key] = updatedFilters[key].filter(
					(item) => item !== value
				);
			} else if (updatedFilters[key] === value) {
				delete updatedFilters[key];
			}

			return updatedFilters;
		});
	};

	const filteredFilters = Object.entries(selectedFilters).filter(
		([key, value]) => {
			return Array.isArray(value) ? value.length > 0 : value;
		}
	);

	console.log(selectedFilters);

	return (
		<div className='filter-modal'>
			<ul className='lang-list modal-list'>
				{filteredFilters.map(([key, value]) => {
					if (Array.isArray(value)) {
						const validLanguages = value.filter(
							(item) => typeof item === 'string'
						);
						return validLanguages.map((language, index) => (
							<li key={key + index}>
								{language}
								<button onClick={() => handleRemoveFilter(key, language)}>
									<img src={removeBtn} alt='' />
								</button>
							</li>
						));
					} else if (typeof value === 'string') {
						return (
							<li key={key}>
								{value}
								<button onClick={() => handleRemoveFilter(key, value)}>
									<img src={removeBtn} alt='' />
								</button>
							</li>
						);
					}
					return null;
				})}
			</ul>
			<span onClick={() => clearAll()}>Clear</span>
		</div>
	);
}

export default JobFilter;
