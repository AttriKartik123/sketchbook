// app/api/create-order/route.ts
import { NextResponse } from "next/server"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
})

export async function POST(req: Request) {
  const body = await req.json()

  const options = {
    amount: body.amount * 100, // Razorpay takes paise (₹100 = 10000)
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  }

  try {
    const order = await razorpay.orders.create(options)
    return NextResponse.json(order)
  } catch (err) {
    console.error("Razorpay order error:", err)
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 })
  }
}
