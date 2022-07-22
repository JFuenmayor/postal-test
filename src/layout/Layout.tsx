import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useLayoutText = (): string | null => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (location.pathname === "/") navigate("/items");
  }, [location]);

  return id ? "Back to Marketplace" : null;
};

const Layout: React.FC = ({ children }) => {
  const text = useLayoutText();
  const navigate = useNavigate();

  return (
    <div className="min-w-full min-h-screen">
      <nav className="z-50  sticky cursor-pointer drop-shadow-md bg-white top-0 border-gray-200 px-6 py-5 h-14">
        {text && (
          <div
            className="group flex h-full align-middle"
            onClick={() => navigate(-1)}
          >
            <svg
              className="w-4 h-4 mr-3 stroke-blue-400 group-hover:stroke-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="font-semibold text-sm text-blue-400 group-hover:text-blue-600 ">
              {text}
            </span>
          </div>
        )}
      </nav>
      <div className="container mx-auto py-6 ">{children}</div>
    </div>
  );
};

export default Layout;
