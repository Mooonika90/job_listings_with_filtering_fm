import { useJobContext } from '../ContextProvider';
import removeBtn from '../assets/icon-remove.svg';

function JobFilter() {
	const { filters, removeFilter, clearFilters } = useJobContext();

	return (
		<div className='filter-modal'>
			<ul className='lang-list modal-list'>
				{filters.map((tag, index) => (
					<li key={index}>
						{tag}
						<button onClick={() => removeFilter(tag)}>
							<img src={removeBtn} alt='' />
						</button>
					</li>
				))}
			</ul>
			<span onClick={() => clearFilters()}>Clear</span>
		</div>
	);
}

export default JobFilter;
