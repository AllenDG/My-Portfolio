export default function Certifications() {
  return (
    <section className="border border-black-500 p-6 rounded-lg max-w-xl  col-span-3 md:col-span-1 row-span-1 md:row-span-2 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Certifications</h2>{" "}
        {/* Changed from text-2xl to text-xl */}
        <button className="hover:underline text-xs">View All</button>{" "}
        {/* Changed from text-sm to text-xs */}
      </div>
      <div className="space-y-4">
        {/* Individual Certification Rows */}
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md hover:bg-gray-200">
          <div>
            <h3 className="text-xs font-bold">UI/UX Fundamentals</h3>{" "}
            {/* Changed from text-sm to text-xs */}
            <p className="text-xs text-gray-500">Date: January 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md hover:bg-gray-200">
          <div>
            <h3 className="text-xs font-bold">Frontend Development</h3>{" "}
            {/* Changed from text-sm to text-xs */}
            <p className="text-xs text-gray-500">Date: March 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md hover:bg-gray-200">
          <div>
            <h3 className="text-xs font-bold">React Mastery</h3>{" "}
            {/* Changed from text-sm to text-xs */}
            <p className="text-xs text-gray-500">Date: June 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md hover:bg-gray-200">
          <div>
            <h3 className="text-xs font-bold">JavaScript Essentials</h3>{" "}
            {/* Changed from text-sm to text-xs */}
            <p className="text-xs text-gray-500">Date: September 2023</p>
          </div>
        </button>
      </div>
    </section>
  );
}
