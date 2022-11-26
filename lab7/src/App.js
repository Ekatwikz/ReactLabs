import './App.css';

import Editor from './Components/Editor';
import Stadium from './Components/Stadium';

import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<section className="App">
				<Editor/>
				<Stadium/>
			</section>
		</RecoilRoot>
	);
}

export default App;
