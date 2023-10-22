"use client";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/fruit-grader");
  };
  return (
    <section className="m-4">
      <div className="flex flex-col gap-4 items-center justify-evenly">
        <h1 className="text-6xl font-bold text-center">Join Us!</h1>
        <p className="text-5xl text-center font-bold text-gray-500 m-12">
          Help Solve Hunger
        </p>
        <p className="text-center">Get Started by creating your account</p>
        <button
          onClick={() => handleClick()}
          className="mb-6 mx-auto text-center flex items-center justify-evenly bg-black hover:bg-gray-800 text-white font-bold w-64 h-12 rounded-full"
        >
          <FaGoogle className="text-2xl" /> <span>SignIn with Google</span>
        </button>
        <p className="text-gray-500 text-center">
          By creating an account, I accept App's
        </p>
        <p className="text-gray-500 text-center underline">
          {" "}
          Terms of Service{" "}
        </p>
      </div>
    </section>
  );
};

export default page;
