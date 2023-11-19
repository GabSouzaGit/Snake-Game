import { width, height } from "./DEFAULT_DIMENSIONS.js";
import snake from "../elements/snake.js";

const last = snake.structure[0]

const directions = [
    [
        {
            direction: 'left',
            grow(){
                return { 
                    x: last.x - width,
                    y: last.y, 
                    direction: '00' 
                }
            }
        }, 
        {
            direction: 'right',
            grow(){
                return {
                    x: last.x + width, 
                    y: last.y, 
                    direction: '01' 
                }
            }
        }
    ],
    [
        {
            direction: 'up',
            grow(){
                return { 
                    x: last.x, 
                    y: last.y - height, 
                    direction: '10' 
                }
            }
        }, 
        {
            direction: 'down',
            grow(){
                return { 
                    x: last.x, 
                    y: last.y + height, 
                    direction: '11' 
                }
            }   
        }
    ]
]

export default directions;