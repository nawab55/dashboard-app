/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  HelpCircle,
  BarChart
} from 'lucide-react';

function Sidebar({ isOpen }) {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/analytics', icon: BarChart, label: 'Analytics' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/products', icon: ShoppingCart, label: 'Products' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <aside
      className={`w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } fixed lg:relative`}
    >
      <div className="h-full overflow-y-auto">
        <ul className="space-y-2 p-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group transition-colors duration-200 ${
                    isActive ? 'bg-gray-100' : ''
                  }`
                }
              >
                <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ml-3">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;