import Tabs from "@/components/Tabs";
import { compare_data } from "@/data";
import React from "react";

const ComparePage = () => {
  return (
    <div className="m-4">
      <h1 className="text-[20px] font-bold mb-4">Comparing RFQ Name</h1>
      <Tabs data={compare_data.data} />
    </div>
  );
};

export default ComparePage;
