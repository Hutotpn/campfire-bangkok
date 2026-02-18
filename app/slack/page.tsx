"use client";

import { useEffect } from "react";

export default function SlackRedirect() {
  useEffect(() => {
    const destination = `https://hackclub.enterprise.slack.com/archives/C09TDQAQS9H`;

    if (window.gtag) {
      window.gtag("event", "slack_redirect", {
        event_category: "navigation",
        event_label: "slack_channel",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to Slack channel...</p>;
}
