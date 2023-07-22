import { createClient } from "next-sanity";


export const client = createClient({
    apiVersion: "2023-07-14",
    dataset: "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    useCdn: true,
})



// skulDrJAme8MtGgROYrIPapcHQzrJg6FdR9P1WSl6zViAhUkkH88a6sbFq5vTUR4tX3rXmexjk9eJW9eiXn5wXKhk74PdVcMVoOukGtyLlKNtmJPYlpsY4cVYyKSzw1skerZPDPqgDCLRaXWjViiQDBi9Pa6LFADtOdpuTldXmtnDcaYcQwH