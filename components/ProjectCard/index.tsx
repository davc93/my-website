import Link from 'next/link'
import React from 'react'
import { Project } from '../../models/project.model'



export const ProjectCard = ({ name, featureImage, description,id }: Project) => {

  return (
    <div className='project-card'>
      <img src={featureImage || ''} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link className='btn btn--primary' href={`/projects/${id}`}>More details</Link>
    </div>
  )
}
