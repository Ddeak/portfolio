import { useIsHomePage } from "@/app/common/nav/useIsHomepage";
import { HomeLinks, PageLinks } from "./links";

const LinksList = () => {
  const isHomepage = useIsHomePage();

  return (
    <ul className="flex flex-col p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse flex-row bg-transparent border-gray-700">
      {isHomepage ? <HomeLinks /> : <PageLinks />}
    </ul>
  );
};

export default LinksList;
