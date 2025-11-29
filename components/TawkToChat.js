// components/TawkToChat.js
'use client'
import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/692a96a0d09421197e0c843f/1jb75op6m';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  }, []);

  return null;
}