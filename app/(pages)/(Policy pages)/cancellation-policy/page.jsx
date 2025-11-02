import React from 'react'
import CancellationPolicyPage from './Content'
import { cancellationMetadata } from '@/components/metadata'

export const metadata = cancellationMetadata
function page() {
  return (
    <div><CancellationPolicyPage/></div>
  )
}

export default page