- BUG #1: The users get route is supposed to return only the basic details of the user like first name, last name and username  but the code returns email and phone too.

- BUG #2: The login route should await User.authenticate

- BUG #3: THe authUser middleware function was not verifying the jwt. 


- BUG #4: the user or admin should be able to patch so || should be used instead of &&

- BUG #5:  Username, admin fields should also be removed so the user cannot change it 
  
- BUG #6:  the delete route should return the success status message