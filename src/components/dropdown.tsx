import Image from "next/image";

const Dropdown = () => {
  return (
    <div className="dropdown flex items-center gap-4 border border-WHITE px-4 py-3 rounded-lg cursor-pointer">
      <div className="flex items-center gap-1">
        <Image src={"/australia-flag.png"} alt="flag" width={24} height={16} className="w-6 h-4 object-contain" />
        <span className="text-base">EN</span>
      </div>
      <Image src={"/arrow-down.svg"} alt="arrow" width={20} height={20} className="w-5 h-5 object-contain" />
    </div>
  );
};
export default Dropdown;
