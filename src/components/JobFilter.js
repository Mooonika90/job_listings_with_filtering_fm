import { useJobContext } from '../ContextProvider';

function JobFilter() {
	const { selectedFilters, clearAll } = useJobContext();
	const { languages, level, role } = selectedFilters;

	return (
		<div className='filter-modal'>
			<ul className='lang-list modal-list'>
				{languages.length > 0 &&
					languages.map((lang, index) => (
						<li key={index} className='modal-item'>
							{lang}
							<span>x</span>
						</li>
					))}
				{level && <li className='modal-item'>{level}</li>}
				{role && <li className='modal-item'>{role}</li>}
			</ul>
			<span onClick={() => clearAll()}>Clear</span>
		</div>
	);
}

export default JobFilter;
