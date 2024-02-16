function isEmpty(obj) {
  return (Object.keys(obj).length > 0) ? false : true
}

// function isEmpty(obj) {
//   for (const key in obj) {
//     return (Object.hasOwn(obj, key)) ? false : true
//   }
// }