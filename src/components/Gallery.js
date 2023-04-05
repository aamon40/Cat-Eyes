import { StyledGallery } from "./styles/StyledGallery";
import { images } from "../constants";

const pictures = [
  {
    img: `${images.picture01}`,
  },
  {
    img: `${images.picture02}`,
  },
  {
    img: `${images.picture03}`,
  },
  {
    img: `${images.picture04}`,
  },
  {
    img: `${images.picture05}`,
  },
  {
    img: `${images.picture06}`,
  },
  {
    img: `${images.picture07}`,
  },
  {
    img: `${images.picture08}`,
  },
  {
    img: `${images.picture09}`,
  },
];
const Gallery = () => {
  return (
    <StyledGallery>
      <h1>Gallery</h1>
      {pictures.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </StyledGallery>
  );
};

export default Gallery;
