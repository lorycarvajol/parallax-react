import { Parallax } from "react-parallax";
import Mosa from "../imgs/mosa.png";


const SecondImage = () => (
     <Parallax className="image" bgImage={Mosa}  strength={600}>
          <div className="content">
               <span className="img-text">Des plats Travaillé avec amour</span>
          </div>
     </Parallax>
);
     export default SecondImage;