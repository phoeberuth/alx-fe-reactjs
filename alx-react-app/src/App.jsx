import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header'; // Import Header
import MainContent from './components/MainContent'; // Import MainContent
import Footer from './components/Footer'; // Import Footer

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     {/* Displaying the WelcomeMessage component */}
     <WelcomeMessage />

     {/*Include Header, MainContent, and Footer components */}
     <Header/>
     <MainContent/>
     <Footer/>

      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
