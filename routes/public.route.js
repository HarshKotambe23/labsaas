const router = require("express").Router()
const publicController = require("./../controllers/public.controller")



router
    .get("/fetch-customer-package", publicController.getAllCustomerPackage)
    .get("/fetch-customer-package-details/:packageId", publicController.getCustomerPackageDetails)
    .get("/get-all-cities", publicController.getAllCities)
    .get("/get-all-companies", publicController.getAllCompanies)
    .get("/get-all-companyPackages/:companyId", publicController.getAllCompanyPackages)
    .get("/search", publicController.handleSearch)


module.exports = router