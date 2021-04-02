const { request, response } = require("express");

const index =  (req = request, res = response) => {
    res.json({
        msg: 'get API Controller Index',
        query_params: req.query,
    });
}

const store = (req, res = response) => {
    res.json({
        msg: 'post API Controller create',
        body: req.body
    });
}

//Store

const show = (req, res = response) => {
    res.json({
        msg: 'get API Controller show'
    });
}

const update = (req, res = response) => {
    res.json({
        msg: 'put API Controller update',
        segment_param: req.params.id,
        body: req.body
    });
}

const destroy = (req, res = response) => {
    res.json({
        msg: 'delete API Controller destroy'
    });
}


store

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