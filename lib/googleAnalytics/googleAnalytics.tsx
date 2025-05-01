"use client"

import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics() {

    const GA_TRACKING_ID: string |undefined = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID, {
        page_path: window.location.pathname,
      });
    }
  },);

    return (
      <>
       <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      </>
    );
  }