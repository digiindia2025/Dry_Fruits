import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Nuts",
        url: "/shop#Nuts",
        description: "Premium nuts selection.",
       
      },
      {
        id: 12,
        label: "Dried Fruits",
        url: "/shop#DriedFruits",
        description: "Sweet and delicious dried fruits.",
       
      },
      {
        id: 13,
        label: "Seeds",
        url: "/shop#Seeds",
        description: "Nutritious seeds variety.",
        
      },
      {
        id: 14,
        label: "Exotic Mixes",
        url: "/shop#ExoticMixes",
        description: "Special dry fruit blends.",
        
      },
    ],
  },
  { id: 2, type: "MenuItem", label: "Best Sellers", url: "/shop#on-sale", children: [] },
  { id: 3, type: "MenuItem", label: "Fresh Arrival", url: "/shop#fresh-arrivals", children: [] },
  { id: 4, type: "MenuItem", label: "Premium Collections", url: "/shop#brands", children: [] },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link href="/" className={cn([integralCF.className, "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10"])}>
            <Image
              src="/images/logo.avif"
              alt="Logo"
              width={120}
              height={40}
              className="h-auto w-auto md:w-[140px] md:h-[50px]"
              priority
            />
          </Link>
          <Link
  href="/"
  className={cn([
    integralCF.className,
    "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
  ])}
>
  Home
</Link>

        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && <MenuItem label={item.label} url={item.url} />}
                {item.type === "MenuList" && <MenuList data={item.children} label={item.label} />}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-30 w-48 md:w-64 lg:w-80 px-2 py-1.5 rounded-md">
          <InputGroup.Text className="p-1">
            <Image priority src="/icons/search.svg" height={16} width={16} alt="search" className="min-w-4 min-h-4" />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search..."
            className="bg-transparent placeholder:text-black/40 text-sm px-2 py-1 w-full"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image priority src="/icons/search-black.svg" height={22} width={22} alt="search" />
          </Link>
          <CartBtn />
          <Link href="/signin" className="p-1">
            <Image priority src="/icons/user.svg" height={22} width={22} alt="user" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
  