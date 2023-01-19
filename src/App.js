import Companies from './components/Companies';
import Header from './components/Header';
import Information from './components/Information';
import Mail from './components/Mail';
import Section from './components/Section';
import Slider from './components/Slider';
import Treasures from './components/Treasures';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Trending/>
      <Treasures/>
      <Information/>
      <Slider/>
      <Mail/>
      <Companies/>
    </div>
  );
}






export default App;
