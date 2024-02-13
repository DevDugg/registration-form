import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10">
      <Image
        src="/mountains.jpg"
        alt="background"
        width={1400}
        height={937}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  );
};
export default Background;
