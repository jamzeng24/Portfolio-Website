import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

export default function Background(props) {
  const user = props.children

  return(
    <div className='content'>
      <div className='block'>
        {user.background[0]}
        <a className='has-text-info' href={user.odin.url} target='_blank' rel='noreferrer'>{user.odin.name}</a>
        {' and '}
        <a className='has-text-info' href={user.app.url} target='_blank' rel='noreferrer'>{user.app.name}</a>
        {'.'}
      </div>
      <div className='block'>
        {user.background[1]}
        <a className='has-text-info' href={user.school.url} target='_blank' rel='noreferrer'>{user.school.name}</a>
        {user.background[2]}
      </div>
      <div className='block'>
        {user.background[3]}
      </div>
      <div className='block'>
        <a className='resume-link is-size-5' href='/resume.pdf' target='_blank'>
          My Resume
          <FontAwesomeIcon className='arrow has-text-info ml-2' icon={faLongArrowAltRight} />
        </a>
      </div>
    </div>
  )
}