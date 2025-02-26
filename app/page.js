import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
        {/* Logo skeleton */}
        <div className="h-10 w-44 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        
        {/* List items skeleton */}
        <div className="w-full space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        </div>
      </main>

      {/* Footer skeleton */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </footer>
    </div>
  );
}