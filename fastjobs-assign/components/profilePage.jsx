"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchData } from "@/utils/fetchingFunctions";

const profilePage = () => {
  const { user, authenticated } = useSelector((state) => state?.user);
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push("/");
    }
    else {
        fetchData()
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
        <h1>Profile</h1>
    </div>
    </main>
  );
};

export default profilePage;
