import { Card,CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function CarouselSpacing() {
  const imageUrl =
    "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=100&q=80";

  return (
    <div className="flex justify-center mt-5">
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="w-[100px] h-[100px]">
                  <Link to="/product/1">
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className="object-cover h-full w-full rounded-md"
                    />
                  </Link>
                  
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
