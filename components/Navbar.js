import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Navbar(props) {
  const [isActive, setisActive] = useState(false)

  const handleClick = (e) => {
    const source = e.target.innerHTML.toLowerCase()

    window.scrollTo({
      top: document.getElementById(source).offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <section className='section'>
      <div className='container'>
        <nav className='navbar is-transparent mx-6' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <span className='navbar-item is-flex-direction-column'>
              <p className='is-size-4'>{props.name}</p>
              <p>{props.title}</p>
            </span>
            <a onClick={() => {setisActive(!isActive)}}
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              role='button'
              aria-label='menu'
              aria-expanded='false'
              data-target='burger'>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>

          <div id='burger'
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className='navbar-end'>
              <button className='mx-1 scroll-link about navbar-item' onClick={handleClick}>About</button>
              <button className='mx-1 scroll-link skills navbar-item' onClick={handleClick}>Skills</button>
              <button className='mx-1 scroll-link projects navbar-item' onClick={handleClick}>Projects</button>
              <button className='mx-1 scroll-link experience navbar-item' onClick={handleClick}>Experience</button>
              <button className='mx-1 scroll-link contact navbar-item' onClick={handleClick}>Contact</button>
              <a className='navbar-item' href={props.github} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='is-size-5' icon={faGithub} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
