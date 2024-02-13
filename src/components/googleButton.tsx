import Image from "next/image";
import WhiteButton from "./whiteButton";

const GoogleButton = () => {
  return (
    <WhiteButton type="button" width={"100%"}>
      <div className="flex items-center gap-1 justify-center text-base">
        <Image src="/google.png" alt="Google Logo" width={20} height={20} className="w-5 h-5 object-contain" />
        <span>Continue with Google</span>
      </div>
    </WhiteButton>
  );
};

export default GoogleButton;
