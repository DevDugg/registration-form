import BlurredOverlay from "@/components/blurredOverlay";
import Form from "@/components/form";
import GoogleButton from "@/components/googleButton";
import Header from "@/components/header";
import Separator from "@/components/separator";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="main">
      <BlurredOverlay height={"fit-content"} width={"50vw"} className="content flex flex-col gap-20 px-10 py-14">
        <Header />
        <div className="flex justify-center">
          <div className="form-wrapper flex flex-col items-center gap-10 max-w-[484px]">
            <Welcome />
            <GoogleButton />
            <Separator text="or" />
            <Form />
          </div>
        </div>
      </BlurredOverlay>
    </main>
  );
}
