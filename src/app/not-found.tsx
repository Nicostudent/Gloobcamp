"use client";

import { useCountdownRedirect } from "@/hooks";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const REDIRECT_TIME = 5;

  const { countdown } = useCountdownRedirect({
    redirectTime: REDIRECT_TIME,
    redirectPath: "/",
  });

  const router = useRouter();

  const handleGoHomeClick = () => {
    router.replace("/");
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest text-black">
          404
        </h1>
        <div className="absolute top-10 w-full rotate-12 rounded bg-primary px-2 text-center text-xl font-bold tracking-widest">
          <p>Page Not Found</p>
        </div>
      </div>
      <p className="mt-4 text-black">
        You will be redirected to home in {countdown} seconds...
      </p>
      <button
        onClick={handleGoHomeClick}
        className="mt-5 rounded border border-blue-700 bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700"
        aria-label="go to home"
      >
        Go Home
      </button>
    </main>
  );
};

export default NotFound;
