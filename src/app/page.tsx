import BlurredOverlay from "@/components/blurredOverlay";
import Header from "@/components/header";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="main">
      <BlurredOverlay height={"100vh"} width={"50vw"} className="content flex flex-col gap-20 px-10 py-14">
        <Header />
        <Welcome />
      </BlurredOverlay>
    </main>
  );
}
