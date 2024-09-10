import './DashboardPage.css'

function DashboardPage() {
  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src='/public/logo.png' alt='' />
          <h1>ACHILLIS AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src='/public/chat.png' alt='' />
            <span>Create a new chat</span>
          </div>
          <div className="option">
            <img src='/public/image.png' alt='' />
            <span>Analyze images</span>
          </div>
          <div className="option">
            <img src='/public/code.png' alt='' />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type='text' placeholder='Ask me anything...' />
          <button>
            <img src='/public/arrow.png' alt='' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
