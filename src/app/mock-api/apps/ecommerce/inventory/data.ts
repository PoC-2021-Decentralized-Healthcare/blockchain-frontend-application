/* eslint-disable */
export const categories = [
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e3',
        parentId: null,
        name    : 'Diagnostic Report',
        slug    : 'diagnosticreport'
    },    
    {
        id      : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        parentId: null,
        name    : 'Care Plan',
        slug    : 'careplan'
    },
    {
        id      : '07986d93-d4eb-4de1-9448-2538407f7254',
        parentId: null,
        name    : 'Condition',
        slug    : 'condition'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        parentId: null,
        name    : 'Goal',
        slug    : 'goal'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e1',
        parentId: null,
        name    : 'Claim',
        slug    : 'claim'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e2',
        parentId: null,
        name    : 'Service Request',
        slug    : 'servicerequest'
    }
];

export const brands = [
    {
        id  : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        name: 'Benton',
        slug: 'benton'
    },
    {
        id  : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        name: 'Capmia',
        slug: 'capmia'
    },
    {
        id  : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        name: 'Lara',
        slug: 'lara'
    },
    {
        id  : '5913ee46-a497-41db-a118-ee506011529f',
        name: 'Premera',
        slug: 'premera'
    },
    {
        id  : '2c4d98d8-f334-4125-9596-862515f5526b',
        name: 'Zeon',
        slug: 'zeon'
    }
];
export const tags = [
    {
        id   : '167190fa-51b4-45fc-a742-8ce1b33d24ea',
        title: 'mens'
    },
    {
        id   : '3baea410-a7d6-4916-b79a-bdce50c37f95',
        title: 'ladies'
    },
    {
        id   : '8ec8f60d-552f-4216-9f11-462b95b1d306',
        title: 'unisex'
    },
    {
        id   : '8837b93f-388b-43cc-851d-4ca8f23f3a61',
        title: '44mm'
    },
    {
        id   : '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
        title: '40mm'
    },
    {
        id   : '2300ac48-f268-466a-b765-8b878b6e14a7',
        title: '5 ATM'
    },
    {
        id   : '0b11b742-3125-4d75-9a6f-84af7fde1969',
        title: '10 ATM'
    },
    {
        id   : '0fc39efd-f640-41f8-95a5-3f1d749df200',
        title: 'automatic'
    },
    {
        id   : '7d6dd47e-7472-4f8b-93d4-46c114c44533',
        title: 'chronograph'
    },
    {
        id   : 'b1286f3a-e2d0-4237-882b-f0efc0819ec3',
        title: 'watch'
    }
];


export const vendors = [
    {
        id  : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        name: 'Morton Hospital',
        slug: 'morton'
    },
    {
        id  : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        name: 'Mediterenean Hospital',
        slug: 'mediterenean'
    },
    {
        id  : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        name: 'MedGen Lab',
        slug: 'medgen'
    }
];


export const products = [
    {
        id         : '7eb7c859-1347-4317-96b6-9476a7e2ba3c',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Capmia Mens Chronograph Watch 44mm 5 ATM',
        description: 'Consequat esse in culpa commodo anim. Et ullamco anim amet est. Sunt dolore ex occaecat officia anim. In sit minim laborum nostrud. Consequat ex do velit voluptate do exercitation est adipisicing quis velit.',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ETV-2425',
        barcode    : '8346201275534',
        brand      : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 30,
        reserved   : 5,
        cost       : 450.18,
        basePrice  : 1036,
        taxPercent : 30,
        price      : 1346.8,
        weight     : 0.61,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-01-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-01-01.jpg'
        ],
        active     : true
    },
    {
        id         : '00b0292f-3d50-4669-a0c4-7a9d85efc98d',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Zeon Ladies Chronograph Watch 40mm 10 ATM',
        description: 'Nulla duis dolor fugiat culpa proident. Duis anim est excepteur occaecat adipisicing occaecat. Labore id laborum non elit proident est veniam officia eu. Labore aliqua nisi duis sint ex consequat nostrud excepteur duis ex incididunt adipisicing.',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : 'ATH-7573',
        barcode    : '8278968055700',
        brand      : '2c4d98d8-f334-4125-9596-862515f5526b',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 37,
        reserved   : 2,
        cost       : 723.55,
        basePrice  : 1686,
        taxPercent : 30,
        price      : 2191.8,
        weight     : 0.79,
        thumbnail  : 'assets/images/apps/ecommerce/products/watch-02-thumb.jpg',
        images     : [
            'assets/images/apps/ecommerce/products/watch-02-01.jpg'
        ],
        active     : true
    }
];
