- BUG #1: The users get route is supposed to return only the basic details of the user like first name, last name and username  but the code returns email and phone too.

- BUG #2: The get username route was not throwing the 404 error when user not found. 

- BUG #3: THe authUser middleware function was not verifying the jwt. 