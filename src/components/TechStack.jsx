export default function TechStack() {
  return (
    <section className=" border border-black-500 p-4 rounded-lg col-span-3 md:col-span-2 w-full">
      <h2 className="text-2xl font-bold  mb-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-1">
        <span className="px-4 py-2  border border-black-500 rounded-md text-sm ">
          React
        </span>
        <span className="px-4 py-2  border border-black-500 rounded-md text-sm ">
          Tailwind CSS
        </span>
        <span className="px-4 py-2  border border-black-500 rounded-md text-sm ">
          MySQL
        </span>
        <span className="px-4 py-2  border border-black-500 rounded-md text-sm ">
          Laravel
        </span>
        <span className="px-4 py-2  border border-black-500 rounded-md text-sm ">
          JavaScript
        </span>
      </div>
    </section>
  );
}
