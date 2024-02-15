"use client";

import buttonMotion from "@/animation/buttonMotion";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const SubmitButton = () => {
  return (
    <button type="submit" className="bg-ACCENT rounded-lg py-3 px-4 flex justify-center text-BLACK font-bold">
      Register
    </button>
  );
};

const Form = () => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (_data: IFormValues) => null;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-8 bg-WHITE35 rounded-lg w-full text-base">
      <div className="flex flex-col gap-1">
        <motion.input
          {...register("name")}
          type="text"
          placeholder="Name"
          variants={buttonMotion}
          initial={"initial"}
          whileFocus={"hover"}
          className="px-4 py-3 w-full rounded-lg border border-WHITE bg-transparent text-WHITE placeholder:text-WHITE outline-none"
        />
        {errors.name && <span className="text-red-600 text-xs font-bold">Name is required</span>}
      </div>
      <div className="flex flex-col gap-1">
        <motion.input
          {...register("email")}
          type="email"
          placeholder="Email"
          variants={buttonMotion}
          initial={"initial"}
          whileFocus={"hover"}
          className="px-4 py-3 w-full rounded-lg border border-WHITE bg-transparent text-WHITE placeholder:text-WHITE outline-none"
        />
        {errors.email && <span className="text-red-600 text-xs font-bold">A valid email is required</span>}
      </div>
      <div className="flex flex-col gap-1">
        <motion.input
          {...register("password")}
          type="password"
          placeholder="Password"
          variants={buttonMotion}
          initial={"initial"}
          whileFocus={"hover"}
          className="px-4 py-3 w-full rounded-lg border border-WHITE bg-transparent text-WHITE placeholder:text-WHITE outline-none"
        />
        {errors.password && <span className="text-red-600 text-xs font-bold">A strong password is required</span>}
      </div>
      <div className="flex items-center gap-1">
        <input id="rememberMe" {...register("rememberMe")} type="checkbox" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
