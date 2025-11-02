import React from 'react'
import AboutOrganizerPage from './Content'
import { aboutOrganizersMetadata } from '@/components/metadata'

export const metadata = aboutOrganizersMetadata
function page() {
  return (
    <div>
      
      <AboutOrganizerPage/>
    </div>
  )
}

export default page
