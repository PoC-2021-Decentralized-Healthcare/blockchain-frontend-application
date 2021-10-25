export interface InventoryProduct
{
    id: string;

    ofchain_id: string;
    owner: string;    
    shared?: string[];

    // FHIR Medical Record
    patientrecord?: patientRecord;
}

export interface patientRecord {
    record: HL7Record;
}

export interface HL7Record {
    fullUrl: string;
    request?: HL7Request;
    resource: HL7Resource;
}


export interface HL7Resource 
{
    resourceType: string;
    id: string;
    
    lifecycleStatus?: string;
    status?: string;
    achievementStatus?: HL7AchievementStatus;
    description?: HL7Description;
    subject?: HL7Subject;
    category?: HL7Coding[];
    code?: HL7Coding[];
    effectiveDateTime?: string;
    issued?: string;
    encounter?: HL7Encounter;
    valueQuantity?: HL7ValueQuantity;
  }



export interface HL7ValueQuantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}

export interface HL7Encounter {
  reference: string;
}

export interface HL7AchievementStatus {
  coding: HL7Coding[]
  text?: string;
}


export interface HL7Coding {
    system: string;
    code: string;
    display?: string;
}


export interface HL7Description {
    text: string;
}

export interface HL7Subject {
    reference: string;
}

export interface HL7Request {
    method: string;
    url: string;
}









export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    id?: string;
    title?: string;
}

export interface InventoryVendor
{
    id: string;
    name: string;
    slug: string;
}
