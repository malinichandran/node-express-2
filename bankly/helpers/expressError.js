/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 *  Since we are using JSONSchema and will return an array of
 *  errors we want to make sure we display that properly
 *  The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    // if(process.env.NODE_ENV !== "test"){
    //   console.error(this.stack);
    // }
  }
}
  // class NotFoundError extends ExpressError {
  //   constructor(message = "Not Found") {
  //     super(message, 404);
  //   }
  // }


module.exports = {ExpressError};
