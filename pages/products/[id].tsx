import React from 'react'
import {useRouter} from 'next/router'
import { ProductDetail } from '../../components/ProductDetail'
import { Product } from '../../models/product.model'
import { useGetSingleProduct } from '../../hooks/useGetSingleProduct'

const Product = () => {
    const router = useRouter()
    const id = router.query.id as string
    const product:Product | any = useGetSingleProduct()
  return (
    <main>
        <ProductDetail {...product} />    
    </main>
  )
}

export default Product