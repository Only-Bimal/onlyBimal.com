import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const previous = {
      description: description?.getAttribute("content"),
      ogTitle: ogTitle?.getAttribute("content"),
      ogDescription: ogDescription?.getAttribute("content"),
    };

    description?.setAttribute(
      "content",
      "The page you requested could not be found on Bimal's portfolio website.",
    );
    ogTitle?.setAttribute("content", "Page Not Found | Bimal");
    ogDescription?.setAttribute(
      "content",
      "The page you requested could not be found on Bimal's portfolio website.",
    );

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    return () => {
      if (previous.description) description?.setAttribute("content", previous.description);
      if (previous.ogTitle) ogTitle?.setAttribute("content", previous.ogTitle);
      if (previous.ogDescription) ogDescription?.setAttribute("content", previous.ogDescription);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page Not Found | Bimal</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
