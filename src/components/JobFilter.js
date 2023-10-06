import { useJobContext } from '../ContextProvider';
function JobFilter() {
	const { selectedLanguages, selectedLevel, selectedRole, clearAll } =
		useJobContext();

	return (
		<div className='filter-modal'>
			<ul className='lang-list'>
				{selectedLanguages.length > 0
					? selectedLanguages.map((lang, index) => <li key={index}>{lang}</li>)
					: ''}
				{selectedLevel ? <li>{selectedLevel}</li> : ''}
				{selectedRole ? <li>{selectedRole}</li> : ''}
			</ul>
			<span onClick={() => clearAll()}>Clear</span>
		</div>
	);
}
export default JobFilter;
