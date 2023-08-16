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
      <div className="flex gap-x-6">
        {/* left */}
        <div className="space-y-4">
          {item.image.map((subItem: imagesType, index: number) => (
            <div
              key={index}
              className="w-28"
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
        <div className="w-[33rem]">
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
      <div></div>
    </div>
  );
};

export default ProductDetail;
