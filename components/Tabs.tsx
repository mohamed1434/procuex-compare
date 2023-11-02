"use client";

import { AlertCircle, Heart, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import RfqModal from "./modals/RfqModal";

interface TabsProps {
  data: Compare;
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [openTab, setOpenTab] = useState(data.sections[0].key);
  const [expandedDiv, setExpandedDiv] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDivVisibility = (index: number) => {
    if (expandedDiv === index) {
      setExpandedDiv(null);
    } else {
      setExpandedDiv(index);
    }
  };

  const handleAlert = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full bg-[#F7FCFF]">
        <ul className="flex mb-0 list-none flex-row w-[20rem] overflow-scroll no-scrollbar">
          {data.sections.map((section, index) => (
            <>
              <li key={index} className=" flex-auto text-center border-r">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 block " +
                    (openTab === section.key &&
                      `text-black border-b border-blue-500 `)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(section.key);
                  }}
                  href="#link1"
                >
                  {`Section ${index + 1}`}
                </a>
              </li>
              {openTab === section.key && isModalOpen && (
                <RfqModal
                  data={data.sections[index]}
                  title="Section Details"
                  onClick={onClose}
                />
              )}
            </>
          ))}
        </ul>

        <div className="flex overflow-scroll no-scrollbar">
          <div className="flex flex-col w-20 sm:w-24 md:w-40 lg:w-56 sticky -left-[1px] bg-[#F7FCFF]">
            <div className="flex flex-col justify-center gap-2 p-4 h-32 border-b border-r border-t">
              <h1 className="text-[8px] md:text-[12px] font-bold">
                RFQ Details
              </h1>
              <p className="text-[8px]  md:text-[12px] font-light">
                {data.rfq.name}
              </p>
              <div className="w-full flex md:flex-row flex-col justify-between items-center">
                <p className="text-[8px] md:text-[12px] font-light">
                  #8fl3DSzW
                </p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-[8px] md:text-[12px] font-light">
                    Details
                  </p>
                  <AlertCircle
                    onClick={handleAlert}
                    className="w-2 h-2 cursor-pointer md:h-4 md:w-4"
                  />
                </div>
              </div>
            </div>

            {data.subSections
              .filter((subSection) => subSection.parentKey === openTab)
              .map((subSection, index) => (
                <>
                  <div
                    onClick={() => toggleDivVisibility(index)}
                    key={index}
                    className="flex w-full justify-between items-center py-6 p-2 border-b border-r cursor-pointer h-16"
                  >
                    <div className="w-full flex items-start justify-start overflow-scroll no-scrollbar">
                      <h1 className="text-[8px] md:text-[12px] font-bold">
                        {subSection.name}
                      </h1>
                    </div>
                    {expandedDiv === index ? (
                      <MinusCircle className="w-2 h-2 md:w-4 md:h-4" />
                    ) : (
                      <PlusCircle className="w-2 h-2 md:w-4 md:h-4" />
                    )}
                  </div>
                  {expandedDiv === index && (
                    <div className="flex flex-col w-20 sm:w-24 md:w-40 lg:w-56">
                      {data.objects
                        .filter((object) => object.parentKey === subSection.key)
                        .map((object, index) => (
                          <div key={index} className="p-2 border-b border-r flex flex-col w-full h-44 overflow-y-scroll no-scrollbar">
                            <div className="flex flex-row gap-1 items-center">
                              <h1 className="text-[0.4rem]  md:text-[0.7rem] text-gray-400">
                                Title:
                              </h1>
                              <p className="text-[0.5rem]  md:text-[0.8rem] font-normal">
                                {object.name}
                              </p>
                            </div>
                            <div className="flex flex-col ">
                              <h1 className="text-[0.4rem]  md:text-[0.7rem] text-gray-400">
                                Descritpion:
                              </h1>
                              <p className="text-[0.3rem]  md:text-[0.6rem] font-light">
                                {object.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </>
              ))}
          </div>

          {data.customers.map((customer, index) => (
            <div key={index} className="flex flex-col w-20 sm:w-24 md:w-40 lg:w-56">
              <div className="flex flex-col justify-center items-start gap-2 p-2 md:p-4 border-b border-r border-t h-32">
                <h1 className="text-[8px] md:text-[12px] font-bold">{`Supplier ${
                  index + 1
                }`}</h1>
                <p className="text-[8px] md:text-[12px] font-light">
                  {customer.name}
                </p>

                {customer.isShortlisted ? (
                  <div className="flex gap-2 border border-blue-500 py-1 w-16 md:w-24 items-center justify-center rounded-md cursor-pointer">
                    <Heart className="w-2 h-2 md:w-4 md:h-4 fill-blue-500 text-transparent" />
                    <h1 className="text-[8px] md:text-[10px] text-blue-500">
                      Shortlisted
                    </h1>
                  </div>
                ) : (
                  <div className="flex gap-2 border border-blue-500 py-1 w-16 md:w-24 items-center justify-center rounded-md cursor-pointer">
                    <Heart className="w-2 h-2 md:w-4 md:h-4 fill-gray-500 text-transparent" />
                    <h1 className="text-[8px] md:text-[10px] text-blue-500">
                      Shortlist
                    </h1>
                  </div>
                )}
              </div>

              {data.subSections
                .filter((subSection) => subSection.parentKey === openTab)
                .map((subSection, index) => (
                  <>
                    <div key={index} className="flex w-full h-16 justify-between items-center p-4 md:p-6 border-b border-r">
                      <h1 className="text-[8px] md:text-[12px] font-bold">
                        Response
                      </h1>
                    </div>
                    {expandedDiv === index && (
                      <div className="flex flex-col w-20 sm:w-24 md:w-40 lg:w-56">
                        {data.responses
                          .filter(
                            (response) =>
                              response.subSectionId === subSection.key &&
                              response.customerId === customer.id
                          )
                          .map((response, index) => (
                            <div key={index} className="border-b border-r flex flex-col w-full p-4 h-44">
                              <div className="flex flex-row gap-2 items-center">
                                <h1 className="text-[8px] md:text-[12px] text-gray-400">
                                  Can Do
                                </h1>

                                <p
                                  className={`text-[8px] md:text-[12px] text-white font-normal
                                   px-2 py-[0.09rem] ${
                                     response.supplierAction === "yes"
                                       ? "bg-green-500"
                                       : "bg-red-500"
                                   } rounded-[0.2rem]`}
                                >
                                  {response.supplierAction
                                    .charAt(0)
                                    .toUpperCase() +
                                    response.supplierAction.slice(1)}
                                </p>
                              </div>
                              <div className="flex flex-col ">
                                <h1 className="text-[8px] md:text-[12px] text-blue-400">
                                  More Details
                                </h1>
                                <p className="text-[8px] md:text-[10px] font-light">
                                  {response.supplierComment}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
