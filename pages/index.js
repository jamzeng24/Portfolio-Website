import smoothscroll from 'smoothscroll-polyfill'
import { useEffect } from 'react'

import Section from '../components/Section'

import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Top from '../components/Top'

import Project from '../components/Project'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import user from '../content/user'

export default function Home() {  
  useEffect(() => {
    smoothscroll.polyfill()
  })

  return (
    <>
      <Meta />
      <Navbar name={user.name} title={user.title} github={user.github}/>
      <Hero name={user.name} email={user.email} hero={user.hero} now={user.now} odin={user.odin}/>
      <Section id='about' title='background'>
        <Background>
          {user}
        </Background>
      </Section>
      <Section id='skills' title='skills'>
        <Skills skills={user.skills}/>
      </Section>
      <Section id='projects' title='projects'>
        {user.projects.map(proj => <Project key={proj.name} name={proj.name} description={proj.description} tags={proj.tags} github={proj.github} url={proj.url}/>)}
      </Section>
      <Section id='experience' title='experience'>
        {user.experience.map(job => <Experience key={job.title} company={job.company} title={job.title} time={job.time} description={job.description}/>)}
      </Section>
      <Contact id='contact' title={user.contact.title} body={user.contact.body} email={user.email} location={user.location} map={user.contact.map}/>
      <Footer />
      <Top />
    </>
  )
}