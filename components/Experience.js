export default function Experience(props) {
  return (
    <div className='block'>
      <div className='is-flex is-justify-content-space-between'>
        <div className='has-text-weight-bold'>{props.company}</div>
        <div>{props.time}</div>
      </div>
      <div>{props.title}</div>
      <div style={{fontSize: '14px'}}>{props.description}</div>
    </div>
  )
}