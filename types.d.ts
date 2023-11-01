interface Supplier {
  id: string;
  name: string;
}

interface SectionInEstimate {
  name: string;
  description: string;
}

interface SectionEstimate {
  costMinimum: number | null;
  costMaximum: number | null;
  customerId: string;
  section: SectionInEstimate;
}

interface Rows {
  id: string;
  submittedDate: string;
  submissionClosingDate: string;
  supplier: Supplier;
  isShortlisted: boolean;
  coverage: string;
  offerPricing: number;
  offerPricingMeasurement: string;
  duration: number;
  durationMeasurement: string;
  sectionEstimate: SectionEstimate[];
}

interface Customer {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
}

interface SupplyCountry {
  id: string;
  name: string;
}

interface RFQ {
  id: string;
  serialNumber: string;
  customerId: string;
  name: string;
  summary: string;
  description: string;
  openingDate: string;
  closingDate: string;
  reviewDate: string;
  selectionDate: string;
  supplyType: string;
  isPublished: boolean;
  isCompleted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  customer: Customer;
  category: Category;
  subCategory: SubCategory;
  supplyCountry: SupplyCountry;
}

interface Section {
  id: string;
  rfqId: string;
  key: string;
  parentKey: string | null;
  name: string;
  description: string;
  attachments: Attachment[] | null;
}

interface Attachment {
  id: string;
  url: string;
}

interface SectionsData {
  sections: Section[];
}

interface SubSection {
  id: string;
  rfqId: string;
  key: string;
  parentKey: string;
  name: string;
  description: string;
}

interface SubSectionsData {
  subSections: SubSection[];
}

interface ObjectData {
  id: string;
  rfqId: string;
  key: string;
  parentKey: string;
  name: string;
  description: string;
  isRequired: boolean;
  isAlternativeAllowed: boolean;
}

interface ObjectsData {
  objects: ObjectData[];
}

interface CustomerData {
  responseId: string;
  id: string;
  name: string;
  isShortlisted: boolean;
  coverage: number;
}

interface CustomersData {
  customers: CustomerData[];
}

interface ResponseData {
  id: string;
  customerId: string;
  rfqId: string;
  responseId: string;
  rfqObjectId: string;
  supplierAction: string;
  supplierComment: string | null;
  supplierSuggestion: string | null;
  companyReply: string | null;
  subSectionId: string;
}

interface ResponsesData {
  responses: ResponseData[];
}

interface Compare {
  rfq: RFQ;
  sections: Section[];
  subSections: SubSection[];
  objects: ObjectData[];
  customers: CustomerData[];
  responses: ResponseData[];
}
