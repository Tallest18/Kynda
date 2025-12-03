import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation(); // gives the current URL path
  const pathname = location.pathname; // e.g., "/dashboard/my-learning"

  // Split path into segments
  const pathnames = pathname.split("/").filter(Boolean);
  // ["dashboard", "my-learning"]

  return (
    <div className="bg-[#F1F5F9]">
      <nav className="max-w-screen-2xl mx-auto px-4 py-3 text-gray-600 text-sm">
        {pathnames.map((name, index) => {
          // Build the link to this segment
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <span key={routeTo} className="capitalize text-[#2D2D2D]">
              {formatBreadcrumbName(name)}
            </span>
          ) : (
            <span key={routeTo}>
              <Link to={routeTo} className="hover:underline">
                {formatBreadcrumbName(name)}
              </Link>{" "}
              &gt;{" "}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

// Optional: format route names nicely
function formatBreadcrumbName(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default Breadcrumbs;