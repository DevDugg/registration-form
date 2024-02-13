interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return <h2 className="title uppercase font-BEBAS text-[64px] leading-[100%] text-center">{title}</h2>;
};
export default Title;
