import { FullScreen, PhotoModal, StyledGallery } from "./styles/StyledGallery";
import { images } from "../constants";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

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
  {
    img: `${images.picture10}`,
  },
  {
    img: `${images.picture11}`,
  },
  {
    img: `${images.picture12}`,
  },
  {
    img: `${images.picture13}`,
  },
  {
    img: `${images.picture14}`,
  },
  {
    img: `${images.picture15}`,
  },
  {
    img: `${images.picture16}`,
  },
  {
    img: `${images.picture17}`,
  },
  {
    img: `${images.picture18}`,
  },
  {
    img: `${images.picture19}`,
  },
  {
    img: `${images.picture20}`,
  },
  {
    img: `${images.picture21}`,
  },
];

const Gallery = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Open single photo
  const handleOpenModal = (index) => {
    setSlideNum(index);
    setOpenModal(true);
  };

  // Close single photo view
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  //   Show previous photo
  const prevPhoto = () => {
    slideNum === 0
      ? setSlideNum(pictures.length - 1)
      : setSlideNum(slideNum - 1);
  };

  // Show the next photo
  const nextPhoto = () => {
    slideNum + 1 === pictures.length
      ? setSlideNum(0)
      : setSlideNum(slideNum + 1);
  };

  return (
    <StyledGallery>
      {/* <h1>Gallery</h1> */}
      {openModal && (
        <PhotoModal>
          <IoIosArrowBack className="prevBtn" onClick={prevPhoto} />
          <IoIosArrowForward className="nextBtn" onClick={nextPhoto} />
          <IoMdClose className="closeBtn" onClick={handleCloseModal} />

          <FullScreen>
            <img src={pictures[slideNum].img} alt="" />
          </FullScreen>
        </PhotoModal>
      )}
      <div>
        {pictures.map((item, index) => (
          <div key={index} onClick={() => handleOpenModal(index)}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </StyledGallery>
  );
};

export default Gallery;
