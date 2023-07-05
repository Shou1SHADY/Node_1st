var queries = require('../DB/query');
var dbConnection = require('../DB/connection');
var util = require('../Util/utility');
exports.getStoreList = async (req, res) => {

    try {
        var storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.query(storeListQuery);
        return res.status(200).send(JSON.stringify(result));
        //result.rows
    }

    catch (e) {
        console.log("ERROR  " + e);
        return res.status(500).send({ error: 'Fialed to list store' });
    }



}



exports.saveStoreQuery = async (req, res) => {



    try {

        var createdBy = "Admin";
        var createOn = new Date();

        var storeName = req.body.storeName;
        var address = req.body.address;
        console.log("name " + storeName + "address " + address);
        if (!storeName || !address) {
            //lazm tktb return
            return res.status(500).send({ error: ' store name and Addess mandatory' });
        }
        let storeCode = util.generateStoreCode();
        values = [storeName, storeCode, createOn, createdBy, address]; // nafs tartib el query 
        var saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
        await dbConnection.query(saveStoreQuery, values);
        //  console.log("SLOW DOWN");
        return res.status(201).send("Successs note save");

    } catch (error) {

    }



}
