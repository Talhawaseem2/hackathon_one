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

const builder: any = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [ImageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  console.log("_key : ", ImageForPreviewOfSelected);
  return (
    <div>
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
      <div>
        <div>
          <h1>{item.productName}</h1>
          <p>{item.productTypes[1]}</p>
        </div>
        <div>
          <p>Select Size</p>
        </div>
        <div className="flex gap-4">
          {
              item.size.map((subItem : string , index : number) => (
              <div key={index} className="rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{subItem}</div>
            ))
          }
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
