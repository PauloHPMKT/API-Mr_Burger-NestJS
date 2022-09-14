import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  telephone: String,
  address: String,
  city: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
});
