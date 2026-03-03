

Set-Cookie: JWT_TOKEN=abc123; HttpOnly; Secure;

```
fetch("/api/user", {
  method: "GET",
  credentials: "include", 
});