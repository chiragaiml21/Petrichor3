import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 justify-center items-center mt-10">
      <h1 className="text-3xl">
        This is the home page 
      </h1>

      <Link href="/register" className="rounded-full p-2 bg-slate-500 text-white font-bold ">
          Register
        </Link>
    </div>
  );
}