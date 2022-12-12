# CS5610 Project - Museum Website

### By Kshitij Nair and Navneet Ratnakirti:

#### Iteration 3:
We have created and deployed the front-end and back-end of the museum website. For the same, we have hosted two servers for client and server side, each on two web services online on Render.

The client-side page (front-end):
> https://museum-client-jh47.onrender.com/

The server-side page (back-end):
> https://museum-server-ae4u.onrender.com/

The Demo of the Website:
> https://www.youtube.com/watch?v=JJNMLeYJH2U

The first step is to run the server-side link of Render and wait for the page to load. After a few seconds it should say on the webpage “NodeJS server running...”. This would signify that the MongoDB server is up and running. Only then we should launch the client-side link hosted on Render.

The project website requirements have been implemented as follows:

#### Home Page:
1. It is the landing page of our web application. It is the first page users should see when they visit our website.
2. It is mapped to the root context ("/").
3. It displays dynamic content to users. This is seen as it shows the list of popular museums getting more number of bookings on the Home page.

#### Log in/Register page:
1. The login and register page allows users to create a new account with the website and then log in later on.
2. It forces login only when identity is required. This happens if clicked on My Profile page directly without logging in or if a ticket is purchased without logging in.
3. An anonymous user can browse for available museums where a ticket can be booked, for which the anonymous user then needs to sign up.

#### Profile page:
1. Users can see all the information about themselves and the tickets they have booked.
2. The logged in user can update their email ID registered with the website from here.
3. The logged in user can update or cancel the tickets booked with the website from this page.

#### Search/Search Results page:
1. This page can be found under the Museums tab on the Navigation bar.
2. When any character is entered, it dynamically searches the Museums Database and returns the matches, if any.

#### Details page:
1. The details page allows users to view a detailed view of the search result. They can see more information about the museum when they click on the search result.
2. The user is allowed to book multiple tickets, select dates and make a purchase.
3. If the user is not logged in while purchasing, then redirect to the login page.

#### External Web API requirements:
After the ticket is booked, you can click on the Get Directions button to navigate to the Museums location using the Google Maps API.

### Contributions:

Kshitij:
1. Linked Auth0 Login to MongoDB
2. Added CSS to all pages
3. Added external API to Google Maps
4. Created and cleaned all routes
5. Added Ticketing for individual users with Ticket Rendering 

Navneet:
1. Linked Auth0 implementation to the core functionality on the website
2. Fixed the double booking issue on React Dev environment
3. Deployed Production Build of client side on Render Static Site domain
4. Updated MongoDB database with additional documents



![image](https://user-images.githubusercontent.com/44190671/206837909-65cef62e-a71e-40ce-815d-3f4f4b1dc344.png)

The Home Page of the Museum Website



![image](https://user-images.githubusercontent.com/44190671/206837935-3ab45e7e-02ca-452d-8bf3-1a7d87a2633f.png)

The Search Page of the Museum Website


![image](https://user-images.githubusercontent.com/44190671/206837972-ed14f860-5d41-4bec-a724-d93203589bb7.png)

Login/Signup Page for the Museum Website


![image](https://user-images.githubusercontent.com/44190671/206838025-d9d5b335-b159-48ac-a214-338c5960f603.png)

Purchasing Tickets from Details Page


![image](https://user-images.githubusercontent.com/44190671/206838069-edf05eb4-4849-4eb6-9cbf-e140faf37beb.png)

Ticket added to the User Profile

![image](https://user-images.githubusercontent.com/44190671/206838098-818e27e9-cbf0-49f6-94d5-88b4c6d2a175.png)

Google Maps API when clicked on Get Directions button

