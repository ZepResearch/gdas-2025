import React from "react";
import SubmitForm from "./components/Form";

import AbstractSubmissionGuidelines from "./components/SubmitGuidline";
export const metadata = {
  title: 'Submission Successful | GDAS 2025',
  description: 'Thank you for submitting your paper to The Global Defence and Aviation Skills Conference 2025 (GDAS 2025). Your submission has been received and will be reviewed by our committee.',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.gdas2025.com/submission/success',
  },
  openGraph: {
    title: 'Submission Successful | GDAS 2025',
    description: 'Your paper has been successfully submitted to The Global Defence and Aviation Skills Conference 2025. Our review committee will evaluate your submission and contact you within 2-3 weeks.',
    url: 'https://www.gdas2025.com/submission/success',
    siteName: 'GDAS 2025',
  
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
  keywords: ['GDAS 2025', 'paper submission confirmation', 'defence conference', 'aviation conference', 'submission successful', 'aerospace education'],
}
function page() {
  return (
    <div>
      <h1></h1>
      <SubmitForm />
  
   <AbstractSubmissionGuidelines/>
    </div>
  );
}

export default page;
