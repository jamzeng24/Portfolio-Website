import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project(props) {
  const name = props.name
  const description = props.description
  const tags = props.tags

  return (
    <div className='block'>
      <a href={props.github} target='_blank' rel='noreferrer'>
        <span className='has-text-weight-bold'>{props.name}</span>
        <FontAwesomeIcon className='ml-2 has-text-info' icon={faGithub} />
      </a>
      {props.url ? <a href={props.url} target='_blank' rel='noreferrer'><FontAwesomeIcon className='ml-2 has-text-info' icon={faLink}/></a> : ''}
      <p>{props.description}</p>
      <div className='tags'>
        {tags.map((tag, i) => <span key={i} className='tag is-info is-light'>{tag}</span>)}
      </div>
    </div>
  )
}