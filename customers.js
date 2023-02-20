const customers = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        telephone: "",
        dateofbirth: "",
        address: "",
        mail: "",
        isprofessional: false,
        created: new Date(),
        companies: [
            {
                id: 1,
                siret: "",
                name: "SwissLife",
                headoffice: "",
            },
            {
                id: 2,
                siret: "",
                name: "MetLife",
                headoffice: "",
            },
            {
                id: 2,
                siret: "",
                name: "Allianz",
                headoffice: "",
            },
        ],
        contracts: [
            {
                id: 1,
                name: "GAV",
                company: "Allianz",
                created: new Date(),
            },
        ],
    },
]

module.exports = customers;