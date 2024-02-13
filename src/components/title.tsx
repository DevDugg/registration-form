interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return <h2 className="title font-BEBAS text-[64px]">{title}</h2>;
};
export default Title;
