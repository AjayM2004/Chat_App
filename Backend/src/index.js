import express from 'express';
import authRoutes from "./routes/auth.route.js";



const app = express();
const port = process.env.PORT || 3007;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send(`Signup`);
});

router.post("/login", (req, res) => {
  res.send(`Login`);
});

router.post("/logout", (req, res) => {
  res.send("Logout");
});

export default router;