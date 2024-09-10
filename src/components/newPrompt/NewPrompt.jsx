import { useEffect, useRef } from 'react'
import './NewPrompt.css'

function NewPrompt() {

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView({behavior: 'smooth'})
    }, [])

  return (
    <>
        <div className="endChat" ref={endRef}></div>
        <form action="" className='newForm'>
            <label htmlFor="file">
                <img src='/public/attachment.png' alt='' />
            </label>
            <input id='file' type='file' multiple={false} hidden />
            <input type="text" placeholder='Ask me anything...' />
            <button>
                <img src='/public/arrow.png' alt='' />
            </button>
        </form>
    </>
  )
}

export default NewPrompt
