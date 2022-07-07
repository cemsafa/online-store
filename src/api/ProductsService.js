const PRODUCTS = [
  {
    id: 100,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109,
    image: require("../../assets/products/product-100.jpg"),
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Clothing",
  },
  {
    id: 101,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 600,
    image: require("../../assets/products/product-101.jpg"),
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Electronics",
  },
  {
    id: 102,
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED",
    price: 2,
    image: require("../../assets/products/product-102.jpg"),
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Electronics",
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
