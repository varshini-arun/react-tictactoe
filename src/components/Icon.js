// rfce
import React from 'react'
import { FaPlus, FaRegCircle, FaPenAlt } from "react-icons/fa";

function Icon({name}) {
    switch (name){
        case 'circle': 
            return <FaRegCircle />;
        case 'plus': 
            return <FaPlus />;
        default:
            return <FaPenAlt />;
    }
}

export default Icon;

// rafce
// import React from 'react'

// export const icon = () => {
//     return (
//         <div>

//         </div>
//     )
// }
