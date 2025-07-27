import { range } from "@/utils/range";
import Link from "next/link";
import HomeMusicIcon from "@/app/icons/HomeMusicIcon";

const getEraColor = (year: number) => {
  if (year >= 2020) return "from-pink-500 to-purple-600";
  if (year >= 2000) return "from-blue-400 to-indigo-500";
  if (year >= 1980) return "from-yellow-300 to-orange-400";
  if (year >= 1960) return "from-green-300 to-teal-500";
  return "from-gray-300 to-gray-500";
};

export default function ListOfYears() {
  const years = range(1920, new Date().getFullYear());

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mx-auto max-w-7xl px-4 py-10">
      {years.reverse().map((year, index) => (
        <Link href={`/year/${year}`} key={year}>
          <div
            className={`group relative rounded-xl p-6 shadow-lg bg-gradient-to-br ${getEraColor(
              year
            )} hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in`}
            style={{ animationDelay: `${index * 20}ms` }}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="bg-white p-4 rounded-full shadow-md group-hover:rotate-[360deg] transition-transform duration-[1500ms]">
                <HomeMusicIcon />
              </div>
              <p className="text-2xl font-bold text-white drop-shadow-md tracking-wide">
                {year}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
