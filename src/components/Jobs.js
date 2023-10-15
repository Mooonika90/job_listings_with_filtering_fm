import JobFilter from './JobFilter';
import { useJobContext } from '../ContextProvider';

function Jobs() {
	const { filteredJobs, filters, addFilter } = useJobContext();

	return (
		<>
			{filters.length >= 1 ? <JobFilter /> : ''}

			{filteredJobs.map(
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
					const tags = [role, level, ...languages, ...tools];

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
								{tags.map((tag, index) => (
									<li
										key={index}
										className={tags.includes(tag) ? 'selected' : ''}
										onClick={() => addFilter(tag)}>
										{tag}
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
