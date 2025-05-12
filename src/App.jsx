

import './App.css'
import ContentAccordion from './components/ContentAccordion.jsx';

function App() {

  return (
    <>
    <div className='header-wrapper'>
      <div className='title-wrapper'>
        <h1>10UP Content Accordion Component Code Example</h1>
      </div>
      <div className='img-wrapper'>
        <img src="/logo.png"/>
      </div>

    </div>

      <ContentAccordion/>
    </>
  )
}

export default App