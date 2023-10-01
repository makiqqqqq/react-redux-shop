import { useLinks } from "@/components/NavBar/hooks.ts";
import NavBarLink from "@/components/NavBarLink";
const NavBar = () => {
  const { links } = useLinks();

  return (
    <ul className="space-y-2 font-medium">
      {links?.map((link) => {
        return <NavBarLink key={link.name} {...link} isActive={link.isActive} />;
      })}
    </ul>
  );
};

export default NavBar;
