import { X } from "lucide-react";
import { MouseEventHandler } from "react";
import IconButton from "../IconButton";
import SectionEstimateTable from "../tables/SectionEstimateTable";

interface RfqModalProps {
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  title: string;
  data: Section;
}

const RfqModal: React.FC<RfqModalProps> = ({ title, data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-10 `}
    >
      <div className="bg-white w-[40rem] rounded-lg shadow-lg z-50">
        <div className="flex items-center  justify-between p-4 rounded-lg bg-[#F2F9FF]">
          <h2 className="text-2xl font-semibold z-">{title}</h2>
          <IconButton onClick={onClick} icon={<X className="h-4 w-4" />} />
        </div>
        <hr className="pb-4 w-full" />
        <div className="p-2">
          <div className="grid gap-3 pt-1 pb-6 px-8 text-[0.7rem]">
            <p className="font-semibold">{data.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="grid grid-cols-3">
                <p className="text-gray-400 font-light">Section Name</p>
                <p className="">:</p>
                <p>{data.name}</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="text-gray-400 font-light">Sec ID</p>
                <p className="">:</p>
                <p>{data.id}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="grid grid-cols-3">
                <p className="text-gray-400 font-light">Sort Order</p>
                <p className="">:</p>
                <p>-</p>
              </div>
              <div className="grid grid-cols-3">
                <p className="text-gray-400 font-light">Rank</p>
                <p className="">:</p>
                <p>-</p>
              </div>
            </div>
            <div className="grid gap-1">
              <p className="text-gray-400 font-light">Description:</p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfqModal;
