# CS5610 Project - Museum Website

### By Kshitij Nair and Navneet Ratnakirti:

#### Iteration 1:
We have created and deployed the front-end and back-end of the museum website. For the same, we have hosted two servers for the client and server side, each on two web services online on Render.

The client-side page (front-end):
> https://museum-client.onrender.com/

The server-side page (back-end):
> https://museum-server-ae4u.onrender.com/

All the routes and links have been created and can be accessed by typing the below URLs in the address bar. The basis of CRUD operations has been established on the client-side page where you can do operations like getting the list of museums, searching, deleting and updating the user. For the creation and authentication of users, we would be using Auth0 by Okta.
On the opening page, we would have the museum list and the navigation controls for all the available routes. At this stage, all the soft connections are made and we would be implementing CRUD operations as required on the respective pages.


On the front end you can:
    1. Get the user at the top (implemented as the view for a single user for now to show reading, updating and deletion)
    2. Form for updating the user in the database
    3. View all Museums stored in the database

On the back end you can:
Here you can visit the 5 different pages (With APIs to create, read, update and delete items according to our needs)
    1. Home page: https://museum-server-ae4u.onrender.com/home
    2. Log in/Register page: https://museum-server-ae4u.onrender.com/login
    3. Profile page: https://museum-server-ae4u.onrender.com/profile
    4. Search/Search Results page: https://museum-server-ae4u.onrender.com/search
    5. Details page: https://museum-server-ae4u.onrender.com/details

### Contributions:

Kshitij:
    1. Implemented the client-side React Components
    2. Implemented CRUD operations on the front-end
    3. Connected front-end to back-end
    4. Implemented client-side deployment on Render
    5. Created all the async functions for CRUD operations in the back-end

Navneet:
    1. Created router for all 5 pages in the back-end
    2. Created the 3 collections on MongoDB(users, artifacts, museums) and checked for connection
    3. Implemented server-side deployment on Render
    4. Connected the server-side render deployment link to client-side
