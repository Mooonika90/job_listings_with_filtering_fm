import JobFilter from './JobFilter';
import { useJobContext } from '../ContextProvider';

function Jobs() {
	const { selectedFilters, filterJobs, addFilter } = useJobContext();

	return (
		<>
			{filterJobs.length >= 1 ? <JobFilter /> : ''}

			{selectedFilters.map(
				({
					id,
					company,
					new: isNew,
					featured,
					position,
					postedAt,
					contract,
					location,
					logo,
					role,
					level,
					languages,
					tools,
				}) => {
					const filterOption = [role, level, ...languages, ...tools];

					return (
						<article key={id} className={featured ? 'featured-border' : ''}>
							<div>
								<div>
									<div className='position-info'>
										<h2>{company}</h2>
										{isNew && <span className='position-new'>NEW!</span>}
										{featured && <span className='featured'>featured</span>}
									</div>
									<h3>{position}</h3>
									<ul>
										<li>{postedAt}</li>
										<li>{contract}</li>
										<li>{location}</li>
									</ul>
								</div>
								<img src={logo} alt={position} />
							</div>
							<div className='hr'></div>

							<ul className='lang-list'>
								{filterOption.map((option, index) => (
									<li
										key={index}
										className={filterOption.includes(option) ? 'selected' : ''}
										onClick={() => addFilter(option)}>
										{option}
									</li>
								))}
							</ul>
						</article>
					);
				}
			)}
		</>
	);
}

export default Jobs;
