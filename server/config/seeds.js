const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Box of Cookies",
      description: "A box with a dozen chocolate chip cookies inside.",
      image: "cookies.jpg",
      category: categories[0]._id,
      price: 12.99,
      quantity: 500,
    },
    {
      name: "Macarons",
      description:
        "This elegant treat comes in a variety pack of ten different macarons.",
      image: "macarons.jpg",
      category: categories[0]._id,
      price: 8.99,
      quantity: 500,
    },
    {
      name: "Plates",
      category: categories[1]._id,
      description:
        "These plates were hand created in Italy and are microwave and dishwasher safe.",
      image: "plates.jpg",
      price: 17.99,
      quantity: 20,
    },
    {
      name: "Laptop",
      category: categories[2]._id,
      description:
        "This is the new 13.3 inch model NAC7 laptop created by our very own here at list-hub.",
      image: "laptop.jpg",
      price: 899.99,
      quantity: 50,
    },
    {
      name: "Television",
      category: categories[2]._id,
      description: "This is a brand new 62 inch flat screen television.",
      image: "television.jpg",
      price: 749.99,
      quantity: 100,
    },
    {
      name: "Robot Vacuum",
      category: categories[2]._id,
      description:
        "Ever too tired to vacuum? This here lil robot will do it for you.",
      image: "robot-vac.jpg",
      price: 599.99,
      quantity: 30,
    },
    {
      name: "The Passion Within",
      category: categories[3]._id,
      description: "The Passion Within -- A Women's journal",
      image: "passion-within-book.jpg",
      price: 10.99,
      quantity: 30,
    },
    {
      name: "The World Atlas of Coffee",
      category: categories[3]._id,
      description:
        "This is the perfect book for every coffee connoisseur out there.",
      image: "coffee-book.jpg",
      price: 19.99,
      quantity: 100,
    },
    {
      name: "Your Soul is a River",
      category: categories[4]._id,
      description: "Your Soul is a River by Nikita Gill",
      image: "soul-book.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Set of Toy Soldiers",
      category: categories[4]._id,
      description: "A 7-pack of miniature toy soldiers.",
      image: "soldiers-toy.jpg",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "Unicorn Plush",
      category: categories[4]._id,
      description: "A plush stuffed unicorn toy for children.",
      image: "unicorn-toy.jpg",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "Set of Dinosaurs",
      category: categories[4]._id,
      description: "Features a pack of assorted dinosaurs.",
      image: "dinosaur-toy.jpg",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    userName: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    userName: "Elijah",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
