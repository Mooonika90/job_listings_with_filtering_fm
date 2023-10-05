import { useState } from 'react';
import { Data } from '../data/data';

function Jobs() {
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const [selectedLevel, setSelectedLevel] = useState('');
	const [selectedRole, setSelectedRole] = useState('');

	const filterJobs = ({ languages, level, role, ...job }) => {
		const hasSelectedLanguages =
			selectedLanguages.length === 0 ||
			selectedLanguages.every((lang) => languages.includes(lang));
		const hasSelectedLevel = selectedLevel === '' || level === selectedLevel;
		const hasSelectedRole = selectedRole === '' || role === selectedRole;
		return hasSelectedLanguages && hasSelectedLevel && hasSelectedRole;
	};

	const handleLanguageClick = (language) => {
		if (selectedLanguages.includes(language)) {
			setSelectedLanguages(
				selectedLanguages.filter((lang) => lang !== language)
			);
		} else {
			setSelectedLanguages([...selectedLanguages, language]);
		}
	};

	return (
		<>
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

						<ul className='lang-list'>
							<li>{role}</li>
							<li>{level}</li>
							{languages.map((language, index) => (
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
				)
			)}
		</>
	);
}

export default Jobs;
