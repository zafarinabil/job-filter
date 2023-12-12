import react from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'
import Filter from "./Filter";

function App() {

  return (
    <body>
      <div className='container'>
        <Header></Header>
        <Card></Card>
        <Filter />
      </div>

    </body>

    )
}

export default App;
