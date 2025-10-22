import { useState, useRef, useEffect } from "react";



const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(images[0]);
  const thumbnailsContainerRef = useRef(null);

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);

    if (currentIndex === 0 && prevIndex === images.length - 1) {
      setTimeout(() => {
        const thumbnailsContainer = thumbnailsContainerRef.current;
        if (thumbnailsContainer) {
          thumbnailsContainer.scrollTo({
            left: thumbnailsContainer.scrollWidth,
            behavior: "smooth"
          });
        }
      }, 10);
    }
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);

    if (currentIndex === images.length - 1 && nextIndex === 0) {
      setTimeout(() => {
        const thumbnailsContainer = thumbnailsContainerRef.current;
        if (thumbnailsContainer) {
          thumbnailsContainer.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        }
      }, 10);
    }
  };

  const scrollToThumbnail = (index) => {
    const thumbnailsContainer = thumbnailsContainerRef.current;
    const thumbnail = document.getElementById(`thumbnail-${index}`);

    if (thumbnailsContainer && thumbnail) {

      const containerWidth = thumbnailsContainer.clientWidth;


      const thumbnailWidth = thumbnail.offsetWidth;
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailRight = thumbnailLeft + thumbnailWidth;


      const scrollLeft = thumbnailsContainer.scrollLeft;
      const scrollRight = scrollLeft + containerWidth;


      const isVisible = thumbnailLeft >= scrollLeft && thumbnailRight <= scrollRight;

      if (!isVisible) {
        if (thumbnailLeft < scrollLeft) {
          thumbnailsContainer.scrollTo({
            left: thumbnailLeft,
            behavior: "smooth",
          });
        }
        else if (thumbnailRight > scrollRight) {
          thumbnailsContainer.scrollTo({
            left: thumbnailRight - containerWidth,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const prevIndexRef = useRef(0);

  useEffect(() => {
    const currentIndex = images.indexOf(currentImage);
    scrollToThumbnail(currentIndex);
    prevIndexRef.current = currentIndex;
  }, [currentImage, images]);

  return (
    <div className="flex flex-col w-full mt-2 justify-center   xl:mt-8 items-center">
      <div className="w-full flex justify-center items-center relative">
        <div className="absolute top-0 left-0 right-0 bg-opacity-70 h-[50px] lg:h-[70px] text-white flex justify-between items-centerz-10">
          <span className="text-sm lg:text-base  p-6   bg-black h-full flex justify-center items-center">{images.indexOf(currentImage) + 1} / {images.length}</span>
          <button
            className="text-sm lg:text-base  p-6    bg-black h-full hidden lg:flex justify-center items-center"
            onClick={() => {
              setModalImage(currentImage);
              setIsModalOpen(true);
            }}
            aria-label="Ouvrir l'image en grand"
          >

             <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clipPath="url(#clip0_184_100)">
      <path
        fill="#B9B9B9"
        d="M20 0h-8.125L15 3.125l-3.75 3.75 1.875 1.875L16.875 5 20 8.125zm0 20v-8.125L16.875 15l-3.75-3.75-1.875 1.875 3.75 3.75L11.875 20zM0 20h8.125L5 16.875l3.75-3.75-1.875-1.875L3.125 15 0 11.875zM0 0v8.125L3.125 5l3.75 3.75L8.75 6.875 5 3.125 8.125 0z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_184_100">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
            
          </button>
        </div>
        <button
          className="absolute cursor-pointer left-3 lg:left-5 top-1/2 transform -translate-y-1/2  p-3     transition-all duration-300"
          onClick={handlePrevImage}
          aria-label="Image précédente"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="52"
            fill="none"
            viewBox="0 0 34 52"

            className="size-4 lg:size-16"
          >
            <path
              fill="#2C2C2C"
              fillOpacity="0.8"
              d="M33.492 5.925V.641a.545.545 0 0 0-.882-.43L1.794 24.28a2.178 2.178 0 0 0 0 3.438l30.816 24.07c.363.28.882.027.882-.43v-5.285c0-.335-.157-.656-.417-.861l-24.61-19.21 24.61-19.215c.26-.205.417-.527.417-.862"
            ></path>
          </svg>

        </button>
        <div className="w-full h-[40vh] lg:h-[60vh] overflow-hidden">
          <img
            src={currentImage}
            alt="Image principale de la galerie"
            className="w-full h-full object-cover  border-neutral-300"
          />
        </div>
        <button
          className="absolute cursor-pointer right-3 lg:right-5 top-1/2 transform -translate-y-1/2  p-3     transition-all duration-300"
          onClick={handleNextImage}
          aria-label="Image suivante"
        >

                   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    fill="none"
    viewBox="0 0 70 70"
    
            className="size-4 lg:size-16"
  >
    <path
      fill="#2C2C2C"
      fillOpacity="0.8"
      d="M20.508 55.075v5.284c0 .458.526.71.882.43L52.206 36.72a2.178 2.178 0 0 0 0-3.438L21.39 9.212a.545.545 0 0 0-.882.43v5.285c0 .335.157.656.417.861l24.61 19.21-24.61 19.215c-.26.205-.417.527-.417.862"
    ></path>
  </svg>
          


        </button>
      </div>
      <div
        ref={thumbnailsContainerRef}
        className="flex gap-4  justify-center items-center mt-4 w-full overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <style>
          {`
        div::-webkit-scrollbar {
          display: none;
        }
        `}
        </style>
        {images.map((image, index) => (
          <button
            key={index}
            className="focus:outline-none flex-shrink-0"
            onClick={() => {
              const prevIndex = images.indexOf(currentImage);
              setCurrentImage(image);

              // Gestion du clic direct sur les miniatures pour les cas circulaires
              if (prevIndex === images.length - 1 && index === 0) {
                // Si on passe de la dernière image à la première
                setTimeout(() => {
                  const thumbnailsContainer = thumbnailsContainerRef.current;
                  if (thumbnailsContainer) {
                    thumbnailsContainer.scrollTo({
                      left: 0,
                      behavior: "smooth"
                    });
                  }
                }, 10);
              } else if (prevIndex === 0 && index === images.length - 1) {
                // Si on passe de la première image à la dernière
                setTimeout(() => {
                  const thumbnailsContainer = thumbnailsContainerRef.current;
                  if (thumbnailsContainer) {
                    thumbnailsContainer.scrollTo({
                      left: thumbnailsContainer.scrollWidth,
                      behavior: "smooth"
                    });
                  }
                }, 10);
              }
            }}
            aria-label={`Voir image ${index + 1}`}
            aria-current={currentImage === image ? "true" : "false"}
          >
            <img
              id={`thumbnail-${index}`}
              src={image}
              alt={`Miniature ${index + 1}`}
              className={`w-24 h-24 object-cover border-4 relative ${currentImage === image
                ? "border-orange-500 opacity-100"
                : "border-transparent opacity-50"
                } hover:border-customblue hover:opacity-75 transition-all duration-300`}
            />
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative flex items-center justify-center w-full h-full p-4">
            <button
              className="absolute top-10 cursor-pointer right-2 text-whit20 p-2 transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer la modale"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={modalImage}
              alt="Image agrandie"
              className="max-w-[90vw] max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
              {images.indexOf(modalImage) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;