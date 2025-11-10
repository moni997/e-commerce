import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/productModel.js'

dotenv.config()

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    await Product.deleteMany({})
    await Product.insertMany([
      {
        name: 'Classic T-Shirt',
        price: 19.99,
        description: 'Soft cotton tee in multiple colors.',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Running Shoes',
        price: 59.99,
        description: 'Lightweight and comfortable for daily runs.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Leather Backpack',
        price: 89.0,
        description: 'Durable backpack with multiple compartments.',
        image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop'
      }
    ])
    console.log('Seed data inserted')
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()
