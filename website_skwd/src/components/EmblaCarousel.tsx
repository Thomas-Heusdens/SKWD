import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

type SlideType = {
  image: string
  title: string
  description?: string
}

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: false,
      skipSnaps: false,
      dragFree: false,
      ...options
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop
    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      {/* Navigation arrows - positioned at container edges */}
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-skwd-blue rounded-full p-3 transition-all shadow-lg z-10 disabled:opacity-40"
      />

      {/* The carousel */}
      <section className="embla w-full overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_calc(100%-1rem)] min-[400px]:flex-[0_0_calc(100%-2rem)] min-[480px]:flex-[0_0_calc(100%/1.2-1rem)] min-[550px]:flex-[0_0_calc(100%/1.5-1rem)] md:flex-[0_0_calc(100%/2-1rem)] lg:flex-[0_0_calc(100%/2.5-1rem)] pl-4"
              >
                <div className="embla__slide__card relative h-[200px] min-[550px]:h-full md:h-[250px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Background Image */}
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Darkening overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Text content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white text-xl md:text-xl lg:text-2xl font-semibold mb-2">
                      {slide.title}
                    </h3>
                    {slide.description && (
                      <p className="text-white/90 text-base font-light md:text-base">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-skwd-blue rounded-full p-3 transition-all shadow-lg z-10 disabled:opacity-40"
      />
    </div>
  )
}

export default EmblaCarousel