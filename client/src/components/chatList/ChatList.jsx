import { Link } from 'react-router-dom'
import './ChatList.css'
import { useQuery } from '@tanstack/react-query'

function ChatList() {

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userChats`,{
        credentials:"include"
      }).then((res) => res.json()),
  })

  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new chat</Link>
        <Link to="/">Explore Achillis AI</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>RECENT CHATS</span>
        <div className="list">
          { isPending
          ? "Loading..." 
          : error 
          ? "Something went wrong!" 
          : data?.map( (chat) => (
            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
              {chat.title}
            </Link>
          ))}
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
