import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex-col w-full max-w-3xl h-[calc(100vh-60px)] p-6 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Error Page</h1>
        <p className="mt-1">
          {isRouteErrorResponse(error)
            ? "Sorry, the route is invalid."
            : "Sorry, an unexpected error occurred."}
        </p>
      </div>
    </main>
  );
};

export default ErrorPage;
