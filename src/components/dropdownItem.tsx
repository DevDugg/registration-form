import Image from "next/image";

interface IProps {
  flag: string;
  text: string;
}

const DropdownItem = ({ flag, text }: IProps) => {
  return (
    <li className="flex items-center gap-1 w-full px-3 py-2 border-y-[0.5] border-WHITE">
      <Image src={flag} alt="flag" width={20} height={20} className="w-5 h-5 object-contain" />
      <span className="text-base">{text}</span>
    </li>
  );
};

export default DropdownItem;
