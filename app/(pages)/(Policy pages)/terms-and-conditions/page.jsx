import React from 'react'
import TermsOfServicePage from './Content'
import { termsMetadata } from '@/components/metadata'

export const metadata = termsMetadata
function page() {
  return (
    <div><TermsOfServicePage/>  </div>
  )
}

export default page