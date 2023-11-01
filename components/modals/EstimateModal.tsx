import { X } from "lucide-react";
import { MouseEventHandler } from "react";
import IconButton from "../IconButton";
import SectionEstimateTable from "../tables/SectionEstimateTable";

interface EstimateModalProps {
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  title: string;
  data: SectionEstimate[];
}

const EstimateModal: React.FC<EstimateModalProps> = ({
  title,
  data,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-10 `}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-2xl font-semibold z-">{title}</h2>
          <IconButton onClick={onClick} icon={<X className="h-4 w-4" />} />
        </div>
        <hr className="pb-4 w-full" />
        <SectionEstimateTable data={data} />
      </div>
    </div>
  );
};

export default EstimateModal;
