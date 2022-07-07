const CATEGORIES = [
  {
    id: 100,
    name: "Books",
  },
  {
    id: 101,
    name: "Video Games",
  },
  {
    id: 102,
    name: "Music",
  },
  {
    id: 103,
    name: "Movies",
  },
  {
    id: 104,
    name: "TV Shows",
  },
  {
    id: 105,
    name: "Electronics",
  },
  {
    id: 106,
    name: "Computers",
  },
  {
    id: 107,
    name: "Office",
  },
  {
    id: 108,
    name: "Home",
  },
  {
    id: 109,
    name: "Garden",
  },
  {
    id: 110,
    name: "Clothing",
  },
  {
    id: 111,
    name: "Shoes",
  },
];
export function getCategories() {
  return CATEGORIES;
}
export function getCategory(id) {
  return CATEGORIES.find((category) => category.id == id);
}
