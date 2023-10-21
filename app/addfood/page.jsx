"use client";
import React, { useState } from "react";

function FoodForm() {
  const [food, setFood] = useState({
    name: "",
    isGood: null,
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFood({
      ...food,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the food data here
    console.log("Food Data:", food);
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold">Add Food</h2>
        <div className="mt-4">
          <label className="block text-gray-600 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={food.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600 text-sm font-medium">
            Is it good?
          </label>
          <input
            type="checkbox"
            name="isGood"
            checked={food.isGood}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600 text-sm font-medium">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={food.image}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
