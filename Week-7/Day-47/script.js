const images = [
  {
    src: "./images/1.jpg",
    alt: "Image 1",
  },
  {
    src: "./images/2.jpg",
    alt: "Image 2",
  },
  {
    src: "./images/3.jpg",
    alt: "Image 3",
  },
  {
    src: "./images/4.jpg",
    alt: "Image 4",
  },
  {
    src: "./images/5.jpg",
    alt: "Image 5",
  },
  {
    src: "./images/6.jpg",
    alt: "Image 6",
  },
  {
    src: "./images/7.jpg",
    alt: "Image 7",
  },
  {
    src: "./images/8.jpg",
    alt: "Image 8",
  },
  {
    src: "./images/9.jpg",
    alt: "Image 9",
  },
  {
    src: "./images/10.jpg",
    alt: "Image 10",
  },
  {
    src: "./images/11.jpg",
    alt: "Image 11",
  },
  {
    src: "./images/12.jpg",
    alt: "Image 12",
  },
  {
    src: "./images/13.jpg",
    alt: "Image 13",
  },
  {
    src: "./images/14.jpg",
    alt: "Image 14",
  },
  {
    src: "./images/15.jpg",
    alt: "Image 15",
  },

]


function createThumbnail(src, alt) {
  // Your code here
  const img = document.createElement("img"); 
    img.setAttribute("src", src,);
    img.setAttribute("alt", alt);
    img.classList.add("thumbnail");
  return img;
}

function createGallery(images, targetElement) {
  // Your code here
  let gallery = document.createElement("div");
  gallery.classList.add("gallery");

  images.forEach(image => {
    const thumbnail = createThumbnail(image.src, image.alt);
    thumbnail.addEventListener("click", () => openModal(image.src, image.alt));
    gallery.appendChild(thumbnail);
    
    targetElement.appendChild(thumbnail)
  });

}

function createModal() {
  // Your code here
  const modal = document.createElement("div");
  modal.classList.add("modal");
  return modal;
}

function openModal(imageSrc, imageAlt) {
  // Your code here
  const modal = createModal();
  const modalImage = document.createElement("img");
  const description = document.createElement("p");
  description.classList.add("modal-description");
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", closeModal);

  description.textContent = imageAlt;
  modalImage.setAttribute("src", imageSrc);
  modalImage.setAttribute("alt", imageAlt);
  modal.appendChild(modalImage);
  modal.appendChild(description);
  modal.appendChild(closeButton);

  document.body.appendChild(modal);
  modal.addEventListener("click", closeModal);

}

function closeModal() {
  // Your code here
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
    }


}


const galleryContainer = document.getElementById("gallery-container"); // Replace with your gallery container's ID
createGallery(images, galleryContainer);

