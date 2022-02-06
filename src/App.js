import './App.css';
import Header from './Header';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import data from './data.js';

function App() {
  return (
	<>
		<Header />
		<Card data={data}/>
		<Footer />
	</>
  );
}

export default App;
