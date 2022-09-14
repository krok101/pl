import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index, Player } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/player' element={<Player />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
