import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SheetDemo from './Cart';
const Header = () => {

  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background dark:bg-gray-800 px-4 md:px-6 dark:border-gray-700">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to=""
            className="flex items-center gap-2 text-lg font-semibold md:text-base text-gray-900 dark:text-gray-200"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to=""
            className="text-muted-foreground transition-colors hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to=""
            className="text-muted-foreground transition-colors hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
          >
            Orders
          </Link>
          <Link
            to=""
            className="text-muted-foreground transition-colors hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
          >
            Products
          </Link>
          <Link
            to=""
            className="text-muted-foreground transition-colors hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
          >
            Customers
          </Link>
          <Link
            to=""
            className="text-foreground transition-colors hover:text-foreground dark:text-gray-200 dark:hover:text-gray-100"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden dark:border-gray-600 dark:bg-gray-800"
            >
              <Menu className="h-5 w-5 dark:text-gray-200" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="dark:bg-gray-900 dark:text-gray-200"
          >
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to=""
                className="flex items-center gap-2 text-lg font-semibold dark:text-gray-200"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
              >
                Orders
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
              >
                Products
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-gray-100"
              >
                Customers
              </Link>
              <Link
                to=""
                className="hover:text-foreground dark:text-gray-200 dark:hover:text-gray-100"
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] dark:bg-gray-900 dark:text-gray-200 dark:border-gray-600"
              />
              <SheetDemo />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full dark:bg-gray-800 dark:border-gray-600"
              >
                <CircleUser className="h-5 w-5 dark:text-gray-200" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="dark:bg-gray-900 dark:text-gray-200"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:border-gray-700" />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator className="dark:border-gray-700" />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Header;
