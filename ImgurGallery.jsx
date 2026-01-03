import { useEffect, useState } from "react";

const ImgurGallery = ({ albumHash }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://imgur.com/a/${albumHash}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load album");
        return res.json();
      })
      .then((data) => {
        setImages(data.data.images || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load album");
      });
  }, [albumHash]);

  if (error) return <p>{error}</p>;

  return (
    <div style={galleryStyle}>
      {images.map((img) => (
        <img
          key={img.id}
          src={img.link}
          alt={img.description || ""}
          loading="lazy"
          style={imageStyle}
        />
      ))}
    </div>
  );
};

const galleryStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const imageStyle = {
  width: "200px",
  borderRadius: "6px",
};

export default ImgurGallery;
