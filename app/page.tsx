"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "campfire_redirect", {
        event_category: "navigation",
        event_label: "campfire_bangkok",
        event_callback: () => {
          window.location.href = "https://campfire.hackclub.com/bangkok";
        },
      });
    } else {
      window.location.href = "https://campfire.hackclub.com/bangkok";
    }
  }, []);

  return <p>Redirecting...</p>;
}
