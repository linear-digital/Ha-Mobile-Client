import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {

  return (
    <div className='container mx-auto  py-16'>
      <div className="my-inpo mb-5 py-5">
        <div className="avatar">
          <div className="w-32 h-36 rounded">
            <img src="https://i.ibb.co/smCH4ZD/283342077-757600998736366-5383732411825892613-n.jpg" alt='my avater' />
          </div>
        </div>
        <h1 className='font-bold'>Name : <span className='font-normal'>Hazrat Ali</span></h1>
        <h1 className='font-bold'>Email : <span className='font-normal'>hazratali113194@gmail.com</span></h1>
        <h1 className='font-bold'>Phone : <span className='font-normal'> +8801581610293</span></h1>
        <h1 className='font-bold mt-3'>Skills</h1>
        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 list-disc border p-5'>
          <li>
            <h1>React</h1>
          </li>
          <li>Javascript</li>
          <li>Node js</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Css</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
        <div className=''>
          <p className='font-bold mt-5'> I am Hazrat Ali.  I am studied BSC in CSE </p>
          <p className='mt-4'>
            University Of IUS . I want to be Software Engineer. Now I want to be MERN Stack Developer. I Love Tech  Field so that I love to do this Work. So my Next shortterm goal is to be a Developer, And My Largest Goal is to be Google or Microsoft Software Engineer.
          </p>
          <p className='mt-3'>
            How to Achieve My goal a common goal for engineer is learning a new skill so.
            I am Focusing a new skill. Skills can be gain  day-by-day pratice. So, I should pratice more and more. I have to dedicated about my Goals.
          </p>
        </div>


      </div>

    </div>
  )
}

export default Portfolio