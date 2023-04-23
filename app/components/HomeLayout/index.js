"use client"

import Header from "../Header";

export default function HomeLayout({children}) {
  return (
    <
      >
      <Header />
      <main className="w-full h-screen overflow-auto snap-y snap-mandatory scrollbar-hide sm:scroll-smooth">
        {children}
      </main>
    </>
  );
};
