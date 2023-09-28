import { Data } from '../data/data';

function Jobs() {
	return (
		<>
			{Data.map((job) => (
				<article key={job.id}>
					<h2>{job.id}</h2>
				</article>
			))}
		</>
	);
}
export default Jobs;
