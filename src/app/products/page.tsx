"use client"
import React from "react";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import AllProductsCompo from "@/components/views/AllProduct";

async function fetchAllProductData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

const Products = () => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchAllProductData();
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {productData ? (
                <AllProductsCompo ProductData={productData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Products;
