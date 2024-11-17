import './Carousel.css'
import image1 from "../../../test_image.jpg"
import image2 from "../../../HOK_banner.jpg"
import image3 from "../../../logo.svg"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



export const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const images = [image1, image2, image3]
    const totalSlide = images.length

    const showSlide = (index) => {
        if (index >= totalSlide ){
            setCurrentSlide(0)
        } else if (index < 0) {
            setCurrentSlide(totalSlide-1)
        } else {
            setCurrentSlide(index)
        }
    }
    
    const offset = -currentSlide * 100; 

    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    return(<>
    <section className="banner-section">
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(${offset}%)` }} >

                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                    <img src={image} alt="Banner 1"/>
                        
                    </div>
                ))}
                
          </div>

          <button class="carousel-control prev" onClick={prevSlide}>&#10094;</button>
          <button class="carousel-control next" onClick={nextSlide}>&#10095;</button>
        </div>
    </section>
    </>)
}

// export const Carousels = ({ links }) => {

//     var links = [image1, image2, image3]

//     const [slideIndex, setSlideIndex] = useState(1)
  
//     const handleNext = () => {
//         if (slideIndex !== links.length) {
//             setSlideIndex(slideIndex + 1)
//         } else if (slideIndex === links.length) {
//             setSlideIndex(1)
//         }
//         console.log(slideIndex)
//     }
  
//     const handlePrev = () => {
//         if (slideIndex !== 1) {
//             setSlideIndex(slideIndex - 1)
//         } else if (slideIndex === 1) {
//             setSlideIndex(links.length)
//         }
//         console.log(slideIndex)
//     }
  
//     const moveDot = (index) => {
//         setSlideIndex(index)
//     }
  
//     return (
//         <>    
//         <div className='container-slider'>
//           {links.map((link, index) => {
//             return (
//               <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
//                 {link.toUpperCase().includes(".MP4") || link.toUpperCase().includes(".MOV") ||
//                   link.toUpperCase().includes(".WMV") || link.toUpperCase().includes(".FLV") ||
//                   link.toUpperCase().includes(".AVI") || link.toUpperCase().includes(".WebM") ||
//                   link.toUpperCase().includes(".AVCHD") || link.toUpperCase().includes(".MKV") ?
//                   <video width="628" height="100%" controls>
//                     <source src={link} type="video/mp4" />
//                   </video>
//                   : <img className='img-vw-profile' src={link} />}
//               </div>
//             )
//           })}
  
//           <div>
//             <button className='carousel-btn right' onClick={handleNext}>
//               <FontAwesomeIcon icon="fa-solid fa-angle-right" />
//             </button>
//           </div>
  
//           <div>
//             <button className='carousel-btn left' onClick={handlePrev}>
//               <FontAwesomeIcon icon="fa-solid fa-angle-left" />
//             </button>
//           </div>
  
//           <div className="container-dots">
//             {Array.from({ length: links.length }).map((item, index) => (
//               <div
//                 onClick={() => moveDot(index + 1)}
//                 className={slideIndex === index + 1 ? "dot active" : "dot"}
//                 key={index}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </>
//     )
//   }

export const Carousels = ({ links }) => {

    const [slideIndex, setSlideIndex] = useState(1);

    var links = [image1, image2, image3]
  
    const handleNext = () => {
        console.log("Next button clicked");
        if (slideIndex !== links.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === links.length) {
            setSlideIndex(1);
        }
    }
  
    const handlePrev = () => {
        console.log("Prev button clicked");
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(links.length);
        }
    }
  
    const moveDot = (index) => {
        setSlideIndex(index);
    }

    useEffect(() => {
        // console.log(slideIndex);
    }, [slideIndex]);
    
    const [carouselHeight, setCarouselHeight] = useState('30vh'); // Default height for larger screens

    useEffect(() => {
        const updateHeight = () => {
        const windowWidth = window.innerWidth;

        // For small screens, adjust the height
        if (windowWidth < 600) {
            setCarouselHeight('10rem'); // Use smaller height for mobile
        } else {
            setCarouselHeight('22rem'); // Use larger height for desktop
        }
        };

        updateHeight(); // Initial height calculation
        window.addEventListener('resize', updateHeight); // Update height on window resize

        return () => {
        window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div className='container-slider' 
            // style={{ height: carouselHeight }} 
            >
            {links.map((link, index) => {
                return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
                        {link.toUpperCase().includes(".MP4") || link.toUpperCase().includes(".MOV") ||
                          link.toUpperCase().includes(".WMV") || link.toUpperCase().includes(".FLV") ||
                          link.toUpperCase().includes(".AVI") || link.toUpperCase().includes(".WebM") ||
                          link.toUpperCase().includes(".AVCHD") || link.toUpperCase().includes(".MKV") ?
                          <video width="628" height="100%" controls>
                            <source src={link} type="video/mp4" />
                          </video>
                          : <img className='img-vw-profile' src={link} alt="carousel" />}
                    </div>
                )
            })}

            <div>
                <button className='carousel-btn right' onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
  
            <div>
                <button className='carousel-btn left' onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
  
            {/* <div className="container-dots">
                {Array.from({ length: links.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        key={index}
                    ></div>
                ))}
            </div> */}
        </div>
    );
}