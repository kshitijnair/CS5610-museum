# CS5610 Project Proposal

#### By Kshitij Nair and Navneet Ratnakirti:

##### Introduction
With the age of digitization, there have been major developments in how art is not only created but also distributed. For example, with NFTs gaining popularity, it’s now easier than ever for anyone to create and show their art. Museums that have housed artifacts ranging from coins and papyrus to oil paintings and sculptures, now hold digital exhibitions using displays and holograms. The research being done in this field suggests that artifacts at museums could soon be digitized as 3D models in different formats  and distributed amongst other museums. 
We propose a web-based application that accommodates this new form for sharing and displaying artifacts or digital art. For development purposes, we shall be limiting our websites to the curation of such collections by the admin and searching and ticket purchasing by the user. Additional features will also be added throughout the development phases.  


##### Target Audience

It will cater to 2 types of users- the curators (museum stakeholders) and visitors. The curators will be able to maintain, create and change the museum’s online exhibition. The visitors will be able to login, make bookings and view exhibitions. 

Curator Pain Points:
1. Request artifacts from other museums
2. Have single artifacts at multiple exhibitions 

Visitor Pain Points:
1. Searching for available artifacts
2. Easy delivery of tickets


##### Database Requirements
Your application should include at least 3 collections in the database.
Our application will contain 3 or 4 collections in MongoDB- 
1. User Database: Containing the login information of all the users including their usernames, hashed passwords and user type (admin or visitor) and ticket information if they have any.
2. Museums: Containing the name of the museum, location, rooms and occupied/available spaces.
3. Artifacts: Containing the name, description and other information important for the Artifact.
4. Rooms (Considering): Information about each room, the museum it is situated in, artifacts that it holds, etc. This could either be included in the Museums Collection or be linked with unique Museum codes in that collection.


##### Competitor Research:
Digital Museum Softwares are mostly non-public and not advertised so market research based on our capabilities is limited. So, our major focus with this project will be towards creating a Digital Asset Management tool that also serves as an information access-point for the common user, only adding certain administrative features for selected individuals.

Seattle NFT Museum’s website offers a blogpost for the users, but doesnt have a list of all the collections that they offer. Also not included is Artist information, which is something that we plan to add to our website.

Unit London is another digital-exclusive museum in London that focuses on digital forms of art though they only cater to a single museum. Our focus will be to develop a web application that can be used by multiple museums. 


![alt text](https://github.com/kshitijnair/CS5610-museum/blob/main/figma_design.jpg?raw=true)