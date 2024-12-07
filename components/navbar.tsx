"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  InstagramIcon,
  FaceBookIcon,
  ContactIcon,
  CarretDownIcon,
  WalletIcon,
  CashIcon,
} from "@/components/icons";
import { Image } from "@nextui-org/image";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar className="py-4" maxWidth="lg" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="max-w-fit gap-3">
            <NextLink
              className="flex items-center justify-start gap-1"
              href="/"
            >
              <Image
                alt="Logo"
                className="h-10 w-10"
                loading="lazy"
                src="/LOGO-TPC.webp"
              />
            </NextLink>
          </NavbarBrand>
          <NavbarItem className="ml-2 hidden justify-start gap-4 lg:flex">
            <NextLink
              className="text-lg font-bold hover:text-primary"
              color="foreground"
              href={siteConfig.navItems[0].href}
            >
              {siteConfig.navItems[0].label}
            </NextLink>
          </NavbarItem>
          <NavbarContent className="ml-2 hidden justify-start gap-4 lg:flex">
            <Dropdown backdrop="blur">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="bg-transparent p-0 text-lg font-bold data-[hover=true]:bg-transparent data-[hover=true]:text-primary"
                    color="default"
                    endContent={<CarretDownIcon size={24} />}
                    radius="lg"
                    size="lg"
                  >
                    Servicios
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="TPC Express Services"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="Estandar"
                  description="Servicio ofrecido para unicamente entregar el paquete a la direccion de destino."
                  href="/estandar"
                  textValue="Estandar"
                  startContent={<WalletIcon size={40} />}
                >
                  <span className="text-xl font-semibold">Estandar</span>
                </DropdownItem>
                <DropdownItem
                  key="COD"
                  description="Servicio ofrecido para cobrar el precio de el paquete al momento de realzar la entrega."
                  href="/cod"
                  textValue="COD"
                  startContent={<CashIcon size={40} />}
                >
                  <span className="text-xl font-semibold">COD</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent
          className="hidden basis-1/5 sm:flex sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden gap-2 sm:flex">
            <Link
              as={Link}
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-default-700 hover:text-primary" />
            </Link>
            <Link
              as={Link}
              isExternal
              aria-label="FaceBook"
              href={siteConfig.links.facebook}
            >
              <FaceBookIcon className="text-default-700 hover:text-primary" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <NextLink href={siteConfig.navItems[2].href}>
              <Button
                className="text-lg"
                color="primary"
                radius="lg"
                startContent={<ContactIcon size={20} />}
                variant="ghost"
              >
                Contacto
              </Button>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
          <Link
            as={Link}
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link
            as={Link}
            isExternal
            aria-label="FaceBook"
            href={siteConfig.links.facebook}
          >
            <FaceBookIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-auto mt-8 flex h-fit flex-col items-center justify-center gap-2">
            <NavbarMenuItem>
              <a
                className="text-lg font-bold hover:text-primary"
                color="foreground"
                href={siteConfig.navItems[0].href}
              >
                {siteConfig.navItems[0].label}
              </a>
            </NavbarMenuItem>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent p-0 font-semibold data-[hover=true]:bg-transparent data-[hover=true]:text-primary"
                  color="default"
                  endContent={<CarretDownIcon size={24} />}
                  radius="lg"
                  size="lg"
                >
                  Servicios
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="TPC Express Services"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  as={"a"}
                  key="Estandar"
                  description="Servicio ofrecido para unicamente entregar el paquete a la direccion de destino."
                  href="/estandar"
                  textValue="Estandar"
                  startContent={<WalletIcon size={40} />}
                >
                  <span className="text-xl font-semibold">Estandar</span>
                </DropdownItem>
                <DropdownItem
                  as={"a"}
                  key="COD"
                  description="Servicio ofrecido para cobrar el precio de el paquete al momento de realzar la entrega."
                  href="/cod"
                  textValue="COD"
                  startContent={<CashIcon size={40} />}
                >
                  <span className="text-xl font-semibold">COD</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarMenuItem>
              <Button
                as={"a"}
                className="text-lg"
                color="primary"
                href="/contact"
                radius="lg"
                startContent={<ContactIcon size={20} />}
                variant="bordered"
              >
                Contacto
              </Button>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
