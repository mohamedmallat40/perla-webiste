import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { useTranslations } from "@/hooks/use-translation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "@react-aria/i18n";

export const Navbar = ({ setLocale }: any) => {
  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
  };
  const { locale } = useLocale();
  const isRTL = locale === "ar";

  const { t } = useTranslations();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          P
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar  className={isRTL ? "reverse":""} maxWidth="xl" position="sticky">
      <NavbarContent className={isRTL ? "basis-1/5 sm:basis-full flex-row-reverse" : "basis-1/5 sm:basis-full"} justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo></Logo>
            {/* <Image src={'/logos/perla-no-background.png'} height={20} width={30} alt="perla"></Image> */}
            <p className="font-bold text-inherit">PERLA CI</p>
          </NextLink>
        </NavbarBrand>
        <div className={isRTL ? "hidden lg:flex gap-4 justify-start ml-auto flex-row-reverse":"hidden lg:flex gap-4 justify-start ml-2 "}>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(`${item.label}`)}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className={isRTL ? "hidden sm:flex basis-1/5 sm:basis-full flex-row-reverse":"hidden sm:flex basis-1/5 sm:basis-full"}
        justify="end"
      >
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            endContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            {t("navbar_slogon")}
          </Button>
        </NavbarItem>
        <NavbarItem className={isRTL ? "hidden sm:flex gap-2 flex-row-reverse":"hidden sm:flex gap-2"}>
          <LanguageSwitcher onChange={handleLocaleChange} />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className={isRTL ?"sm:hidden basis-1 pl-4 flex-row-reverse":"sm:hidden basis-1 pl-4"} justify={"end"}>
        <Link className="hidden" isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <LanguageSwitcher onChange={handleLocaleChange} />

        <ThemeSwitch />
        {/* <NavbarMenuToggle /> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};
