import BASE_PATH_FORAPI from "@/components/shared/BasePath"
import { responseType, oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import ProductDetail from "@/components/views/ProductDetail"
import ContextWrapper from "@/Global/Context/"
import { FC } from "react"
import { Metadata } from "next"




export async function generateMetadata({ params }: {params:{slug : string}}) {
    // read route params
    const id = params.slug;
   
    // fetch data
    const product = await fetch(`https://peu0aj6l.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products]`).then((res : any) => res.json())
   
    return {
        title : "Static title",
        description : "",
    };
  }





// fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
    let res = await fetch(`https://peu0aj6l.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type%20%3D%3D%20%22products%22%20%26%26%20slug.current%3D%3D%20%22${slug}%22%5D`)
    return res.json();
};





export async function generateStaticParams () {
    let res = await fetch(`https://peu0aj6l.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products]`).then((res : any) => res.json())
    console.log("Res : " , res);
    return res.result.map(( item : oneProductType) => ({slug : item.slug}));
}






const Catalog = async ({ params }: { params: { slug: string } }) => {
    let data: responseType = await fetchPreviewData(params.slug)
    return (
        <ContextWrapper>
            <ProductDetail item={data.result[0]} />
        </ContextWrapper>
    )
}

export default Catalog