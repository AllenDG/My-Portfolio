import NavbarList from "./NavbarList";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <NavbarList />
      </div>
    </nav>
  );
}
