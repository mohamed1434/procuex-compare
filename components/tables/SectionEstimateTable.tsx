interface SectionEstimateTableProps {
  data: SectionEstimate[];
}

const SectionEstimateTable: React.FC<SectionEstimateTableProps> = ({
  data,
}) => {
  return (
    <div>
      <table>
        <thead className="text-black text-[12px] font-light uppercase bg-[#F2F9FF]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Offer Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="bg-white border-b font-light text-[12px]">
              <th
                scope="row"
                className="px-6 py-4 text-gray-900 whitespace-nowrap font-light"
              >
                {index + 1}
              </th>
              <td className="px-2 py-2 ">{item.section.name}</td>
              <td className="px-2 py-2 ">{item.costMinimum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionEstimateTable;
