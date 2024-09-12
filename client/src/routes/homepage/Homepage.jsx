import { Link } from 'react-router-dom'
import './Homepage.css'
import { TypeAnimation } from 'react-type-animation'
import Human1 from '/human1.jpeg'
import Human2 from '/human2.jpeg'
import Bot from '/bot.png'
import { useState } from 'react'

function Homepage() {

  const [ typingStatus, setTypingStatus ] = useState("Human1")

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="orbital" className='orbital' />
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
          <img src={Bot} alt="bot" className='bot'/>
          <div className="chat">
            <img src={typingStatus === "Human1" ? Human1 : typingStatus === "Human2" ? Human2 :  Bot } alt='chatbot' />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Human: We produce food for Mice',
                2000, () => {
                  setTypingStatus("Bot")
                },
                'Bot: We produce food for Hamsters',
                2000, () => {
                  setTypingStatus("Human2")
                },
                'Human: We produce food for Guinea Pigs',
                2000, () => {
                  setTypingStatus("Bot")
                },
                'Bot: We produce food for Chinchillas',
                2000, () => {
                  setTypingStatus("Human1")
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt='logo' />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
