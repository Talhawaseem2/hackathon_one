"use client";
import {
  imagesType,
  oneProductType,
} from "@/components/utils/ProductsDataArrayAndType";
import { FC, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { SanityClient } from "sanity";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const builder: any = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [ImageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const [quantity, setQuantity] = useState(1);

  function incrementTheQuantity () {
    setQuantity(quantity + 1)
  }
  ;
  function decrementTheQuantity () {
    if(quantity === 0){

    }else{
        setQuantity(quantity - 1)
      }
  };
  
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
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
            {item.size && item.size.map((subItem: string, index: number) => (
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
            className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-100">
              -
            </div>
            <p>{quantity}</p>
            <div
              onClick={incrementTheQuantity}
             className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800">
              +
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <Button className='px-6 h-12 text-white text-lg bg-black mt-5  '>
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    Add to Cart
                </Button>
                <p className="text-2xl font-semibold ">RS:{item.price}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
