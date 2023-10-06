import './index.css';
import Header from './components/Header.js';
import Jobs from './components/Jobs.js';
import { JobProvider } from './ContextProvider';
function App() {
	return (
		<JobProvider>
			<Header />
			<main>
				<Jobs />
			</main>
		</JobProvider>
	);
}

export default App;
