"use client";
import food from "../data/food.json";
import { useState, useEffect } from "react";
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
              className="bg-cyan-500 hover:bg-cyan-600 text-white w-16 h-8 font-semibold  rounded-full"
            >
              Sanp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const page = () => {
  const foodarray = food.images;
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    // console.log(cnt);
    if (cnt === 9) {
      //   console.log("hello");
    }
  }, [cnt]);
  return (
    <section>
      <h1 className="text-6xl font-semibold text-center m-4">Snap a Fruit</h1>
      <p className="font-weight-500 text-center m-4">Ready - Set - Snap</p>
      <div className="flex gap-4 flex-wrap justify-center mb-12">
        {foodarray.map((food, index) => (
          <FoodCard
            id={food.id}
            key={index}
            name={food.name}
            clicked={food.clicked}
            image={food.image}
            array={foodarray}
            setCnt={setCnt}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
