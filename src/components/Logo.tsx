import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[100px] h-6">
      <Image src="/logo.svg" alt="Logo" width={100} height={24} className="w-[100px] h-6 object-contain" />
    </div>
  );
};

export default Logo;
