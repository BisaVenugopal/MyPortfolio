import React from 'react'
import ecommerce from '../assets/ecommerce.png'
import movieo from '../assets/movie.png'
import realEstate from '../assets/real estate.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: ecommerce,
            demo:'https://ecommerce-mern-stack-application-9srb.vercel.app/',
            code:'https://github.com/BisaVenugopal/Ecommerce-MernStack-Application'
        },
        {
            id: 2,
            src: movieo,
            demo:'https://movieproject-lake.vercel.app/',
            code:'https://github.com/BisaVenugopal/MovieAppProject'
        },
        {
            id: 3,
            src: realEstate,
            demo:'https://mern-real-estate-0mn1.onrender.com/',
            code:'https://github.com/BisaVenugopal/MernRealEstateProject'
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src,demo,code}) => (
                  
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='Ecommerce' className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center  justify-center'>
                        <a href={demo} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Demo
                </a>
                <a href={code} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    Code
                </a>
    
                        </div>
                       
                    </div>
               

                ))
            }
             </div>
          
        </div>

    </div>
  )
}

export default Portfolio
