
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    reference: { type: String },
    products: [
      {
        name: { type: String },
        price: { type: String },
        quantity: { type: String },
        image: { type: String },
      },
    ],
    total: { type: Number, required: true },
    delivery_status: { type: String, default: 'pending' },
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
