"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface CheckoutProps {
  cart: any[];
  totalPrice: number;
  adjustedTotalPrice: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, totalPrice, adjustedTotalPrice }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cart);
    console.log(totalPrice);
    console.log(adjustedTotalPrice);

    alert("Order Placed Successfully");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={onChangeHandler}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={onChangeHandler}
          required
        />
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={onChangeHandler}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
