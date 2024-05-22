// export const errorHandler = (statusCode, message) =>{
//   const error = new Error()
//   error.statusCode = statusCode;
//   error.message = message;
//   return error
// }

export const errorHandler = (err, req, res, next) => {
  console.log("Server Error!");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};
