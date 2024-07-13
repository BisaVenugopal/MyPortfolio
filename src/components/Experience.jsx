import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import React1 from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'
import NodeJs from '../assets/nodejs.png'
import Mangodb from '../assets/mangodb.png'
import Net from '../assets/Net.png'

const Experience = () => {
    const images = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: React1,
            title: 'React Js',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: NodeJs,
            title: 'NodeJs',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: Mangodb,
            title: 'Mango DB',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: Github,
            title: 'Github',
            style: 'shadow-black-500'
        },
        {
            id: 9,
            src: Net,
            title: '.NET',
            style: 'shadow-red-500'
        },
    ]
  return (
    <div  name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies that I was well known</p>
            </div>

            <div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        images.map(({id,src,title,style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
                            <img src={src} alt='' className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Experience