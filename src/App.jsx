import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header'; // Import Header
import MainContent from './components/MainContent'; // Import MainContent
import Footer from './components/Footer'; // Import Footer
import UserProfile from './components/UserProfile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     {/* Displaying the WelcomeMessage component */}
     <WelcomeMessage />

     {/*Include Header, MainContent, and Footer components */}
     <Header />
     <MainContent />
     <Footer />

     {/* Add UserProfile Component with required props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      
     
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

export default App;
