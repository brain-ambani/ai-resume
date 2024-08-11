import Header from "@/components/header";
import Loader from "@/components/loader";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClerkLoading>
        <Loader />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </ClerkLoaded>
    </div>
  );
}

export default DashboardLayout;