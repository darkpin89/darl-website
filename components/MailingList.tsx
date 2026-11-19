"use client";
import { useState } from "react";
import { site } from "@/data/site";

export default function MailingList() {
  const [done, setDone] = useState(false);
  const action = site.mailingListAction;

  if (action) {
    return (
      <form className="mail-form" action={action} method="post" target="_blank">
        <label className="sr-only" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="Enter your email" />
        <button type="submit" className="btn btn-pink">Subscribe</button>
      </form>
    );
  }

  return (
    <form
      className="mail-form"
      onSubmit={(e) => {
        e.preventDefault();
        const email = new FormData(e.currentTarget).get("email");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Subscribe DARL mailing list")}&body=${encodeURIComponent(`Please add ${email} to the mailing list.`)}`;
        setDone(true);
      }}
    >
      <label className="sr-only" htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="Enter your email" />
      <button type="submit" className="btn btn-pink">{done ? "Thanks!" : "Subscribe"}</button>
    </form>
  );
}
