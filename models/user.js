import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  discord_id: {
    type: String,
    default: null,
    unique: true,
  },

  isDiscordLinked: {
    type: Boolean,
    default: false,
  },

  isSlackLinked: {
    type: Boolean,
    default: false,
  },

  slack_id: {
    type: String,
    default: null,
    unique: true,
  },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
