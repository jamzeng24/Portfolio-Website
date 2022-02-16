import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

export default function Top() {
  const [isHidden, setisHidden] = useState('hidden')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > document.getElementById('about').offsetTop) {
        setisHidden('visible')
      } else {
        setisHidden('hidden')
      }
    })
  })

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button className='p-3' id='top' onClick={handleClick} style={{visibility: isHidden}}>
      <FontAwesomeIcon className='is-size-4' icon={faHandPointUp} />
    </button>
  )
}