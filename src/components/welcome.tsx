import SubTitle from "./subtitle";
import Title from "./title";

const Welcome = () => {
  return (
    <section className="welcome flex flex-col gap-4 items-center">
      <Title title="WELCOME IPSUM" />
      <SubTitle subtitle="Welcome to IPSUM dashboard community" />
    </section>
  );
};
export default Welcome;
