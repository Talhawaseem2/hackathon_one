import { responseType } from '@/components/utils/ProductsDataArrayAndType';
import ProductDetail from '@/components/views/ProductDetail';
import React, { FC } from 'react'

async function fetchPreviewData(slug: string) {
  let res = await fetch("https://70dmq76f.api.sanity.io/v2023-07-14/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current%3D%3D+%22cameryn-sash-tie-dress%22%5D")
  return res.json();
}

const catalog = async ({params}: {params: { slug: string }}) => {
  let data: responseType = await fetchPreviewData(params.slug);
  // Assuming data.result is an array, select the first item
  const item = data.result[0]; // Select the first item
  return (
    <div>
      <ProductDetail item={item}/>
    </div>
  );
}

export default catalog;
