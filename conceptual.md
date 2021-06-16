### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
      
      A JWT is a structured security token format used to encode JSON data. The main reason to use JWT is to exchange JSON data in a way that can be cryptographically verified.

- What is the signature portion of the JWT?  What does it do?

      The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. To create the signature, the Base64-encoded header and payload are taken, along with a secret, and signed with the algorithm specified in the header.

- If a JWT is intercepted, can the attacker see what's inside the payload?

       The attacker cannot see the payload without decoding the payload section.  A stolen JWT slightly less bad than a stolen username and password: timing. Because JWTs can be configured to automatically expire after a set amount of time (a minute, an hour, a day, whatever), attackers can only use your JWT to access the service until it expires.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

      The most common approach of authentication is to store the user in a session on the server. A session is a temporary file to make data accessible across pages on a website such as making sure the user can access a web resource. However, with JWT, we don’t need to manage sessions on the server anymore because the server only cares if the incoming request is valid, and comes from the right person.Here’s four steps showing how JWT works in practice without needing to use the sessions on the server.

      - User logs in with username and password
      - If credentials are correct, server creates a signed JWT which says who the user is.
      - User wants to access home page
      - Verify the JWT signature is valid, if true, grant access.    

     


- Compare and contrast unit, integration and end-to-end tests.

      End-to-end testing verifies that your software works correctly from the beginning to the end of a particular user flow. It replicates expected user behavior and various usage scenarios to ensure that your software works as whole. End-to-end testing uses a production equivalent environment and data to simulate real-world situations and may also involve the integrations your software has with external applications.

      A typical software project consists of multiple software units, usually coded by different developers. Integration testing combines those software units logically, and tests them as a group.Essentially, integration testing verifies whether or not the individual modules or services that make up your application work well together. The purpose of this level of testing is to expose defects in the interaction between these software modules when they are integrated.

      A unit test is a test written by the programmer to verify that a relatively small piece of code is doing what it is intended to do. They are narrow in scope, they should be easy to write and execute, and their effectiveness depends on what the programmer considers to be useful. The tests are intended for the use of the programmer, they are not directly useful to anybody else, though, if they do their job, testers and users downstream should benefit from seeing fewer bugs.




- What is a mock? What are some things you would mock?

      Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. When your implementation interacts with an object's properties, rather than its function or behavior, a mock can be used.

      You should mock an object when you have a dependency in a unit of code you are trying to test that needs to be "just so".
      For example, when you are trying to test some logic in your unit of code but you need to get something from another object and what is returned from this dependency might affect what you are trying to test - mock that object.
 

- What is continuous integration?

      Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. ... The version control system is also supplemented with other checks like automated code quality tests, syntax style review tools, and more.

- What is an environment variable and what are they used for?

      An environment variable is a dynamic "object" on a computer, containing an editable value, which may be used by one or more software programs in Windows. Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profile settings.


- What is TDD? What are some benefits and drawbacks?

  Test-Driven Development (TDD) is additionally called test-driven design. TDD may be a method of software development during which ASCII text file is tested over and once again (unit testing).

Test-driven development may be a balanced approach for the programming perfectly blended with tightly interwoven three activities: coding, testing (writing unit tests), and designing (refactoring)first goal of correcting specification instead of the validation first. In other words, TDD may be a smart approach to know and streamline the wants before writing the functional code within the line of Agile principles.

Advantages of TDD :

 - You only write code that’s needed 
- More modular design 
- Easier to maintain
- Easier to refactor 
- High test coverage 
- Tests document the code 
- Less debugging 
  
Disadvantages of TDD :
- No silver bullet 
- slow process 
- All the members of a team got to do it 
- Tests got to be maintained when requirements change 


What is the value of using JSONSchema for validation?

  JSON Schema has several purposes, one of which is JSON instance validation. This document specifies a vocabulary for JSON Schema to describe the meaning of JSON documents, provide hints for user interfaces working with JSON data, and to make assertions about what a valid document must look like.
    
- What are some ways to decide which code to test?
    
    Design test plans based on application requirements.
    Develop manual test cases and automated test scripts.
Execute functional tests to validate application requirements.
Execute load tests and tune application performance.



- What are some differences between Web Sockets and HTTP?

    WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. Where as, HTTP providing half-duplex communication. Information exchange mode of WebSocket is bidirectional. Means, server can push information to the client (which does not allow direct HTTP).

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  
  I prefer Flask over Express because of the ease of use. In Flask all code was written in a single app.py and was easy to manage whereas in express there are a lot of pieces to the code which is hard to manage. I am sure more practice would make Express more easier or easy as Flask to work with.