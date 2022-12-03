import React from 'react'
import {useRouter} from 'next/router'
import { ProductDetail } from '../../components/ProjectDetail'
import { Project } from '../../models/project.model'
import { useGetSingleProduct } from '../../hooks/useGetSingleProject'

const Product = () => {
    const router = useRouter()
    const id = router.query.id as string
    const product:Project | any = useGetSingleProduct()
  return (
    <main>
        <ProductDetail {...product} />    
    </main>
  )
}

export default Project