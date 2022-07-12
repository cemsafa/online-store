const PRODUCTS = [
  {
    id: 100,
    name: "Fjallraven Backpack",
    price: 109,
    image: require("../../assets/products/product-100.jpg"),
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    categoryId: 110,
  },
  {
    id: 101,
    name: "Acer SB220Q",
    price: 599.99,
    image: require("../../assets/products/product-101.jpg"),
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    categoryId: 105,
  },
  {
    id: 102,
    name: "Samsung CHG90",
    price: 999.99,
    image: require("../../assets/products/product-102.jpg"),
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    categoryId: 105,
  },
  {
    id: 103,
    name: "Mens Casual T-Shirts",
    price: 22.3,
    image: require("../../assets/products/product-103.jpg"),
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    categoryId: 110,
  },
  {
    id: 104,
    name: "Petite Micropave",
    price: 168,
    image: require("../../assets/products/product-104.jpg"),
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    categoryId: 111,
  },
  {
    id: 105,
    name: "Kirby and the Forgotten Land",
    price: 54.74,
    image: require("../../assets/products/product-105.jpg"),
    description:
      "Join Kirby in an unforgettable journey through a mysterious world in a 3D platforming adventure\nFloat off on an all-new adventure as the powerful puffball, Kirby. Explore in 3D stages as you discover a mysterious world with abandoned structures from a past civilization—like a shopping mall?! Copy enemies’ abilities like the new Drill and Ranger and use them to attack, explore your surroundings, and save the kidnapped Waddle Dees from the ferocious Beast Pack alongside the mysterious Elfilin. Hope you're hungry for an unforgettable adventure!",
    categoryId: 101,
  },
  {
    id: 106,
    name: "Demo Product",
    price: 12.98,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 102,
  },
  {
    id: 107,
    name: "Demo Product",
    price: 199,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 103,
  },
  {
    id: 108,
    name: "Demo Product",
    price: 9.99,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 107,
  },
  {
    id: 109,
    name: "Demo Product",
    price: 1099,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 108,
  },
  {
    id: 110,
    name: "Demo Product",
    price: 749,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 109,
  },
  {
    id: 111,
    name: "Demo Product",
    price: 128.95,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 104,
  },
  {
    id: 112,
    name: "Demo Product",
    price: 32.91,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 105,
  },
  {
    id: 113,
    name: "Demo Product",
    price: 10000,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 106,
  },
  {
    id: 114,
    name: "Demo Product",
    price: 3.12,
    image: require("../../assets/products/product.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci enim, venenatis sit amet dui eu, pretium sollicitudin libero. In ultricies tortor quis nunc vestibulum.",
    categoryId: 100,
  },
];

export function getProducts(categoryId) {
  return PRODUCTS.filter((product) => product.categoryId == categoryId);
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
