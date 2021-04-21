const { request, response } = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const index = async (req = request, res = response) => {
    const { limit = "5", from = "0" } = req.query;
    const query = { state: true };

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query).skip(Number(from)).limit(Number(limit))
    ]);

    res.json({
        msg: 'get API Controller Index',
        total, users
    });
}

const store = async (req, res = response) => {
    try {

        const { firstname, email, password, role } = req.body;
        const user = new User({ firstname, email, password, role });

        //Encript the password
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        //Save to DB
        await user.save();
        res.json({
            msg: 'post API Controller create',
            user
        });
    } catch (err) {
        res.status(400).json({
            msg: 'post API Controller create fails',
            err
        });
    }
}

const show = (req, res = response) => {
    res.json({
        msg: 'get API Controller show'
    });
}

const update = async (req, res = response) => {
    try {

        const { id } = req.params;

        const { _id, password, google, email, ...data } = req.body;

        //Encript the password
        if (password) {
            const salt = bcryptjs.genSaltSync();
            data.password = bcryptjs.hashSync(password, salt);
        }

        const user = await User.findByIdAndUpdate(id, data);

        res.json({
            msg: 'put API Controller update',
            segment_param: req.params.id,
            body: req.body,
            user: user
        });
    } catch (err) {
        console.log("err", err)
        res.status(400).json({
            msg: 'PUT API Controller update fails',
            err: err
        });
    }
}

const destroy = async (req, res = response) => {

    const { id } = req.params;

    //Remove resource from DB - One Way
    //const user = await User.findByIdAndDelete(id);

    //Change status of resource to false- Second Way
    await User.findByIdAndUpdate(id, {state: false});

    res.status(204).json({
        msg: `resource ${id} removed successfully`
    });
}

/*
GET	/sharks	index	sharks.index
GET	/sharks/create	create	sharks.create
POST	/sharks	store	sharks.store
GET	/sharks/{id}	show	sharks.show
GET	/sharks/{id}/edit	edit	sharks.edit
PUT/PATCH	/sharks/{id}	update	sharks.update
DELETE	/sharks/{id}	destroy	sharks.destroy
*/

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}