import { Parallax } from "react-parallax";
import Group from "../imgs/group.png";


const ThirdImage = () => (
     <Parallax className="image" bgImage={Group}  strength={800}>
          <div className="content">
               <span className="img-text">Pour partagé entre amis</span>
          </div>
     </Parallax>
);
     export default ThirdImage;