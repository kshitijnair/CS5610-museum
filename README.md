# CS5610 Project - Museum Website

### By Kshitij Nair and Navneet Ratnakirti:

#### Iteration 2:
We have created and deployed the front-end and back-end of the museum website. For the same, we have hosted two separate deployments for the client and server side, each on two web services online on Render.

The client-side page (front-end):
> https://museum-client.onrender.com/

The server-side page (back-end):
> https://museum-server-ae4u.onrender.com/

The first step is to run the server-side link of Render and wait for the page to load. After a few seconds it should say on the webpage “NodeJS server running...”. This would signify that the MongoDB server is up and running. Only then we should launch the client-side link hosted on Render.

In the current state of the deployment, we have a main branch and an auth0 branch. The main branch is what is currently deployed on the client-side on Render. The difference between the two branches is that in auth0 we have implemented the Login/Logout and Profile functionality and in the main we have all the CRUD operations for booking tickets. As the implementation for auth0 is required for the 3rd Iteration and user authentication is directly linked to the Profile page, we have chosen to let any anonymous user to Create, Read, Update and Delete the tickets they have booked. In the 3rd Iteration, user authentication would be merged with the ticket booking system.

Rest all functionalities has been implemented as follows

1. Home page: 
It has the Navigation bar which itself is on every other page. It shows the list of popular museum, and clicking on which would take them to the Details page where they can book the tickets

2. Log in/Register page:
User authentication has been implemented where you can Signin/Signup using the login button on the top-right. If a user directly clicks on the Profile tab before logging in, it will redirect to the Signin/Signup page of Auth0. (Please note, this functionality is only implemented on the auth0 branch on our GitHub repo and not on main)

3. Profile page:
This page allows the user to do Create(Book tickets for a particular museum), Read(See the list of booked tickets), Update(Change the ticket details like date/time) and Delete(Cancel any tickets they have booked) operations. Please note if you have booked any tickets, please REFRESH the Profile page to see the changes. Even after clicking the delete button, please refresh the page to see the changes.

4. Search/Search Results page:
This page is on the Museums tab on the navigation bar. It has a search bar, in which one can start typing the name of the museum and the museums matching the search team would be populated on the page. From that they can click on the museum they want to visit/book, which in turn would take them to the Details page.

5. Details page:
After clicking on any Museum, it will take you to this page. The user can view the searched museum from the Search page and can book tickets after entering the ticket information. This acts as a Museum Details or Ticket booking page for the website.


### Contributions:

Kshitij:
1. Created Navigation Components 
2. Created hooks for components to load and render data
3. Designed logical flow of the application

Navneet:
1. Added navigation tabs on the Home page to go to Search, Profile or Details page
2. Added user authentication from Auth0 to the website (auth0 branch)
3. Implemented the Login/Logout button along with its connection to the profile page


![image](https://user-images.githubusercontent.com/44190671/204997512-d78e1a18-7056-4c58-b9f3-98327a1d98b1.png)


The Search Page to find any museum. By default it has all the museums listed.



![image](https://user-images.githubusercontent.com/44190671/204997922-d437209d-94bf-4b13-aac3-25d87e5a45c2.png)

Ticket booking after clicking on the searched museum. Click on Purchase to confirm.


![image](https://user-images.githubusercontent.com/44190671/204998397-1eb57a2f-2735-40ce-9b6f-c629153567b3.png)

Multiple tickets booked by the user.

![image](https://user-images.githubusercontent.com/44190671/204998440-f1dff454-e29a-4d6e-a0bb-f55df1e450e9.png)

Ticket list of user after a ticket is deleted
