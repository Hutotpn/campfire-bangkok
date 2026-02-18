"use client";

import { useEffect } from "react";

export default function HackClubRedirect() {
  useEffect(() => {
    const destination = `https://hackclub.com`;

    if (window.gtag) {
      window.gtag("event", "hackclub_redirect", {
        event_category: "navigation",
        event_label: "hackclub_page",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to Hack Club page...</p>;
}
