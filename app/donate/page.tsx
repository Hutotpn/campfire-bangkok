"use client";

import { useEffect } from "react";

export default function DonateRedirect() {
  useEffect(() => {
    const destination = `https://hcb.hackclub.com/donations/start/campfire-bangkok`;

    if (window.gtag) {
      window.gtag("event", "donate_redirect", {
        event_category: "navigation",
        event_label: "donate_page",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to donate page...</p>;
}
