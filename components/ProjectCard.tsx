import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../models/project.model'

export const ProductCard = ({title, price , description, images }:Project) => {
  return (
    <div className='product-card'>
        <Link href={`/product/${title}`}>
          <Image src={images[0]} alt={title} width={280} height={350}/>
        </Link>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
        
    </div>
  )
}