import { CSSProperties, PropsWithChildren } from "react";

import Image from "next/image";

interface IProps extends PropsWithChildren {
  height: CSSProperties["height"];
  width: CSSProperties["width"];
}

const BlurredOverlay = ({ height, width, children }: IProps) => {
  return (
    <div className="backdrop-blur-[20px] bg-BLACK35 relative -z-10 pointer-events-none" style={{ height, width }}>
      <Image
        src={"/noise.png"}
        alt="noise"
        width={765}
        height={937}
        loading="eager"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 pointer-events-none"
      />
      {children}
    </div>
  );
};
export default BlurredOverlay;
