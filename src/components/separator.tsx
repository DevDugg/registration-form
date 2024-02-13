interface IProps {
  text: string;
}

const Separator = ({ text }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-14 h-0.5 bg-WHITE35" />
      <span className="text-WHITE35 text-base uppercase">{text}</span>
      <div className="w-14 h-0.5 bg-WHITE35" />
    </div>
  );
};

export default Separator;
