const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
	if (req.user.isAdmin) {
		const newList = new List(req.body);
		try {
			const savedList = await newList.save();
			res.status(201).json(savedList);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
});

//DELETE

router.delete(
	"/:id",
	verify,
	async (req, res) => {
		if (req.user.isAdmin) {
			try {
				await findByIdAndDelete.save(req.params.id);
				res
					.status(201)
					.json("The list has been deleted");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	}
);

//GET

module.exports = router;
