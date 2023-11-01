"use client";
import { formatDate } from "@/utils";
import IconButton from "../IconButton";
import { Heart, Check, Eye } from "lucide-react";
import { useState } from "react";
import EstimateModal from "../modals/EstimateModal";

interface ResponseTableProps {
  headers: string[];
  rows: Rows[];
}

const ResponseTable: React.FC<ResponseTableProps> = ({ headers, rows }) => {
  const [checkedRows, setCheckedRows] = useState(rows.map(() => false));
  const [checkedHearts, setCheckedHearts] = useState(
    rows.map((row) => row.isShortlisted)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSectionEstimate, setSelectedSectionEstimate] = useState<
    SectionEstimate[]
  >([]);

  const handleCheck = (id: number) => {
    const newCheckedRows = [...checkedRows];
    newCheckedRows[id] = !newCheckedRows[id];
    setCheckedRows(newCheckedRows);
  };

  const handleHearts = (id: number) => {
    const newCheckedHearts = [...checkedHearts];
    newCheckedHearts[id] = !newCheckedHearts[id];
    setCheckedHearts(newCheckedHearts);
  };

  const handleModal = (rowData: SectionEstimate[]) => {
    setSelectedSectionEstimate(rowData);
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-center text-black text-[12px] font-light rounded-lg">
          <thead className="text-black text-[12px] font-light uppercase bg-[#F2F9FF]">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="px-2 py-2 ">{row.supplier.name}</td>
                  <td className="px-2 py-2 ">{row.coverage} % </td>
                  <td className="px-2 py-2 ">
                    {formatDate(row.submittedDate)}
                  </td>
                  <td className="px-2 py-2 ">
                    <div className="flex items-center justify-center gap-2">
                      {row.offerPricing} {row.offerPricingMeasurement}
                      <Eye
                        className="h-4 w-4 text-blue-500 cursor-pointer"
                        onClick={() => handleModal(row.sectionEstimate)}
                      />
                    </div>
                  </td>
                  <td className="px-2 py-2 flex items-center justify-center">
                    <button
                      onClick={() => handleCheck(index)}
                      className="bg-[#F2F2F2] rounded-md h-6 w-6 flex items-center justify-center"
                    >
                      {checkedRows[index] && (
                        <Check className="h-4 w-4 text-blue-500" />
                      )}
                    </button>
                  </td>
                  <td className="px-2 py-2 ">
                    <IconButton
                      onClick={() => handleHearts(index)}
                      icon={
                        <Heart
                          className={`${
                            checkedHearts[index]
                              ? "fill-blue-500"
                              : "fill-[#F2F2F2]"
                          } text-transparent`}
                        />
                      }
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EstimateModal
          title="Section Estimates"
          data={selectedSectionEstimate}
          onClick={onClose}
        />
      )}
    </>
  );
};

export default ResponseTable;
