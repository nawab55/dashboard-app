/* eslint-disable react/prop-types */
import { Menu, Bell, User } from 'lucide-react';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex h-16 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="ml-2 text-xl font-semibold lg:ml-0">Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;