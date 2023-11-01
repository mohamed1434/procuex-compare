"use client";

import ResponseTable from "@/components/tables/ResponseTable";
import { data } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const responeTableHeaders = [
    "Id",
    "Supplier Name",
    "Coverage",
    "Submission Date",
    "Offer Amount",
    "Compare",
    "Short List",
  ];
  const router = useRouter();

  const handleClick = () => {
    router.push("/compare");
  };
  
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-full flex justify-between items-center p-2">
        <h1 className="text-3xl font-semibold">Clinics Booking System</h1>
        <button
          onClick={handleClick}
          className="p-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Compare
        </button>
      </div>
      <ResponseTable headers={responeTableHeaders} rows={data.data.responses} />
    </div>
  );
}
