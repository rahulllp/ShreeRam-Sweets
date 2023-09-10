import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";

export const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    // name for the categories and menu card name 
    name: "Indian Dish",
    // name for the firebase categories
    urlParamName: "brunch",
  },
  {
    id: 2,
    name: "Chinese Dish",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "South Indian",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Continental",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Drinks",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
  {
    id: 7,
    name: "Icecreams",
    urlParamName: "icecreams",
  },
  {
    id: 4,
    name: "Sweets",
    urlParamName: "fish",
  },
];
