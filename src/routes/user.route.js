const { Router } = require("express");
const { check } = require("express-validator");

const { index, store, show, update, destroy } = require("../controllers/user.controller");
const { roleIsValid, userEmailAlreadyExist, userExistById } = require("../helpers/db_validators");
const { fieldsValidator } = require("../middlewares/fields-validator.middleware");


//Routes
const router = Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", [
    check("firstname", "Firstname is required").not().isEmpty(),
    check("email", "Email is not a valid address").isEmail(),
    check("email").custom(userEmailAlreadyExist),
    check("password", "Password is required and needs to have more than 6 letters").isLength({ min: 6 }),
    check("role").custom(roleIsValid),
    fieldsValidator
], store);

router.put("/:id", [
    check("id", "ID not valid").isMongoId(),
    check("id").custom(userExistById),
    check("role").custom(roleIsValid),
    fieldsValidator
], update);

router.delete("/:id", [
    check("id", "ID not valid").isMongoId(),
    check("id").custom(userExistById),
    fieldsValidator
], destroy);


// router.get("/profile", (req, res) => {
//     res.unauthorized().json({
//         msg: 'unauthorized'
//     });
// });

module.exports = router;