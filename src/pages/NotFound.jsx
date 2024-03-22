import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[85vh] flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl flex">⚠️404</h1>
      <p>We couldn&apos;t found the resource you&apos;re looking for!</p>
      <Link
        to="/"
        replace
        className="px-4 py-2 bg-blue-700 text-white rounded-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}
