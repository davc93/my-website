import Link from 'next/link'
import React from 'react'
import { Project } from '../../models/project.model'



export const ProjectCard = ({ title, images, description,id }: Project) => {

  return (
    <div className='project-card'>
      <img src={images[0] || ''} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className='btn btn--primary' href={`/projects/${id}`}>More details</Link>
    </div>
  )
}
