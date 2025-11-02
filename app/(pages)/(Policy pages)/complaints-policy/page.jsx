import React from 'react'
import ComplaintsPolicy from './Content'
export const metadata = {
  title: 'Complaints Policy - International Conference on AI & Robotics Innovation',
  description: 'Join ICARAI 2025 in Singapore. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in AI and robotics innovation.',
  keywords: ['ICARAI', 'AI conference', 'robotics innovation', 'artificial intelligence', 'academic conference Singapore', 'research conference 2025'],
  alternates: {
    canonical: 'https://www.robotechsummit.com/complaints-policy',
  },
  openGraph: {
    title: 'ICARAI 2025 - International Conference on AI & Robotics Innovation',
    description: 'Join ICARAI 2025 in Singapore. A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICARAI 2025',
  },
}

function page() {
  return (
    <div>
      <ComplaintsPolicy/>
    </div>
  )
}

export default page
