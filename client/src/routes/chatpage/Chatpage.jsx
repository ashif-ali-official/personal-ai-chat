import './Chatpage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt'

function Chatpage() {

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Second Test Message from AI</div>
          <div className="message user">Second Test Message from User</div>
          <div className="message">Third Test Message from AI</div>
          <div className="message user">Third Test Message from User</div>
          <div className="message">Fourth Test Message from AI</div>
          <div className="message user">Fourth Test Message from User</div>
          <div className="message">Fifth Test Message from AI</div>
          <div className="message user">Fifth Test Message from User</div>
          <div className="message">Sixth Test Message from AI</div>
          <div className="message user">Sixth Test Message from User</div>
          <div className="message">Seventh Test Message from AI</div>
          <div className="message user">Seventh Test Message from User</div>
          <div className="message">Eighth Test Message from AI</div>
          <div className="message user">Eighth Test Message from User</div>
          <div className="message">Ninth Test Message from AI</div>
          <div className="message user">Ninth Test Message from User</div>
          <div className="message">Tenth Test Message from AI</div>
          <div className="message user">Tenth Test Message from User</div>
          
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default Chatpage
