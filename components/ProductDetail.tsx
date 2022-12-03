import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Product } from '../models/product.model'

export const ProductDetail = ({title,images,description,price}:Product ) => {
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
