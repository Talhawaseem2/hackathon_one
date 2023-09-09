"use client";
import {
  imagesType,
  oneProductType,
} from "@/components/utils/ProductsDataArrayAndType";
import { FC, useContext, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { PortableTextInput, SanityClient } from "sanity";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cartContext } from "@/Global/Context";
import { PortableText } from "@portabletext/react";
import toast, { Toaster } from "react-hot-toast";




const builder: any = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  let { dispatch } = useContext(cartContext);
  const [ImageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const [quantity, setQuantity] = useState(1);

  function incrementTheQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementTheQuantity() {
    if (quantity === 0) {
    } else {
      setQuantity(quantity - 1);
    }
  }

  const noification = (title : string) => toast(`😁 ${quantity} ${title} added to cart`);

  function handleAddToCart() {
    let dataToAddInCart = {
      productId: item._id,
      quantity: quantity,
    };
    dispatch( "addToCart", dataToAddInCart);
    // dispatch({ payload: "addToCart", data: dataToAddInCart });
    noification(item.productName)
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col lg:flex-row justify-center items-center py-7">
        {/* {left} */}
        <div className="flex gap-x-4 md:gap-x-8">
          {/* left */}
          <div className="space-y-4">
            {item.image.map((subItem: imagesType, index: number) => (
              <div
                key={index}
                className="w-16 md:w-28"
                onClick={() => setImageForPreviewOfSelected(subItem._key)}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={urlFor(subItem).width(1000).height(1000).url()}
                  alt={subItem.alt}
                />
              </div>
            ))}
          </div>

          {/* right */}
          <div className="w-[33rem] flex flex-wrap-0">
            {item.image.map((subItem: imagesType, index: number) => {
              if (subItem._key === ImageForPreviewOfSelected) {
                return (
                  <Image
                    key={index}
                    width={1000}
                    height={1000}
                    alt={subItem.alt}
                    src={urlFor(subItem).width(1000).height(1000).url()}
                  />
                );
              }
            })}
          </div>
        </div>
        {/* right */}
        <div className="p-6 space-y-8">
          <div>
            <h1 className="text-3xl text-gray-700 font- font-medium">
              {item.productName}
            </h1>
            <p className="text-pink-600 text-xl font-medium">
              {item.productTypes[1]}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-700">Select Size</p>
            <div className="flex gap-2 text-pink-600">
              {item.size &&
                item.size.map((subItem: string, index: number) => (
                  <div
                    key={index}
                    className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center"
                  >
                    {subItem}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex space-x-7">
            <p className="font-semibold text-xl text-gray-800">Quantity:</p>
            <div className="flex gap-2 items-center text-lg">
              <div
                onClick={decrementTheQuantity}
                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-100"
              >
                -
              </div>
              <p>{quantity}</p>
              <div
                onClick={incrementTheQuantity}
                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"
              >
                +
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <Button
              onClick={() => handleAddToCart()}
              className="px-6 h-12 text-white text-lg bg-black mt-5  "
            >
              <ShoppingCart className="mr-2 h-6 w-6" />
              Add to Cart
            </Button>
            <p className="text-2xl font-semibold ">RS:{item.price}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative py-14 px-2 border-b border-gray-400">
          <h2 className="top-0 absolute lg:text-9xl text-7xl font-bold text-[#F2F3F7] text-center -z-50">Overview</h2>
          <p className="font-semibold text-xl">Product Information</p>
        </div>
        <div className="text-gray-600-600">
          <div className="flex  px-2 py-4 ">
                  <div className="w-80   ">
                  <h3 className="font-semibold">PRODUCT DETAILS</h3>
                  </div>
                  <p className="">
                    <PortableText value={item.description} />
                  </p>
          </div>
          <div className="flex  px-2 py-4 ">
                  <div className="w-64   ">
                  <h3 className="font-semibold">PRODUCT CARE</h3>
                  </div>
                  <ul className=" pl-3 list-disc font-semibold text-gray-900">
                    <li>Hand wash using cold water.</li>
                    <li>Do not using bleach.</li>
                    <li>Hang it to dry.</li>
                    <li>Iron on low temperature.</li>
                  </ul>
          </div>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
};

export default ProductDetail;
