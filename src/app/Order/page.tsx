"use client";
import { useState } from "react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async () => {
    if (!orderId.trim()) {
      alert("Please enter a valid Order ID or Acknowledgment Number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Simulating API call
      const fakeOrderData = {
        id: "1234567890",
        status: "Shipped",
        expectedDelivery: "March 10, 2025",
        courier: "BlueDart",
        trackingLink: "https://bluedart.com/track/1234567890",
      };

      if (orderId === fakeOrderData.id) {
        setOrderStatus(fakeOrderData);
      } else {
        setOrderStatus("Order not found. Please check your Order ID.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Track Your Order</h1>
      <p className="text-gray-600 mb-4">Enter your Order ID or Acknowledgment Number to track the status of your order.</p>
      
      <div className="flex gap-4">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID / Acknowledgment Number"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleTrackOrder}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Track Order
        </button>
      </div>

      {loading && <p className="text-gray-600 mt-4">Fetching order details...</p>}
      {orderStatus && (
        <div className="mt-6 p-4 bg-gray-100 rounded border border-gray-300">
          {typeof orderStatus === "string" ? (
            <p className="text-red-600 font-semibold">{orderStatus}</p>
          ) : (
            <>
              <p><strong>Status:</strong> {orderStatus.status}</p>
              <p><strong>Expected Delivery:</strong> {orderStatus.expectedDelivery}</p>
              <p><strong>Courier:</strong> {orderStatus.courier}</p>
              <a
                href={orderStatus.trackingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Click here to track via {orderStatus.courier}
              </a>
            </>
          )}
        </div>
      )}

      {/* Documentation Section */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-800">How to Track Your Order?</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-2">
          <li>Find your Order ID or Acknowledgment Number in the confirmation email sent after purchase.</li>
          <li>Enter the Order ID in the input box above.</li>
          <li>Click on the "Track Order" button.</li>
          <li>If your order is found, you will see the status, estimated delivery date, and tracking link.</li>
          <li>For more details, you can track your package via the courier’s official website.</li>
        </ol>
      </section>
    </main>
  );
}
