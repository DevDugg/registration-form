import BlurredOverlay from "@/components/blurredOverlay";
import Content from "@/components/content";

export default function Home() {
  return (
    <main className="main">
      <BlurredOverlay height={"100vh"} width={"50vw"}>
        <Content />
      </BlurredOverlay>
    </main>
  );
}
