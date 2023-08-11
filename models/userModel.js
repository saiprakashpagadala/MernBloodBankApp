import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, "role is required"],
    enum: ["admin", "organisation", "user", "hospital"],
  },
  name: {
    type: String,
    required: function () {
      if (this.role === "admin" || this.role === "user") {
        return true;
      }
      return false;
    },
  },
  organisationName: {
    type: String,
    require: function () {
      if (this.role === "organisation") {
        return true;
      }
      return false;
    },
  },
  hospitalName: {
    type: String,
    require: function () {
      if (this.role === "hospital") {
        return true;
      }
      return false;
    },
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  website: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is Required"],
  },
},{timestamps:true});

export default mongoose.model("Users", userSchema)