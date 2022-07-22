import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]
 export   const accordionData = [
  {
    id:1,
    title: 'Design',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum.`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0089/4487/7630/files/swatches_1_800x.jpg?v=1618590302',
    imageAlt: 'counch'

  },
  {
    id:2,
    title: 'Craftmanship',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis!`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0089/4487/7630/files/swatches_3_800x.jpg?v=1618594188',
    imageAlt: 'counch'
  },
  {
    id:3,
    title: 'Accessibility',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolor ut sequi minus iste?`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0089/4487/7630/files/24_0def935c-c531-45b2-9616-e674049aba8d_800x.png?v=1618590470',
    imageAlt: 'counch'
  },
  {
    id:4,
    title: 'Sustainability',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolor ut sequi minus iste?`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0089/4487/7630/files/20_800x.png?v=1618590591',
    imageAlt: 'counch'
  }
];


export const products_url = 'http://shopenze-api.netlify.app/api/products'


export const single_product_url = `http://shopenze-api.netlify.app/api/single-product?id=`