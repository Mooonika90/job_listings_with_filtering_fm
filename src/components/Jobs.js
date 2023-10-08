import { Data } from '../data/data';
import JobFilter from './JobFilter';
import { useJobContext } from '../ContextProvider';
import { useEffect } from 'react';

function Jobs() {
	const {
		showModal,
		setShowModal,
		selectedFilters,
		handleLanguageClick,
		handleLevelClick,
		filterJobs,
		handleRoleClick,
	} = useJobContext();

	return (
		<>
			{showModal && <JobFilter />}

			{Data.filter(filterJobs).map(
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
				}) => (
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
						<ul className='lang-list' onClick={() => setShowModal(true)}>
							<li onClick={() => handleRoleClick(role)}>{role}</li>
							<li onClick={() => handleLevelClick(level)}>{level}</li>
							{languages.map((language, index) => (
								<li
									key={index}
									className={languages.includes(language) ? 'selected' : ''}
									onClick={() => handleLanguageClick(language)}>
									{language}
								</li>
							))}
						</ul>
					</article>
				)
			)}
		</>
	);
}

export default Jobs;
