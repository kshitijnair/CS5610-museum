const { MongoClient } = require('mongodb');

require('dotenv').config();

const uri = process.env.mongodb_uri;
const client = new MongoClient(uri);

module.exports = {
    connectToDB:
        async function () {
            try {
                await client.connect();
                console.log("connected to Museums DB")
            }
            catch (err) {
                console.log("Connection error", err)
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
                console.log(user);
                return user;
            } catch (err) {
                throw new Error("User doesn't exist!");
            }
        },
        addUserProfile: async function (user) {
            try {
                const result = await client.db("museums").collection("users").insertOne(user);
            } catch(err) {
                throw new Error("Couldn't add new user: ", err);
            }
        },
        editUser: async function (filter, user) {
            try {
                const options = { upsert: true };
                const updatedData = {
                    $set: user,
                };
                const result = await client.db("museums").collection("users").updateOne(filter, updatedData, options);
                console.log(user, filter);
                return result;
            } catch(err) {
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
                console.log(user[1]);
                return user[0];
            } catch (error) {
                throw new Error(error);
            }
        },
        removeUser: async function (filter) {
            try {
                const result = await client.db("museums").collection("users").deleteOne(filter);
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
                console.log(museums);
                return museums;
            } catch (error) {
                throw new Error(error);
            }
        }
        

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
}
