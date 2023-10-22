import DbConnect from "../../utils/DbConnection";
import Food from "../../model/food.js";
export async function GET(req) {}

export const POST = async (req, res) => {
  const { name, image, isGood } = await req.json();
  console.log(name, image, isGood);
  try {
    await DbConnect();
    // const food = await Food.create({
    //   name,
    //   image,
    //   isGood,
    // });
    // if (food) {
    //   return res
    //     .status(201)
    //     .json({ message: "Food created successfully", food });
    // }
    return res.status(500).json({ message: "Failed to create" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Falied to create food" });
  }
};
