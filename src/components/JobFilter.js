import { useJobContext } from '../ContextProvider';
import removeBtn from '../assets/icon-remove.svg';

function JobFilter() {
	const { filterJobs, removeFilter, clearAll } = useJobContext();

	return (
		<div className='filter-modal'>
			<ul className='lang-list modal-list'>
				{filterJobs.map((filterOption, index) => (
					<li key={index}>
						{filterOption}
						<button aria-label="Submit" onClick={() => removeFilter(filterOption)}>
							<img src={removeBtn} alt='' />
						</button>
					</li>
				))}
			</ul>
			<span onClick={() => clearAll()}>Clear</span>
		</div>
	);
}

export default JobFilter;
