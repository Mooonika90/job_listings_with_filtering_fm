import { useState } from 'react';
import { Data } from '../data/data';

function Jobs() {
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const [selectedLevel, setSelectedLevel] = useState('');
	const [selectedRole, setSelectedRole] = useState('');

	const filterJobs = (job) => {
		const hasSelectedLanguages =
			selectedLanguages.length === 0 ||
			selectedLanguages.every((lang) => job.languages.includes(lang));
		const hasSelectedLevel =
			selectedLevel === '' || job.level === selectedLevel;
		const hasSelectedRole = selectedRole === '' || job.role === selectedRole;
		return hasSelectedLanguages && hasSelectedLevel && hasSelectedRole;
	};
	const filteredJobs = Data.filter(filterJobs);
	const handleLanguageClick = (language) => {
		// Check if the language is already selected
		if (selectedLanguages.includes(language)) {
			// If selected, remove it from the selectedLanguages state
			setSelectedLanguages(
				selectedLanguages.filter((lang) => lang !== language)
			);
		} else {
			// If not selected, add it to the selectedLanguages state
			setSelectedLanguages([...selectedLanguages, language]);
		}
	};

	return (
		<>
			{filteredJobs.map((job) => (
				<article key={job.id}>
					<div>
						<div>
							<div className='position-info'>
								<h2>{job.company}</h2>
								<span>{job.new}</span>
								<span>{job.featured}</span>
							</div>
							<h3>{job.position}</h3>
							<ul>
								<li>{job.postedAt}</li>
								<li>{job.contract}</li>
								<li>{job.location}</li>
							</ul>
						</div>
						<img src={job.logo} alt={job.position} />
					</div>

					<ul className='lang-list'>
						<li>{job.role}</li>
						<li>{job.level}</li>
						{job.languages.map((language, index) => (
							<li
								key={index}
								className={
									selectedLanguages.includes(language) ? 'selected' : ''
								}
								onClick={() => handleLanguageClick(language)}>
								{language}
							</li>
						))}
					</ul>
				</article>
			))}
		</>
	);
}
export default Jobs;
