import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { useEffect } from "react";

export default function CustomDrawer({ open, imageUrl }) {
    useEffect(() => console.log('heyy '), []);
    return (
    <Drawer open={open} onClose={!open}>
      <DrawerContent className="h-[600px]">
        {" "}
        {/* Adjust height here */}
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Image Details</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Selected"
                className="w-full h-full object-cover rounded-md"
              />
            )}
          </div>
          <DrawerFooter>
            <button onClick={!open}>Close</button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
