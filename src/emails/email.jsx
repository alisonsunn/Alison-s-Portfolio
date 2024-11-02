import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Email({ name, email, message }) {
  return (
    <Html>
      <div
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        <h1>Hello {name},</h1>
        <p>Thank you for your message!</p>
        <p><strong>Your email:</strong> {email}</p>
        <p><strong>Your message:</strong> {message}</p>
      </div>
    </Html>
  );
}
