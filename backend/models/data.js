import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "akash",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "sourav",
      email: "user@example",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "gaming 1",
      category: " component 1",
      image: "/images/p1.jpg",
      price: 140,
      countInStock: 6,
      brand: "brand 1",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "gaming 2",
      category: " component 2",
      image: "/images/p2.jpg",
      price: 180,
      countInStock: 15,
      brand: "brand 2",
      rating: 2,
      numReviews: 10,
      description: "high quality product 1",
    },
    {
      name: "gaming 3",
      category: " component 3",
      image: "/images/p3.jpg",
      price: 110,
      countInStock: 8,
      brand: "brand 3",
      rating: 4.8,
      numReviews: 10,
      description: "high quality product 2",
    },
    {
      name: "gaming 4",
      category: " component 4",
      image: "/images/p4.jpg",
      price: 130,
      countInStock: 7,
      brand: "brand 4",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product 3",
    },
    {
      name: "gaming 5",
      category: " component 5",
      image: "/images/p5.jpg",
      price: 190,
      countInStock: 4,
      brand: "brand 5",
      rating: 4.8,
      numReviews: 10,
      description: "high quality product 4",
    },
    {
      name: "gaming 6",
      category: " component 6",
      image: "/images/p6.jpg",
      price: 160,
      countInStock: 11,
      brand: "brand 6",
      rating: 4.9,
      numReviews: 4,
      description: "high quality product 5",
    },
    {
      name: "gaming 7",
      category: " component 6",
      image: "/images/p7.jpg",
      price: 160,
      countInStock: 23,
      brand: "brand 6",
      rating: 4.9,
      numReviews: 7,
      description: "high quality product 5",
    },
    {
      name: "gaming 8",
      category: " component 6",
      image: "/images/p8.jpg",
      price: 160,
      countInStock: 17,
      brand: "brand 6",
      rating: 4.9,
      numReviews: 10,
      description: "high quality product 5",
    },
    {
      name: "gaming 9",
      category: " component 6",
      image: "/images/p9.jpg",
      price: 160,
      countInStock: 0,
      brand: "brand 6",
      rating: 4.9,
      numReviews: 10,
      description: "high quality product 5",
    },
    {
      name: "gaming 10",
      category: " component 6",
      image: "/images/p10.jpg",
      price: 160,
      countInStock: 6,
      brand: "brand 6",
      rating: 3,
      numReviews: 10,
      description: "high quality product 5",
    },
  ],
};
export default data;