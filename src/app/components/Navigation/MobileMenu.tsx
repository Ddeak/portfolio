import { useIsHomePage } from "@/app/common/nav/useIsHomepage";
import { HomeLinks, PageLinks } from "./links";

const MobileMenu = () => {
  const isHomepage = useIsHomePage();
  
  return (
    <ul className="flex flex-col p-4 pt-0 md:hidden w-full">
      {isHomepage ? <HomeLinks /> : <PageLinks />}
    </ul>
  );
};

export default MobileMenu;
