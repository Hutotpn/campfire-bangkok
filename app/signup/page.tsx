"use client";

import { useEffect } from "react";

export default function SignupRedirect() {
  useEffect(() => {
    const destination = `https://forms.hackclub.com/campfire-signup?r=43&event=reciiOJhwrjpdog92`;

    if (window.gtag) {
      window.gtag("event", "signup_redirect", {
        event_category: "navigation",
        event_label: "signup_page",
        event_callback: () => {
          window.location.href = destination;
        },
      });
    } else {
      window.location.href = destination;
    }
  }, []);

  return <p>Redirecting to signup...</p>;
}
