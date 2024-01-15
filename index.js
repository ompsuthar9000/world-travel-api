import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Mongoose from "mongoose";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import reviewRoutes from "./routes/review.js";
import bookingRoutes from "./routes/booking.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOption = {
  origin: true,
  credentials: true,
};

//database connection
Mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB database connected ");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

//basic Routes
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.get('/',(req,res)=>{
  res.json('working')
})

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
