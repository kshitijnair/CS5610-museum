const { response } = require("express");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const uri = process.env.mongodb_uri;

const client = new MongoClient(uri);

module.exports = {
  connectToDB: async function () {
    try {
      await client.connect();
      console.log("connected to Museums DB");
    } catch (err) {
      console.log("Connection error", err);
    }
  },
  getProfile: async function (userID) {
    try {
      // works for ALL users
      const result = await client.db("museums").collection("users").find();
      // works for only ONE user
      // const result = await client.db("museums").collection("users").findOne(filter);
      const user = await result.toArray();
      console.log("----------------User----------------");
      // console.log(user);
      return user;
    } catch (err) {
      throw new Error("User doesn't exist!");
    }
  },
  addUserProfile: async function (user) {
    try {
      user._id = user.sub;
      delete user.sub;
      const result = await client
        .db("museums")
        .collection("users")
        .insertOne(user);
      console.log("added user with repsonse: ", response)
    } catch (err) {
      throw new Error("Couldn't add new user: ", err);
    }
  },
  editUser: async function (filter, user) {
    try {
      const options = { upsert: true };
      const updatedData = {
        $set: user,
      };
      const result = await client
        .db("museums")
        .collection("users")
        .updateOne(filter, updatedData, options);
      console.log(user, filter);
      console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
      console.log(result);
      return result;
    } catch (err) {
      throw new Error("Error updating user", err);
    }
  },
  getFirstUser: async function () {
    try {
      // works for ALL users
      const result = await client.db("museums").collection("users").find();
      // works for only ONE user
      // const result = await client.db("museums").collection("users").findOne(filter);
      const user = await result.toArray();
      console.log("----------------User----------------");
      // console.log(user[1]);
      return user[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  removeUser: async function (filter) {
    try {
      const result = await client
        .db("museums")
        .collection("users")
        .deleteOne(filter);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
  getAllMuseums: async function () {
    try {
      const result = await client.db("museums").collection("museums").find();
      const museums = await result.toArray();
      console.log("----------------Museums----------------");
      // console.log(museums);
      return museums;
    } catch (error) {
      throw new Error(error);
    }
  },

  // Museum Addition
  addMuseumProfile: async function (museum) {
    try {
      const result = await client
        .db("museums")
        .collection("museums")
        .insertOne(museum);
    } catch (err) {
      throw new Error("Couldn't add new Museum: ", err);
    }
  },

  editMuseum: async function (filter, museum) {
    try {
      const options = { upsert: true };
      const updatedData = {
        $set: museum,
      };
      const result = await client
        .db("museums")
        .collection("museums")
        .updateOne(filter, updatedData, options);
      console.log(user, filter);
      return result;
    } catch (err) {
      throw new Error("Error updating Museum", err);
    }
  },

  getFirstMuseum: async function (object) {
    try {
      //// works for ALL museums
      //// const result = await client.db("museums").collection("museums").find();
      // works for only ONE museum
      const result = await client
        .db("museums")
        .collection("museums")
        .find(object);
      // console.log(result);
      const museums = await result.toArray();
      console.log("----------------Museum----------------");
      // console.log(museums[0]);
      return museums[0];
    } catch (error) {
      throw new Error(error);
    }
  },

  removeMuseum: async function (filter) {
    try {
      const result = await client
        .db("museums")
        .collection("museums")
        .deleteOne(filter);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  //Artifacts Addition
  addArtifactProfile: async function (artifact) {
    try {
      const result = await client
        .db("museums")
        .collection("artifacts")
        .insertOne(artifact);
    } catch (err) {
      throw new Error("Couldn't add new artifact: ", err);
    }
  },

  editArtifact: async function (filter, artifact) {
    try {
      const options = { upsert: true };
      const updatedData = {
        $set: artifact,
      };
      const result = await client
        .db("museums")
        .collection("artifacts")
        .updateOne(filter, updatedData, options);
      console.log(user, filter);
      return result;
    } catch (err) {
      throw new Error("Error updating artifact", err);
    }
  },

  getFirstArtifact: async function () {
    try {
      // works for ALL artifacts
      const result = await client.db("museums").collection("artifacts").find();
      // works for only ONE artifact
      // const result = await client.db("artifacts").collection("artifacts").findOne(filter);
      const user = await result.toArray();
      console.log("----------------Artifact----------------");
      console.log(artifacts[1]);
      return artifacts[0];
    } catch (error) {
      throw new Error(error);
    }
  },

  removeArtifact: async function (filter) {
    try {
      const result = await client
        .db("museums")
        .collection("artifacts")
        .deleteOne(filter);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
  getTickets: async function () {
    try {
      // works for ALL users
      // const result = await client.db("museums").collection("users").find();
      // works for only ONE user
      const result = await client.db("museums").collection("tickets").find();
      const tickets = await result.toArray();
      console.log("----------------tickets----------------");
      // console.log(tickets[1]);
      return tickets;
    } catch (error) {
      throw new Error(error);
    }
  },
  getTicketsForUser: async function (userID) {
    try {
      const response = await client
        .db("museums")
        .collection("tickets")
        .find({ user : userID });
        // console.log('********************************************************')
        // console.log(userID)
      // console.log(response);
      const tickets = await response.toArray();
      return tickets;
    } catch (err) {
      throw new Error("Error - Couldn't find tickets: ", err);
    } 
  },
  purchaseTicket: async function (ticket) {
    try {
      const response = await client
        .db("museums")
        .collection("tickets")
        .insertOne(ticket);
      console.log(response);
    } catch (err) {
      throw new Error("Couldn't add new user: ", err);
    }
  },
  deleteTicket: async function (id) {
    try {
      console.log("deleting ->>>>>>>>", id);
      const response = await client
        .db("museums")
        .collection("tickets")
        .deleteOne({ id: id });
      console.log(response);
    } catch (err) {
      throw new Error("Couldn't delete ticket: ", err);
    }
  },
  updateTicket: async function (filter, ticket) {
    try {
      console.log("updating ->>>>>>>>", filter);
      delete ticket._id;
      const update = {
        $set: ticket,
      };

      console.log(ticket);

      const options = { upsert: false };
      const response = await client
        .db("museums")
        .collection("tickets")
        .updateOne(filter, update, options);
      console.log(response);
    } catch (err) {
      throw new Error("Couldn't update ticket: ", err);
    }
  },
  updateEmail: async function (filter, user) {
    try {
      console.log("updating ->>>>>>>>", filter);
      delete user._id;
      const update = {
        $set: user,
      };
      console.log(user);
      const options = { upsert: false };
      const response = await client
        .db("museums")
        .collection("users")
        .updateOne(filter, update, options);
      console.log(response);
    } catch (err) {
      throw new Error("Couldn't update user email: ", err);
    }
  },

  // addToDB: async function (task) {
  //     try {
  //         const result = await client.db("cs5610").collection("tasks").insertOne(task);
  //         console.log(result);
  //     }
  //     catch (err) {
  //         console.log("insert error", err)
  //     }
  // },
  // readAll: async function () {
  //     const cursor = await client.db("cs5610").collection("tasks").find();
  //     const data = await cursor.toArray();
  //     //    console.log(data);
  //     return data;
  // },
  // readOne: async function (filter) {
  //      const result = await client.db("cs5610").collection("tasks").findOne(filter);

  //     return result;
  // }
};
