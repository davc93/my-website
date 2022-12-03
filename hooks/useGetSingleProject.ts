import React from "react";

export const useGetSingleProduct = () => {
    const [product, setProduct] = React.useState({})
    React.useEffect(() => {
        const getSingleProduct = async () => {



            setProduct(product)
        }

        getSingleProduct()
    })
    return product

};
