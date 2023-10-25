import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.tsx';
import Menu from './components/Menu.tsx';
import Dashboard from './components/Dashboard.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav />

      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
