import BASE_PATH_FORAPI from "@/components/shared/BasePath"
import AllProductsCompo from "@/components/views/AllProduct"

async function fetchAllProductsData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`)
    if(!res.ok){
        throw new Error("Failed to fetch")
    }
    return res.json();
}



const Products = async () => {
    const ProductData = await fetchAllProductsData ();
    
  return (
    <div>
        <AllProductsCompo ProductData = {ProductData}/>
    </div>
  )
}

export default Products