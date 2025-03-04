import React, { useState } from "react";

const HelpCenter = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issues = {
    "Help with your issues": "If you're facing any issues, please contact our support team for assistance.",
    "Help with your order": "Track your order, modify delivery details, or cancel an order.",
    "Help with other issues": "For any other queries, visit our FAQ section or reach out to customer service."
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 bg-white border-r">
        <h2 className="text-lg font-semibold mb-4">TYPE OF ISSUE</h2>
        <ul className="space-y-2 text-gray-700">
          {Object.keys(issues).map((issue, index) => (
            <li
              key={index}
              className={`cursor-pointer hover:text-blue-500 ${selectedIssue === issue ? "text-blue-700 font-bold" : ""}`}
              onClick={() => setSelectedIssue(issue)}
            >
              {issue}
            </li>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Which item are you facing an issue with?</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          {["Apricote.webp", "header-homepageOne.png", "DFH190_0.jpg"].map((img, i) => (
            <div key={i} className="flex items-center space-x-4 border-b pb-4 mb-4 last:border-b-0">
              <img src={`/images/${img}`} alt={img} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{i === 0 ? "Combo dry fruits and mix liquid" : i === 1 ? "Mixture of whole dry fruits" : "Almonds use first then believe"}</p>
                <p className={i === 0 ? "text-yellow-500" : i === 1 ? "text-green-500" : "text-red-500"}>● {i === 0 ? "Returned" : i === 1 ? "Delivered on Apr 12, 2023" : "Cancelled"}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">What issue are you facing?</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          {[
            "Manage my order", "Returns & refunds", "Order delayed", "Damaged/defective product", 
            "Wrong product received", "Payment issues", "Gift card help", "Flipkart Pay Later help",
            "Change delivery address", "Deactivate account", "Coupon/promo code issue", "Order stuck in transit",
            "Seller-related issues", "EMI payment issues", "Bulk orders help"
          ].map((issue, i) => (
            <div key={i} className="mb-4">
              <p className="text-gray-700 font-medium">{i + 1}. {issue}</p>
              <p className="text-gray-500 text-sm">{`Get help with ${issue.toLowerCase()}.`}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
