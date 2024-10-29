const extractCompanyInfo = (companyData) => {
  // TODO: Return an object containing:
  // - basics: company name and city
  const {
    name,
    location: { city },
    departments: [firstDept, ...remainingDepts],
    founders: [{ name: ceoName, role: ceoRole }]
  } = companyData;
  return {
      basics: { name, city },
      departments: { firstDept, ...remainingDepts },
      ceo: { ceoName, ceoRole }
    };
}



const company = {
  name: "Tech Corp",
  location: {
    city: "San Francisco",
    country: "USA",
  },
  departments: ["Engineering", "Marketing", "Sales"],
  founders: [
    { name: "Jane Smith", role: "CEO" },
    { name: "Mike Johnson", role: "CTO" },
  ],
};

console.log(extractCompanyInfo(company));