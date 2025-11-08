import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";

const Back = () => (
  <button
    onClick={() => window.history.back()}
    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-400 bg-transparent border border-emerald-400 rounded-lg transition-colors mb-4 w-fit"
  >
    <Image src={BackIcon} alt="Back" />
    Back
  </button>
);

export default Back;
