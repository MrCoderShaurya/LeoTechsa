import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const DImageSlider = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/pyq.png"
            alt="Technical drawings"
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/xyz.png"
            alt="Technical drawings"
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/pyq.png"
            alt="Technical drawings"
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/xyz.png"
            alt="Technical drawings"
            className="w-full h-auto"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DImageSlider;
