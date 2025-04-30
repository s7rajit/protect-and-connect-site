
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-9xl font-bold text-prevented-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
        </p>
        <Button asChild size="lg">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
