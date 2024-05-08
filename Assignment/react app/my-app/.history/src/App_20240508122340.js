import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  return (
    <>
      <Navbar title="Text-Utils" />

      <div className='container'>
        <TextForm />
      </div>
    </>

  );
}

export default App;
