import { useState } from 'react'
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [state, setState] = useState();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
