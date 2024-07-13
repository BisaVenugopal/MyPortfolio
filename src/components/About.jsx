import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>As a dedicated and passionate full-stack development fresher, I have refined my skills through diverse and challenging projects across various domains. I successfully developed an e-commerce application, a movie streaming site similar to Amazon Prime, and a comprehensive real estate application. Utilizing React for the frontend, Node.js for the backend, and styled with HTML and Tailwind CSS, these projects have provided me with a robust foundation in creating responsive, user-centric, and efficient web applications.

</p>
            <br />
            <p className='text-xl'>My proficiency extends to .NET MVC architecture, enabling me to tackle complex problems and deliver scalable solutions. I possess a comprehensive understanding of machine learning, demonstrated through minor projects. Familiar with tools like GitHub for version control and MongoDB for database management, I am well-equipped for collaborative, data-driven development. Eager to contribute to impactful projects, I am prepared to work with forward-thinking teams in the tech industry.</p>
        </div>
    </div>
  )
}

export default About