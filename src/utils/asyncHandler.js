// PROMISES METHOD FOR WRAPPER FUNCTIONS FOR DB CONNECTIVITY
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}






// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// // const asyncHandler = (func) => {() => {}}


    // TRY-CATCH METHOD FOR WRAPPER FUNCTIONS FOR DB CONNECTIVITY
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }