import GoogleButton from "./googleButton";
import Separator from "./separator";
import Welcome from "./welcome";

const Form = () => {};

const FormWrapper = () => {
  return (
    <div className="flex justify-center">
      <div className="form-wrapper flex flex-col items-center gap-10 max-w-[484px]">
        <Welcome />
        <GoogleButton />
        <Separator text="or" />
      </div>
    </div>
  );
};

export { GoogleButton, FormWrapper };
