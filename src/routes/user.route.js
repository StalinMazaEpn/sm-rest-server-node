const { Router } = require("express");
const router = Router();

const { index, store, show, update, destroy } = require("../controllers/user.controller");

router.get("/", index);

router.get("/:id", show);

router.post("/", store);

router.put("/:id", update);

router.delete("/:id", destroy);


// router.get("/profile", (req, res) => {
//     res.unauthorized().json({
//         msg: 'unauthorized'
//     });
// });

module.exports = router;