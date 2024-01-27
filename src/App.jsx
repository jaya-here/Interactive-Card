import './App.css'
import BackCard from './components/BackCard/BackCard'
import CardFormCheck from './components/CardForm/CardFormCheck'
import CardFormContextProvider from './components/Context/Cardformcontext'
import FrontCard from './components/FrontCard/FrontCard'

function App() {

  return (
    <>
      <CardFormContextProvider>
      <div className='container'>
      <div className='desktop-view'>
      <div className='desktop-side-view'>
      <div className='card__set'>
      <div className='front__card'>
      <BackCard></BackCard>
      <FrontCard></FrontCard>
      </div>
      </div>
      </div>
      <CardFormCheck></CardFormCheck>
     </div>
      </div>
      </CardFormContextProvider>
      
    </>
  )
}

export default App
