"use client";

import { useEffect } from "react";

export default function HutoSlackRedirect() {
  useEffect(() => {
    const destination = `https://hackclub.enterprise.slack.com/team/U09PQ98JE12`;

    if (window.gtag) {
      window.gtag("event", "slack_redirect", {
        event_category: "navigation",
        event_label: "slack_user_huto",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to Huto's Slack...</p>;
}
