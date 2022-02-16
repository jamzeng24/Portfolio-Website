export default function Skills(props) {
  const skills = props.skills

  return (
    <div className='columns'>
      {
        Object.keys(skills).map(skill => (
          <div key={skill} className='column'>
            <h6 className='is-uppercase has-text-weight-bold'>{skill}</h6>
            {skills[skill].map(item => (
              <div key={item} className='item' style={{fontSize: '14px'}}>{item}</div>
            ))}
          </div>)
        )
      }
    </div>
  )
}