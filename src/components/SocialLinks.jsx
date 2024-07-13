import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { Bs0Square } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
              href: 'https://www.linkedin.com/in/b-venugopal-506391193/',
              style: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                GitHub<FaGithub size={30}/>
                </>
            ),
              href: 'https://github.com/BisaVenugopal?tab=repositories',
        },
        {
            id: 3,
            child: (
                <>
                Mail<MdMailOutline size={30}/>
                </>
            ),
              href: 'bisavenugopal2000@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume<Bs0Square size={30}/>
                </>
            ),
              href: '/Resume.pdf',
              style: 'rounded-br-md',
              download: true
        },
    ];

    return (
        <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li
                        key={id}
                        className={
                            'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] ' + 
                            (style || '')
                        }
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
