dotenv.config();
import dotenv from "dotenv";
import JWT from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;

export default function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // Middleware function to validate JWT tokens
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).send("A token is required for authentication");
  }

  const token = authHeader.split(" ")[1]; // The authorization header is expected to be in the format "Bearer [token]"

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }

  try {
    const decoded = JWT.verify(token, secret); // Verify the token using the secret key and decode it
    console.log("decoded : ", decoded);
    req.user = decoded;
  } catch (error) {
    return res.status(400).send("Invalid Token");
  }
  return next();
}
