import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <Image src="/mountains.jpg" alt="background" layout="fill" objectFit="cover" priority />
    </div>
  );
};
export default Background;
