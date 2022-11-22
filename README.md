# Lab 8 - Starter
Hariz Megat Zariman

1. Within a Github action that runs whenever code is pushed. This is because Github actions would run automated tests and display success/error messages so that everytime we try to push code into our repo then we would be testing these new changes. By doing this, it would ensure quality while notifying the developer if the code was invalid.
   
2. No. By definition of E2E testing, we are looking to test our program on user bheavior and not necessarily the output of a function.

3. No. In this case, we are more concerned with the user being able to see their messages and interact with each other on a messaging application and thus are considering user behavior. For this reason, it is more appropriate to use E2E testing.

4. Yes. This is because the max length feature can be viewed more as a constraint (i.e something that the user should not be able to exceed) and can be tested as an output of a function. Furthermore, this feature appears more as an isolated event that is not heaviliy reliant on other features and is thus easier to test in smaller cases hence unit tests.