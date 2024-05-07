// export const errorHandler = (err) => {
//     console.log(err.message, err.code);

//     let error = { email: ", password:" };

//     //validation error
//     if (err.message.includes("userModels validation failed")) {
//       console.log(
//         Object.values(err.errors).forEach(({ properties }) => {
//           error[properties.path] = properties.message;
//         })
//       );
//     }
//     return error;
//   };

// export const errorHandler = (statusCode, message) =>{
//   const error = new Error()
//   error.statusCode = statusCode;
//   error.message = message;
//   return error
// }

export const errorHandler = (err, req, res, next) => {
  console.log("Middleware error handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};
