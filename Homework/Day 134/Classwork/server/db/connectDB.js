import mongoose, { connect } from 'mongoose'
export default async.function connectDB() {
  try {
    const conn = await connect(process.env.MONGO_URI)
    console.log("ravici")
  } catch (error) {
    console.log("kg vashli")
  }
  
}