'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { NavItem } from "@/types/common/navItem";

interface props {
  navItems: NavItem[];
}

const Navbar = ({ navItems }: props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.key}>
            {item.children && item.children?.length > 0 ? (
              <>
                <NavigationMenuTrigger>{item.key}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {item.children?.map((child) => (
                      <li key={child.key}>
                        <NavigationMenuLink href={`/${item.value}/${child.value}`}>{child.key}</NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink href={`/${item.value}`}>{item.key}</NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar