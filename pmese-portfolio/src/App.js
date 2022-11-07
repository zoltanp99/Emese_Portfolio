import { HomePage } from './components/HomePage/HomePage';
import { Portfolio } from './components/Portfolio/Portfolio';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />}/>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
