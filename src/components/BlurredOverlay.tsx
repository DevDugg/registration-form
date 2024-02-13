import { CSSProperties, PropsWithChildren } from "react";

import Image from "next/image";

interface IProps extends PropsWithChildren {
  height: CSSProperties["height"];
  width: CSSProperties["width"];
  className?: string;
}

const BlurredOverlay = ({ height, width, children, className }: IProps) => {
  return (
    <div className="backdrop-blur-[20px] bg-BLACK35 relative z-10" style={{ height, width }}>
      <Image
        src={"/noise.png"}
        alt="noise"
        width={765}
        height={937}
        loading="eager"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 pointer-events-none"
      />
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};
export default BlurredOverlay;
