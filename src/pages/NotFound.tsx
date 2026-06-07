import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found — Veterans Dental Foundation";
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          <span aria-hidden="true">404 — </span>Page Not Found
        </h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="text-primary underline hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
