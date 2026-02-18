"use client";

import { useEffect } from "react";

export default function JoinSlackRedirect() {
  useEffect(() => {
    const destination = `https://hackclub.com/slack`;

    if (window.gtag) {
      window.gtag("event", "slack_redirect", {
        event_category: "navigation",
        event_label: "slack_join",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to Slack join page...</p>;
}
