const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true, unique: true },
		password: { type: String, required: true },
		role: { type: Number, default: 0 },
		cart: { type: Array, default: [] },
	},
	{ timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
