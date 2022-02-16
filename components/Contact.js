import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
  return (
    <section className='section is-small'>
      <div id={props.id} className='container mx-6'>
        <div className='columns is-centered'>
          <div className='column is-4'>
            <h1 className='title is-2'>{props.title}</h1>
            <hr/>
            <p className='subtitle is-5 pr-4'>
              <div className='block'>{props.body[0]}</div>
              <div className='block'>{props.body[1]}</div>
            </p>
          </div>
          <div className='column is-offset-1 is-5 is-flex is-flex-direction-column is-justify-content-center'>
            <div className='block'>
              <FontAwesomeIcon className='mx-2' icon={faAt}/>
              <a className='pb-1 email-link' href={'mailto:' + props.email}>{props.email}</a>
            </div>
            <div className='block'>
              <FontAwesomeIcon className='mx-2' icon={faLocationDot}/>
              {props.location}
            </div>
            <div className='block'>
              <iframe src={props.map} width='80%' height='100%' style={{border: 0}} loading='lazy'></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}