import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="m-4">
      <h1 className="text-6xl font-bold m-8 text-center">Fruit Grader</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/assest/cherry.jpg"
          width={440}
          height={340}
          alt="apple"
        ></Image>
        <h3 className="text-3xl font-semibold">Grade A Fruit</h3>
        <p className="font-weight-500">Good or Bad?</p>
        <h4 className="text-gray-600">
          An app for anyone to help save food by training robots to more
          accurately diffrentiate between good and bad fruits and vegetables
        </h4>
        <Link
          className="bg-gray-300 mb-4 hover:bg-gray-400 rounded-full font-semibold text-2xl w-64 text-center p-2"
          href="/login"
        >
          Next {"→"}
        </Link>
      </div>
    </main>
  );
}
