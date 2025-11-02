import React from 'react'
import PrivacyPolicyPage from './Content'
import { privacyMetadata } from '@/components/metadata'

export const metadata = privacyMetadata
function page() {
  return (
    <div><PrivacyPolicyPage/></div>
  )
}

export default page