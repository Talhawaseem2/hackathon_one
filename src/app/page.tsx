import Footer from '@/components/views/Footer'
import Hero from '@/components/views/Hero'
import Jewellery from '@/components/views/Jewellery'
import NewsLatter from '@/components/views/NewsLatter'
import ProductsType from '@/components/views/ProductsType'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsType />
      {/* Fecthing data aega yahan per */}
      <Jewellery />
      <NewsLatter />

      <Footer />
    </div>
      )
}
