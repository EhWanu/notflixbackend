const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		ProfilePic: { type: String, default: "" },
		isAdmin: { type: boolean, default: "false" },
	},
	{ timestamps: true }
);

module.export = mongoose.model(
	"User",
	UserSchema
);
