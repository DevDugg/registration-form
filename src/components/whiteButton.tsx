import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  width?: CSSProperties["width"];
}

const WhiteButton = ({ onClick, type, children, width }: IProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-WHITE35 rounded-lg py-3 px-4 flex justify-center"
      style={{ width }}
    >
      {children}
    </button>
  );
};
export default WhiteButton;
