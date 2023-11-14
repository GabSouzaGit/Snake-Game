import createRect from "./js/functions/createRect.js";
import getRandom from "./js/functions/getRandom.js";
import { width, height } from "./js/constants/DEFAULT_DIMENSIONS.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;