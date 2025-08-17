require("dotenv").config();
const connectDB = require("./config/db");
const ProductModel = require("./models/Product.model");

connectDB();

async function seedProducts() {
  const products = [
    {
      name: "Wireless Mouse",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1631749352438-7d576312185d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI.",
    },
    {
      name: "Mechanical Keyboard",
      price: 5499,
      image:
        "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "RGB backlit mechanical keyboard with blue switches and metal frame.",
    },
    {
      name: "Gaming Laptop",
      price: 84999,
      image:
        "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-performance gaming laptop with RTX 4070 GPU and 16GB RAM.",
    },
    {
      name: "Bluetooth Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Over-ear wireless headphones with noise cancellation and 40-hour battery life.",
    },
    {
      name: "4K Monitor",
      price: 19999,
      image:
        "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "27-inch UHD 4K display with HDR support and 144Hz refresh rate.",
    },
  ];

  await ProductModel.deleteMany({});
  await ProductModel.create(products);
  console.log("DB seeded successfully!")
}

seedProducts();
