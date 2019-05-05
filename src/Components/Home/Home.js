import React from 'react'
import Typing from 'react-typing-animation'
import './Home.css'
import downarrow from './../../resources/downarrow.png'
import hello from './../../resources/hello.jpg'
import { Link } from 'react-router-dom'

const Home = (props) => {
  document.title = 'Home'

  const scrollToBottom = () => {
    window.scrollTo(0, 1000)
  }

  return (
    <div className='content'>
      <div className='serverfarm-image'>
      <h1 className='Home-title'>
        DevJobStats:~
        <Typing cursorClassName='cursor' speed={190} className='typed'>
          <Typing.Delay ms={1000} />   <img className='hello' src={hello} alt='hello' />   Hello there!<Typing.Delay ms={1000} /> Welcome to DevJobStats!
        </Typing>
      </h1>
      <img className='arrow-image' onClick={scrollToBottom} src={downarrow} alt='arrow' />
      </div>
      <div className='Home-paragraph'>
        <p>Thank you so much for checking out DevJobStats! The primary goal of this website is to help college and bootcamp grads (or anyone else new to the industry) find jobs.</p>
        <br />
        <p>If you don't mind, please fill out the brief <Link to='/Survey' className='bluelink'>survey</Link> about how you landed your FIRST job. As many entering the industry and those currently working in the field can attest, it's often getting that first job that is the hardest.</p>
        <br />
        <p>The survey itself is meant to target several different aspects of the job hunt, including your specific level of education, the number of applications you sent, the size of the company, etc.</p>
        <br />
        <p>Click <Link to='/Survey' className='bluelink'>HERE</Link> to get to the survey and <Link to='/Results' className='bluelink'>HERE</Link> to see the results</p>
      </div>
    </div>
  )
}

export default Home