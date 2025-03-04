"use client";
import React, { useEffect, useState } from 'react'
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";




const page = () => {

  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  );
  
  const [PayMethod, SetPayMethod] = useState("cod");
  

  const [formData, SetFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetFormData({ ...formData, [name]: value });
  };

  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(cart);
    console.log(totalPrice);
    console.log(adjustedTotalPrice);
    
    
    
    alert("Order Placed Successfully");
  };
  
        
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* adress details */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <>
            <div className='inline-flex items-center gap-2 mb-3'>
              <p className='text-gray-500'>DELIVERY<span className='text-gray-700 font-medium'>INFORMATION</span> </p>
              <p className='w-8 sm:w-12 h-[1px]  sm:h-[2px] bg-gray-700'></p>
            </div>
          </>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name="street"
          value={formData.street}
          onChange={onChangeHandler}
          required
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name="city"
            value={formData.city}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name="state"
            value={formData.state}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name="zipcode"
            value={formData.zipcode}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name="country"
            value={formData.country}
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          required
        />
      </div>

      {/* order summary */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <>
            <div className="w-full">
              
              <div className="text-2xl">
                <>
                  <div className='inline-flex items-center gap-2 mb-3'>
                    <p className='text-gray-500'>CART<span className='text-gray-700 font-medium'>TOTAL</span> </p>
                    <p className='w-8 sm:w-12 h-[1px]  sm:h-[2px] bg-gray-700'></p>
                  </div>
                </>
              </div>

              <div className="flex flex-col gap-2 mt-2 text-sm">
                  <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>${totalPrice}.00</p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                      <p>Shipping Fee</p>
                      <p>Free</p>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                      <p>Total</p>
                      <p>${adjustedTotalPrice}.00</p>
                      {/* <p>{currency} {GetCartAmount()===0 ? 0 : GetCartAmount() + delivery_fee }.00</p> */}
                  </div>
              </div>
            </div>
          </>
        </div>

        <div className="mt-12">
          <>
            <div className='inline-flex items-center gap-2 mb-3'>
              <p className='text-gray-500'>PAYMENT<span className='text-gray-700 font-medium'>METHOUD</span> </p>
              <p className='w-8 sm:w-12 h-[1px]  sm:h-[2px] bg-gray-700'></p>
            </div>
          </>
        </div>

        {/* payment methods */}
        <div className="flex gap-3 flex-col lg:flex-row">
          <div
            onClick={() => SetPayMethod("stripe")}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${PayMethod === "stripe" ? "bg-green-400" : ""}`}></p>
            <img
              className="h-5 mx-4"
              src="/images/stripe_logo.png"
              alt=""
            />
          </div>
          <div
            onClick={() => SetPayMethod("razorpay")}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${PayMethod === "razorpay" ? "bg-green-400" : ""}`}></p>
            <img
              className="h-5 mx-4"
              src="/images/razorpay_logo.png"
              alt=""
            />
          </div>
          <div
            onClick={() => SetPayMethod("cod")}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${PayMethod === "cod" ? "bg-green-400" : ""}`}></p>
            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
          </div>
        </div>

        <div className="w-full text-end mt-8">
          <button
            className="bg-black text-white px-16 py-3 text-sm"
            type="submit">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}

export default page
