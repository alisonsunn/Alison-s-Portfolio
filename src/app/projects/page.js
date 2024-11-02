import React from 'react';
import { projectsData } from '@/app/data'
import { Project } from '@/components/project/project';
import { Home } from 'lucide-react';
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className='project-background flex justify-between items-center'>
        <h1 className='header-font-style pl-5 bg-opacity-10'>Projects</h1>
        <Link href="/" passHref>
          <div className='p-2 border-white w-16 h-16 rounded-full bg-white/20 mr-8 flex items-center justify-center cursor-pointer'>
            <Home className="text-white w-6 h-6 cursor-pointer" />
          </div>
        </Link>
      </div>
      <div className='project-background grid grid-cols-3 gap-4 pl-5 pr-5'>
        {projectsData.map((each) => (
          <Project
            project={each}
            key={each.id}
            title={each.name}
            description={each.description}
          >{each.name}</Project>
        ))}
      </div>
    </>
  );
}

