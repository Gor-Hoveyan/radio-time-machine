import { range } from "@/utils/range";
import Link from "next/link";

export default function ListOfYears() {
  return (
    <div className="grid mx-auto gap-3 lg:grid-cols-5 lg:w-3/5">
      {range(1920, new Date().getFullYear()).map((elem) => (
        <Link href={`year/${elem}`} key={elem}>
          <div className="text-center py-10 px-10 bg-gray-300 text-black text-2xl font-bold rounded-xl cursor-pointer hover:scale-105 duration-300">
            {elem}
          </div>
        </Link>
      ))}
    </div>
  );
}
