import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='footer has-background-white'>
      <div className='content'>
        <div className='columns is-centered'>
          <div className='column is-4'>
            <div className='top is-flex is-justify-content-center'>
              Built with
              <a className='mx-1' href='https://nextjs.org' target='_blank' rel='noreferrer'>
                <Image src='/next-js.svg' alt='Made with Next' width={24} height={24}/>
              </a>
              and
              <a className='mx-1' href='https://bulma.io' target='_blank' rel='noreferrer'>
                <Image src='/made-with-bulma.png' alt='Made with Bulma' width={128} height={24}/>
            </a>
            </div>
            <div className='bottom has-text-centered'>
              Developed by James Zeng
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}