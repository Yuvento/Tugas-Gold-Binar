import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./CardSLider.css"
import Logo2 from "../../images/Left button.png"
import Logo from "../../images/Right button.png"
import Logo3 from "../../images/testi.png"
import Logo4 from "../../images/Frame 43.png"
import { useMediaQuery } from 'react-responsive'


function CardSLider ()  {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded ] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery
  ({ query: '(max-width: 768px)' })
 
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      drag:false,
    slides: {
        origin: "center",
        perView: 3,
        // spacing :15,
        
      },
      breakpoints:{
        '(max-width:767px)' :{
            slides :{
                origin: "center",
                perView : "1",
                style : {

                }
            }
        }
      },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
        <div className="navigation-wrapper ">

            <div ref={sliderRef} className="keen-slider ">
          
              <div className="keen-slider__slide ">
                {isDesktopOrLaptop && <img className="imagez" src={Logo3} />}
                {isTabletOrMobile && <img className="imagez" src={Logo4} />}    
              </div>
              <div className="keen-slider__slide ">
                {isDesktopOrLaptop && <img className="imagez" src={Logo3} />}
                {isTabletOrMobile && <img className="imagez" src={Logo4} />}  
              </div>
              <div className="keen-slider__slide ">
                {isDesktopOrLaptop && <img className="imagez" src={Logo3} />}
                {isTabletOrMobile && <img className="imagez" src={Logo4} />}  
              </div>
            </div>


        {loaded && instanceRef.current && (
          <div className="Buttons">
            <div className="Buttons2">
                <img  src={Logo2}
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
            </div>

            <div>
                <img src={Logo}
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                
                  }
                />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CardSLider;