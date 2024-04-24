import './App.css'
import { Card } from './components/Card/';
import { ListCard } from './components/ListCard/';
import { DetailTrainer } from './pages/DetailTrainer';
import { FormTrainer } from './pages/FormTrainers';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <>
      <ListCard />
      <Card />
      <Home />
      <DetailTrainer />
      <FormTrainer />
      <NotFound />
    </>
  )
}

export default App
