import React from 'react'
import AboutPage from './Content'
import { aboutConferenceMetadata } from '@/components/metadata'

export const metadata = aboutConferenceMetadata
function page() {
  return (
    <div>
      <AboutPage/>
    </div>
  )
}

export default page
