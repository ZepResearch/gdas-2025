import React from 'react'
import ContactUs from './Content'
import { contactMetadata } from '@/components/metadata'


export const metadata = contactMetadata

function page() {
  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default page
