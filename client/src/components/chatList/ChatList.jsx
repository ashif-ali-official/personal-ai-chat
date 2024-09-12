import { Link } from 'react-router-dom'
import './ChatList.css'

function ChatList() {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new chat</Link>
        <Link to="/">Explore Achillis AI</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
            <Link to="/">My chat link</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt='' />
            <div className="texts">
                <span>Upgrade to Achillis AI Pro</span>
                <span>Get unlimited access to all the features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList
