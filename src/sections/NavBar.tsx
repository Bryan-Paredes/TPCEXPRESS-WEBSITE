import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Image,
} from "@nextui-org/react";

import { ChevronDown, HandCoins, WalletMinimal, Mails } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { menuItems } from "@/config/site";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0 font-bold";

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="p-3">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Logo TPC Express"
              width={35}
              className="cursor-pointer"
              loading="lazy"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/nosotros"
            className="hover:text-primary text-base font-bold"
          >
            Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent font-bold hover:text-primary"
                endContent={<ChevronDown size={16} className={iconClasses} />}
                radius="lg"
                variant="light"
                size="md"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Servicios"
            className="w-fit"
            itemClasses={{
              base: "gap-4 p-4 text-lg font-bold",
            }}
          >
            <DropdownItem
              href="/estandar"
              key="estandar"
              startContent={
                <HandCoins
                  size={30}
                  color="currentColor"
                  className={iconClasses}
                />
              }
            >
              <p className="text-base font-bold">Estándar</p>
            </DropdownItem>

            <DropdownItem
              href="/cod"
              key="cod"
              startContent={
                <WalletMinimal
                  size={30}
                  color="currentColor"
                  className={iconClasses}
                />
              }
            >
              <p className="text-base font-bold">COD</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ModeToggle />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/contacto"
            color="primary"
            variant="ghost"
            className=" text-base font-bold"
            startContent={<Mails size={20} />}
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-5">
        {menuItems.map(({ name, href }, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full hover:text-slate-300"
              href={href}
              size="lg"
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
