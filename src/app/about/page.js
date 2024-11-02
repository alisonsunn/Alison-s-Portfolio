import React from 'react';
import { Home } from 'lucide-react';
import { IconsList } from '../data';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className='about-background'>
        <div className='flex justify-between items-center px-40'>
          <h1 className='header-font-style text-white pl-5 bg-opacity-10 text-6xl text-center p-10'>Alison (Jiayue) Sun</h1>
          <Link href="/" passHref>
            <div className='p-2 border-white w-16 h-16 rounded-full bg-white/20 mr-8 flex items-center justify-center cursor-pointer'>
              <Home className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </Link>
        </div>
        <div className='flex justify-evenly'>
          <div className="custom-class w-6/12 ml-10">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p>
              I started my journey in web development by learning the basics of HTML, CSS, and JavaScript, and gradually expanded my skills by exploring frameworks like React and Next.js. Over time, I also gained experience with backend technologies such as Java, Python, and Node.js, which allowed me to dive into full-stack development and databases. I’m passionate about creating visually engaging websites and enjoy writing clean, efficient code. I thrive on challenges, constantly exploring new technologies and ways to grow as a developer.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <div className='custom-class h-40'>
              <h2 className='text-2xl font-bold mb-4 text-white'>Hobbies</h2>
              <span className='text-5xl'>
                📷 🏊 🍽️ 💻 🏃
              </span>
            </div>
            <div className='custom-class h-40'>
              <h2 className='text-2xl font-bold mb-4 text-white'>Cat or Dog Person</h2>
              <span className='text-5xl'>
                🐈 🐶
              </span>
            </div>
          </div>

        </div>
        <div className="flex justify-between items-center px-40 py-10">
          <img
            className="w-auto h-auto custom-class "
            src="https://github-readme-stats.vercel.app/api/top-langs?username=alisonsunn&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="CodeBucks"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <div className='grid grid-rows-2 grid-cols-5 gap-8 auto-rows-min auto-cols-auto w-auto'>
              {IconsList.map((each, key) =>
                <div className='w-20 h-20'><img src={each.src} alt={each.alt} ></img></div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

