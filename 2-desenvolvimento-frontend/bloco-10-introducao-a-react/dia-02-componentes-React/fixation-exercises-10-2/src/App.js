import Image from './Image'
import './App.css';

const cat = 'Cute cat staring'
function App() {
  return (
    <Image 
    src={cat}
    alt="Cute-cat-staring" />
  );
}

export default App;
