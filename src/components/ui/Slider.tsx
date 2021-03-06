import { useRef, useCallback } from 'react';
import Carousel from 'react-tiny-slider';
import { ArrowLeft, ArrowRight } from '../../assets/images';
import { ClickableIcon } from './ClickableIcon';

interface Props {
  children: React.ReactElement[];
}

const RESPONSIVE = {
  1200: {
    items: 3,
    gutter: 48,
  },
};

export function Slider({ children }: Props) {
  const sliderRef = useRef<any>(null);

  const slideRight = useCallback(() => {
    sliderRef.current.goTo('next');
  }, [sliderRef]);

  const slideLeft = useCallback(() => {
    sliderRef.current.goTo('prev');
  }, [sliderRef]);

  if (!children) {
    return null;
  }

  return (
    <div className="relative flex items-center my-96 -ml-16 -mr-24">
      <ClickableIcon
        onClick={slideLeft}
        className="text-primary hide-on-mobile absolute -left-52"
      >
        <ArrowLeft />
      </ClickableIcon>
      <Carousel
        swipeAngle={false}
        gutter={16}
        items={2.2}
        rewind
        mouseDrag
        ref={sliderRef}
        controls={false}
        nav={false}
        responsive={RESPONSIVE}
      >
        {children}
      </Carousel>
      <ClickableIcon
        onClick={slideRight}
        className="text-primary hide-on-mobile absolute -right-52"
      >
        <ArrowRight />
      </ClickableIcon>
    </div>
  );
}
