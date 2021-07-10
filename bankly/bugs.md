- BUG #1: The users get route is supposed to return only the basic details of the user like first name, last name and username  but the code returns email and phone too.

- BUG #2: The get username route was not throwing the 404 error when user not found. 

- BUG #3: THe authUser middleware function was not verifying the jwt. 


- BUG #4: In auth route there is no need to destructure the req object as it can be passed directly as req.body  */

- BUG #5:  In auth route passing the destructured variables as an object wouldnt work.
  
- BUG #6: "requireLogin" is missing in the users delete route 