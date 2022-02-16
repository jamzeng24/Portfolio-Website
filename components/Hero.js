import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default function Hero(props) {
  return (
    <section className='section'>
      <div className='container'>
        <section className='hero'>
          <div className='hero-body'>
            <div className='columns'>
              <div className='column is-three-quarters'>
                <div className='mx-6 is-size-5'>
                  <p>
                    Hi there, I&apos;m
                  </p>
                  <p className='title is-1 is-spaced'>
                    {props.name}.
                  </p>
                  <p className='subtitle is-3' style={{lineHeight: 2}}>
                    {props.hero}
                  </p>
                  <p className='subtitle is-5'>
                    {props.now[0] + ' '}
                    <a className='pb-1 odin' href={props.odin.url} target='_blank' rel='noreferrer'>
                      {props.odin.name}
                    </a>
                    {' ' + props.now[1]}
                  </p>
                  <p className='subtitle'>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className='mr-2'/>
                    <a className='pb-1 email-link' href={'mailto:' + props.email} target='_blank' rel='noreferrer'>
                      {props.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className='column'></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}