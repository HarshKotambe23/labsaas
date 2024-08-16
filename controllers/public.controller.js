const asyncHandler = require("express-async-handler")
const CustomerPackages = require("../models/CustomerPackages")
const QnA = require("../models/QnA")
const City = require("../models/City")

exports.getAllCustomerPackage = asyncHandler(async (req, res) => {
    const result = await CustomerPackages.find({ active: true }).populate("company")
    return res.json({ messsage: "Customer Package Activate Success", result })
})
exports.getCustomerPackageDetails = asyncHandler(async (req, res) => {
    const { packageId } = req.params
    const result = await CustomerPackages.findOne({ _id: packageId }).populate("company")
    const qnaResult = await QnA.find({ package: packageId }).populate("company")
    return res.json({
        messsage: "Customer Package Details Success",
        result,
        qna: qnaResult
    })
})
exports.getAllCities = asyncHandler(async (req, res) => {
    const result = await City.find()
    return res.json({ messsage: "City Fetch Successfully", result })
})


// FETCH ALL ACTIVE CUSTOMER PACKAGES
// FETCH ALL ACTIVE CUSTOMER PACKAGES DETAILS (packageId)

// public route
// entry
//public Api
// store entry
// print on home page

