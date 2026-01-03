const albumHash = "vfxArDu";

fetch(`https://imgur.com/a/${albumHash}.json`)
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.data.images.forEach(image => {
      const img = document.createElement("img");
      img.src = image.link;
      img.style.width = "200px";
      img.style.margin = "10px";
      gallery.appendChild(img);
    });
  })
  .catch(err => console.error(err));
