import { useLinks } from "@/components/SideBar/hooks.ts";
import NavBarLink from "@/components/NavBarLink";
const SideBar = () => {
  const { links } = useLinks();

  return (
    <ul className="space-y-2 font-medium">
      {links?.map((link) => (
        <NavBarLink key={link.name} {...link} isActive={link.isActive} />
      ))}
    </ul>
  );
};

export default SideBar;
