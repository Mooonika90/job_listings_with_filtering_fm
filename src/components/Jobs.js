import { Data } from '../data/data';

function Jobs() {
	return (
		<>
			{Data.map((job) => (
				<article key={job.id}>
					<div>
						<div>
							<h2>{job.position}</h2>
							<ul>
								<li>{job.postedAt}</li>
								<li>{job.contract}</li>
								<li>{job.location}</li>
							</ul>
						</div>
						<img src={job.logo} alt={job.position} />
					</div>

					<ul className="lang-list">
						{job.languages.map((lang, index) => (
							<li key={index}>{lang}</li>
						))}
					</ul>
				</article>
			))}
		</>
	);
}
export default Jobs;
