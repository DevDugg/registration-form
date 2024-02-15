import AlreadyHasAccount from "@/components/alreadyHasAccount";
import BlurredOverlay from "@/components/blurredOverlay";
import FadeInAnimation from "@/components/fadeInAnimation";
import Form from "@/components/form";
import GoogleButton from "@/components/googleButton";
import Header from "@/components/header";
import Separator from "@/components/separator";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="main">
      <BlurredOverlay height={"fit-content"} width={"50vw"} className="content flex flex-col gap-16 p-10">
        <FadeInAnimation>
          <Header />
        </FadeInAnimation>
        <FadeInAnimation>
          <div className="flex justify-center">
            <div className="form-wrapper flex flex-col items-center gap-8 max-w-lg w-full">
              <Welcome />
              <GoogleButton />
              <Separator text="or" />
              <Form />
              <AlreadyHasAccount />
            </div>
          </div>
        </FadeInAnimation>
      </BlurredOverlay>
    </main>
  );
}
