import { Parallax } from "react-parallax";
import Darling from "../imgs/darling.png";


const FirstImage = () => (
     <Parallax className="image" bgImage={Darling}  strength={400}>
          <div className="content">
               <span className="img-text">Une adresse à retenir</span>
          </div>
     </Parallax>
);
     export default FirstImage;