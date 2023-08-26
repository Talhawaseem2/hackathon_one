import ContextWrapper from "@/Global/Context"
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import CartComp from "@/components/views/CartParent/cartChild"


async function fatchAllStoreProducts() {
    let res = await fetch(`https://70dmq76f.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`, {
        cache: "no-store",
    })
    return res.json();
};


const Cart = async () => {
    let allProductsOfStore = await fatchAllStoreProducts();
    console.log(allProductsOfStore)

    return (
        <CartComp allProductsOfStore={allProductsOfStore.result} />
    )
}
export default Cart

