import mongoose from 'mongoose'

const connectDB = async () => {
  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI no está configurada')
  mongoose.set('strictQuery', true)
  await mongoose.connect(uri)
  console.log('✅ MongoDB conectado')
}

export default connectDB
