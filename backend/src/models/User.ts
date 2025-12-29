import { Schema, model } from "mongoose";

const documentSchema = new Schema({
  fileId: String,
  name: String,
  url: String,
});

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["GENERATOR", "CONSUMER", "VALIDATOR"],
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    // GENERATOR
    organizationName: String,
    registrationNumber: String,

    // CONSUMER
    companyName: String,
    taxId: String,
    securityAnswer: String,

    // VALIDATOR
    aadhaarNumber: String,
    phoneNumber: String,
    verificationCode: String,
    isDigiLockerVerified: Boolean,

    documents: [documentSchema], // <-- support multiple documents
  },
  { timestamps: true }
);

export default model("User", userSchema);
