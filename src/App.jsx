import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={ Layout} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
