interface IProps {
  subtitle: string;
}

const SubTitle = ({ subtitle }: IProps) => {
  return <h3 className="subtitle text-xl font-medium leading-[100%] text-center">{subtitle}</h3>;
};
export default SubTitle;
