import app from './app.js'
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req,res)=> {
    res.send("working")
})

