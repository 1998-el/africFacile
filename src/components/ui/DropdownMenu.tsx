import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SubLink {
  label: string;
  to: string;
  icon?: React.ReactNode;
  description?: string;
  subCategories?: string[];
}

interface MenuItem {
  title: string;
  icon?: React.ReactNode;
  subLinks?: SubLink[];
}

interface DropdownProps {
  title: string;
  items?: MenuItem[];
  links?: SubLink[];
  hoverColor?: string;
  megaMenu?: boolean;
}

export const DropdownMenu = ({
  title,
  items = [],
  links = [],
  hoverColor = "hover:text-green-600",
  megaMenu = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      // className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 font-medium text-gray-700 ${hoverColor} transition`}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega Menu plein écran */}
      {megaMenu && (
        <div
          className={`absolute left-0 top-full mt-2 w-screen bg-white border-t border-gray-100 shadow-xl z-50 transform transition-all duration-300 ease-in-out ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 px-6 py-6">
            {items.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-2 font-semibold text-green-600 border-b pb-2">
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.subLinks?.map((subLink) => (
                    <li key={subLink.to}>
                      <Link
                        to={subLink.to}
                        className="flex items-start gap-2 p-2 rounded hover:bg-gray-50 group transition"
                      >
                        <span className="text-gray-400 group-hover:text-green-600">
                          {subLink.icon}
                        </span>
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-green-600">
                            {subLink.label}
                          </div>
                          {subLink.description && (
                            <p className="text-xs text-gray-500">
                              {subLink.description}
                            </p>
                          )}
                          {subLink.subCategories && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {subLink.subCategories.map((cat) => (
                                <span
                                  key={cat}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu classique */}
      {!megaMenu && (
        <div
          className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-md z-50 transition-all duration-200 ease-in-out ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};