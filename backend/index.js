const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

const { MongoClient, ObjectId } = require("mongodb");
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

app.get("/account/:pageNumber/:limit", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("account");

    const pageNumber = parseInt(req.params.pageNumber) || 0;
    const limit = parseInt(req.params.limit) || 10;
    let skipItem = (pageNumber - 1) * limit;

    const result = await collection.find({}).skip(skipItem).limit(limit).toArray();
    // console.log(result.length)
    const count = await collection.countDocuments({})
    // console.log(count);
    res.send({
        totalcount: count,
        Accounts: result
    })
})

app.post("/search", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("account");

    try {
        const query = req.body.search;
        // console.log(query);
        const results = await collection.find({ $text: { $search: query } }).toArray();

        let response = {
            msg: `Search Data ${query} fetched`,
            response: {
                Result: results
            }
        }
        return res.status(200).json(response)
    }
    catch (err) {
        console.log(err);
    }
})

app.post("/inbound/create_inbound/:name", async (req, res) => {
    try {
        const db = client.db("inboundDiD");
        const collection = db.collection("inbound");
        const { name } = req.params;
        const { phoneNumber, eventUrl, dialer } = req.body;
        console.log(req.body)
        const phoneNumbersArr = phoneNumber.split(',');
        const records = phoneNumbersArr.map(phoneNumber => ({
            phoneNumber: phoneNumber.trim(),
            name,
            eventUrl,
            dialer
        }));

        const add_inbound = await collection.insertMany(records);
        console.log(add_inbound)
        let response = {
            msg: 'Inbound DID created',
            response: {
                Result: add_inbound
            }
        };
        return res.status(200).json(response);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred' });
    }
});
app.get("/inbound/get_inbound/:name/:pageNumber/:limit", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("inbound");
    try {
        const pageNumber = parseInt(req.params.pageNumber) || 0;
        const limit = parseInt(req.params.limit) || 10;
        let skipItem = (pageNumber - 1) * limit;
        const { name } = req.params;
        const countResult= await collection.find({name}).toArray()
        const count=countResult.length
        console.log(count)
        const get_inbound = await collection.find({name}).skip(skipItem).limit(limit).toArray()
       
        let response = {
            msg: 'data fetch successfully',
            response: {
                totalcount: count,
                Inbound: get_inbound
            }
        }
        return res.status(200).json(response)
    } catch (err) {
        console.log(err);
    }
})

app.post("/search_inbound", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("inbound");

    try {
        console.log(req.body.phoneNumber)
        const phoneNumber=req.body.phoneNumber;
        // console.log(query);
        const results = await collection.find({ phoneNumber}).toArray();


        let response = {
            msg: `Search Data fetched`,
            response: {
                Result: results
            }
        }
        return res.status(200).json(response)
    }
    catch (err) {
        console.log(err);
    }
})

app.post("/inbound/delete_inbound/", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("inbound");
    try {
        const { id } = req.body;
        console.log(id);
        const delete_inbound = await collection.deleteOne({ _id: new ObjectId(id) })
        console.log(delete_inbound)
        let response = {
            msg: "Data deleted!!",
            response: {
                inbound_del: delete_inbound
            }
        }
        return res.status(200).json(response)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'An error occurred' });
    }
})


app.post("/inbound/update_inbound/:name", async (req, res) => {
    await client.connect();
    const db = client.db("inboundDiD");
    const collection = db.collection("inbound");
    try {
        const { name } = req.params;
        const { id, phoneNumber} = req.body;
        console.log(req.body)
        const update_inbound = await collection.updateOne({ _id: new ObjectId(id) },
            {
                $set: {
                    name,
                    phoneNumber,
                }
            })
        let response = {
            msg: "Data updated Successfully",
            response: {
                inbound_update: update_inbound
            }
        }
        return res.status(200).json(response)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'An error occurred' })
    }

})


app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})





