import React from "react";

function ErrorPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <a href="/" style={{ color: "#007bff" }}>
        Go to Home
      </a>
    </div>
  );
}

export default ErrorPage;
