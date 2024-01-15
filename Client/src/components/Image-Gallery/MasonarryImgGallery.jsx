import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./GalleryImages";
const MasonarryImgGallery = () => {
  return (
    <ResponsiveMasonry>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => {
          return (
            <img
              className="masonry__img"
              src={item}
              alt={index}
              key={index}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonarryImgGallery;
