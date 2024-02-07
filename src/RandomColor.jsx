// import React, { useState } from 'react'
// import "./App.css"
// const RandomColor = () => {

//     const [typedColor, setTypedColor] = useState("hex");
//     const [color,setColor] = useState("#000000")


//     function randomColorUtility(length){
//         return Math.floor(Math.random()*length)
//     }
//     const handleCreateRandomHexColor = ()=>{

//         const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "C" ,"D", "E", "F" ];
//         let hexColor = "#";

//         for(let i=0;i<6;i++){
//             hexColor+= hex[randomColorUtility(hex.length)];
//         }

//         console.log(hexColor);

//         setColor(hexColor);
// }

//     const handleCreateRandomRgbColor = ()=>{
// const r = randomColorUtility(256);
// const g = randomColorUtility(256);
// const b = randomColorUtility(256);

// const rgbColor = `rgb${r},${g},${b}`
// console.log(rgbColor)

// setColor(`rgb(${r},${g},${b})`);
//     }

//   return (
//     <div style={{
//         width : "100vw",  
//         height : "100vh",
//        backgroundColor : color
//     }} className='container'>
//         <div className='second-container'>
//         <button onClick={()=>{setTypedColor("hex")}}>Create HEX Color</button>
//         <button onClick={()=>{setTypedColor("rgb")}}>Create RGB Color</button>
//         <button onClick={typedColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor }>Generate Random Color</button>
//         </div>

//         <div className="display">
//             <h3 >{typedColor === 'rgb' ? "RGB color" : "HEX color"}</h3>
//             <h1>{color}</h1>

//         </div>


//     </div>
//   )
// }

// export default RandomColor


import React, { useState } from 'react';
import './App.css';

const RandomColor = () => {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleCreateRandomColor = () => {
    if (colorType === 'hex') {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    } else if (colorType === 'rgb') {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);
      const rgbColor = `rgb(${r},${g},${b})`;
      setColor(rgbColor);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: color }} className="container">
      <div className="second-container">
       <div>
       <input
          type="radio"
          id="hex"
          name="colorType"
          value="hex"
          checked={colorType === 'hex'}
          onChange={() => setColorType('hex')}
        />
        <label  className="labels" tyle={{ marginRight: '10px' }} htmlFor="hex">HEX Color</label>
       </div>
        <div>
        <input
          type="radio"
          id="rgb"
          name="colorType"
          value="rgb"
          checked={colorType === 'rgb'}
          onChange={() => setColorType('rgb')}
        />
        <label className='labels' htmlFor="rgb">RGB Color</label>
        </div>
        <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      </div>

      <div className="display">
        <h3>{colorType === 'rgb' ? 'RGB color' : 'HEX color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
