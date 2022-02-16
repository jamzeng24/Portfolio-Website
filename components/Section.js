// a normal centered section for my website
export default function Section(props) {
  const title = props.title
  const id = props.id

  return (
    <section className='section'>
      <div id={props.id} className='container m-6'>
        <div className='columns is-centered'>
          <div className='column is-6'>
            {title ? <h5 className='title is-5 is-uppercase'>{title}</h5> : ''}
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}