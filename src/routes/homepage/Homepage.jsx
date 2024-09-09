import { Link } from 'react-router-dom'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
      <img src="../../../public/orbital.png" alt="orbital" className='orbital' />
      <div className="left">
        <h1>Achillis AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>A experimental chat AI created by Ashif Ali, Senior Software Engineer using ReactJs and Gemini AI.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/../../public/bot.png" alt="bot" className='bot'/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
