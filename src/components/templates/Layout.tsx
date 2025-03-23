import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/atoms/modeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Layout = () => {
  return (
    <>
      <header className="w-full h-[60px] p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-primary">
          <Link to="/">My APP</Link>
        </h1>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row">
            <NavigationMenuItem className="mr-1 text-primary">
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home Page
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-1 text-primary">
              <Link to="/table-view" className={navigationMenuTriggerStyle()}>
                Table View
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl h-[calc(100vh-60px)] p-6 flex justify-center">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
