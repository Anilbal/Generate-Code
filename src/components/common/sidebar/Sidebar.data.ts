import {
  NavbarSectionIcon,
  HeroSectionIcon,
  FeaturesSectionIcon,
  CTASectionIcon,
  FooterSectionIcon,
} from "../icons/Icons";

export interface SidebarProps {
  name: string;
  icon: React.ComponentType;
}
export const sections: SidebarProps[] = [
  { name: "Navbar", icon: NavbarSectionIcon },
  { name: "Hero", icon: HeroSectionIcon },
  { name: "Features", icon: FeaturesSectionIcon },
  { name: "CTA", icon: CTASectionIcon },
  { name: "Footer", icon: FooterSectionIcon },
];
