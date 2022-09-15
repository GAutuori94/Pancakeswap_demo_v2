import React from "react";
import { ImageComponent } from "./imageComponent";

export function Test() {
  return (
    <>
      <ImageComponent />
    </>
  );
}
// export default function bunnyAnimation() {
//   return (
//     <div>
//       {[asset_1, asset_2, asset_3, asset_4].map((path) => {
//         return (
//           <div key={path}>
//             <img src={`./img/${path}.png`} alt="bunnies" />
//           </div>
//         );
//       })}
//     </div>
//   );
// }



// let img_1 = "../../assets/images/png/asset_1";
// let img_2 = "../../assets/images/png/asset_2";
// let img_3 = "../../assets/images/png/asset_3";
// let img_4 = "../../assets/images/png/asset_4";

// const BunnyImg_1 = require("../../assets/images/png/asset_1");
// const BunnyImg_2 = require("../../assets/images/png/asset_2");
// const BunnyImg_3 = require("../../assets/images/png/asset_3");
// const BunnyImg_4 = require("../../assets/images/png/asset_4");

// const BunnyImages = [
//   { img: BunnyImg_1 },
//   { img: BunnyImg_2 },
//   { img: BunnyImg_3 },
//   { img: BunnyImg_4 },
// ];
// const tileData = BunnyImages.map((data) => {
//   return { img: data.img };
// });

// export function TestFunction() {
//   return (
//     <>
//       <img src={BunnyImg_1} alt="" />
//       {tileData.map((tile) => (
//         <img src={tile.img} alt={tile.name} />
//       ))}
//     </>
//   );
// }

// export default BunnyImages;
