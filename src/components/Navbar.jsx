// Navbar.jsx
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-gray-800">
        FASHIONZONE
      </div>

      {/* Middle - Search */}
      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Right - Cart & Profile */}
      <div className="flex items-center gap-6 text-gray-700 text-lg">
        <button className="flex items-center gap-1 hover:text-black cursor-pointer">
          <FaShoppingCart />
          Cart
        </button>
        <button className="flex items-center gap-1 hover:text-black cursor-pointer">
          <FaUser />
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
