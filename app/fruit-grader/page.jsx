"use client";
import { FaCameraRetro, FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/grading");
  };
  return (
    <section className="m-4">
      <h1 className="text-6xl font-bold text-center">Fruit Grader</h1>
      <p className="text-2xl font-semibold text-center text-gray-700 m-4">
        Click or Grade?
      </p>
      <div className="flex gap-24 justify-center items-center h-96">
        <div className="flex  items-center justify-center flex-col gap-8">
          <FaCameraRetro className="text-8xl text-center " />
          <button
            onClick={() => router.push("/click")}
            className="text-2xl font-bold w-48 h-12 text-center bg-gray-300 hover:bg-gray-500 rounded-2xl"
          >
            Start Clicking
          </button>
        </div>
        <div className="flex gitems-center justify-center flex-col gap-8">
          <FaMagnifyingGlass className="text-8xl text-center " />
          <button
            onClick={() => handleClick()}
            className="text-2xl font-bold w-48 h-12 text-center bg-gray-300 hover:bg-gray-500 rounded-2xl"
          >
            Start Grading
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
