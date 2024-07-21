import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function DrawerDemo() {
  const categories = [
    {
      name: "Pizza",
      images: [
        "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=100&q=80",
      ],
    },
    {
      name: "Burgers",
      images: [
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      name: "Sushi",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      name: "Pasta",
      images: [
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
      ],
    },
  ];
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <>
      <div className="flex flex-col items-center mt-5">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="w-full max-w-6xl mb-8">
            <div className="flex items-center w-full mb-4">
              <h1 className="text-2xl font-bold flex-grow">{category.name}</h1>
              <Link
                to={`/category/${category.name.toLowerCase()}`}
                className="text-blue-500 hover:underline ml-4"
              >
                View More Items
              </Link>
            </div>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="flex">
                {category.images.map((imageUrl, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
                  >
                    <div className="p-0">
                      <Card className="w-full max-w-4xl">
                        <CardContent className="p-0">
                          <div className="w-full h-full p-0">
                            <Drawer className="w-full h-full p-0">
                              <DrawerTrigger asChild className="w-full p-0 h-full">
                                <Button
                                  variant="outline"
                                  className="w-full h-full p-0"
                                >
                                  <img
                                    src={imageUrl}
                                    alt={`Image ${index + 1}`}
                                    className="object-cover h-[300px] w-[390px] rounded-md"
                                  />
                                </Button>
                              </DrawerTrigger>
                              <DrawerContent>
                                <div className="mx-auto w-full h-full max-w-lg">
                                  <DrawerHeader>
                                    <DrawerTitle>Move Goal</DrawerTitle>
                                    <DrawerDescription>
                                      Set your daily activity goal.
                                    </DrawerDescription>
                                  </DrawerHeader>
                                  <div className="p-6 pb-0">
                                    <div className="flex items-center justify-center space-x-2">
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(-10)}
                                        disabled={goal <= 200}
                                      >
                                        <MinusIcon className="h-4 w-4" />
                                        <span className="sr-only">
                                          Decrease
                                        </span>
                                      </Button>
                                      <div className="flex-1 text-center">
                                        <div className="text-7xl font-bold tracking-tighter">
                                          {goal}
                                        </div>
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                                          Calories/day
                                        </div>
                                      </div>
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(10)}
                                        disabled={goal >= 400}
                                      >
                                        <PlusIcon className="h-4 w-4" />
                                        <span className="sr-only">
                                          Increase
                                        </span>
                                      </Button>
                                    </div>
                                    <div className="mt-3 h-[120px]">
                                      <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                      >
                                        <BarChart data={data}>
                                          <Bar
                                            dataKey="goal"
                                            style={{
                                              fill: "hsl(var(--foreground))",
                                              opacity: 0.9,
                                            }}
                                          />
                                        </BarChart>
                                      </ResponsiveContainer>
                                    </div>
                                  </div>
                                  <DrawerFooter>
                                    <Button>Submit</Button>
                                    <DrawerClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                  </DrawerFooter>
                                </div>
                              </DrawerContent>
                            </Drawer>
                            Product Name <br />
                            Price  <br />
                            Rating <br />
                            
                            {/* <form className="p-4">
                              Card Name <br />
                              Card Price <br />
                              rating
                              <br />
                              <br />
                              <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                  <Label htmlFor="crust">Crust</Label>
                                  <Select>
                                    <SelectTrigger id="crust">
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                      <SelectItem value="hand-tossed">
                                        New Hand Tossed
                                      </SelectItem>
                                      <SelectItem value="wheat-thin">
                                        100% Wheat Thin Crust
                                      </SelectItem>
                                      <SelectItem value="cheese-burst">
                                        Cheese Burst
                                      </SelectItem>
                                      <SelectItem value="fresh-pan">
                                        Fresh Pan Pizza
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                  <Label htmlFor="size">Size</Label>
                                  <Select>
                                    <SelectTrigger id="size">
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                      <SelectItem value="regular">
                                        Regular
                                      </SelectItem>
                                      <SelectItem value="large">
                                        Large
                                      </SelectItem>
                                      <SelectItem value="large">
                                        Medium
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <Button>Add to Cart</Button>
                              </div>
                            </form> */}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </>
  );
}
