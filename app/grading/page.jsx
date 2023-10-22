"use client";
import food from "../data/food.json";
import { useState, useEffect } from "react";
import Link from "next/link";
const FoodCard = ({
  name,
  image,
  clicked,
  array,
  id,
  setFoodArray,
  setCnt,
}) => {
  const [display, setDisplay] = useState("");
  const handleClick = () => {
    setCnt((prev) => prev + 1);
    setDisplay("hidden");
  };
  return (
    <div className=" w-52 h-84 flex items-center gap-4 justify-center flex-col">
      <img className="w-58 h-64" src={image} alt={name} />
      <p>{name}</p>
      <div className={`flex gap-4 ${display}`}>
        {clicked ? (
          ``
        ) : (
          <>
            <button
              onClick={() => handleClick()}
              className="bg-lime-500 hover:bg-lime-600 text-white w-16 h-8 font-semibold  rounded-full"
            >
              Good
            </button>
            <button
              onClick={() => handleClick()}
              className="bg-red-500 hover:bg-red-600 text-white w-16 h-8 font-semibold rounded-full"
            >
              Bad
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const page = () => {
  const foodarray1 = food.images;
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    // console.log(cnt);
    if (cnt === 9) {
      //   console.log("hello");
    }
  }, [cnt]);
  const [foodarray, setFoodArray] = useState(foodarray1);
  return (
    <section>
      {cnt === 9 ? (
        <>
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-6xl font-semibold text-center m-4">
              Grade a Fruit
            </h1>
            <p className="font-weight-500 text-center m-4">Good or Bad?</p>
            <p className="font-weight-500 text-center m-4">
              Thanks for labeling! We've run out of images for now. Please Come
              Back soon
            </p>
            <Link
              className="bg-gray-300 mb-4 hover:bg-gray-400 rounded-full font-semibold text-2xl w-64 text-center p-2"
              href="/fruit-grader"
            >
              Back to Home {"→"}
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-6xl font-semibold text-center m-4">
            Grade a Fruit
          </h1>
          <p className="font-weight-500 text-center m-4">Good or Bad?</p>
          <div className="flex gap-4 flex-wrap justify-center mb-12">
            {foodarray.map((food, index) => (
              <FoodCard
                id={food.id}
                key={index}
                name={food.name}
                clicked={food.clicked}
                image={food.image}
                array={foodarray}
                setFoodArray={setFoodArray}
                setCnt={setCnt}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default page;
