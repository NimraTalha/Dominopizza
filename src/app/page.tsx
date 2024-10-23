"use client";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const [isDelivery, setIsDelivery] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleDeliveryClick = () => {
    setIsDelivery(true);
    setIsPickup(false);
  };

  const handlePickupClick = () => {
    setIsPickup(true);
    setIsDelivery(false);
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  return (
    <main className="p-4 md:p-8 bg-zinc-900">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
        <button
          className="w-full md:w-auto px-8 md:px-16 lg:px-48 py-4 md:py-7 bg-blue-500 text-white rounded-t-lg md:rounded-l-lg font-bold font-sans text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-0"
          onClick={handleDeliveryClick}
        >
          Delivery
        </button>

        <div className="relative flex justify-center items-center w-12 md:w-20 h-12 md:h-20 bg-white border-4 border-bg-white rounded-full">
          <span className="text-black font-bold text-lg md:text-2xl">OR</span>
        </div>

        <button
          className="w-full md:w-auto px-8 md:px-16 lg:px-48 py-4 md:py-7 bg-red-600 text-white rounded-b-lg md:rounded-r-lg font-bold font-sans text-2xl md:text-4xl lg:text-5xl"
          onClick={handlePickupClick}
        >
          Pickup
        </button>
      </div>

      {isDelivery && (
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Enter Delivery Location
          </h2>
          <input
            type="text"
            placeholder="Enter your location"
            className="mt-4 p-2 w-full border border-gray-300 rounded"
          />
        </div>
      )}

      {isPickup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-96">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Pickup Store</h2>

            <label className="block mb-2">Select your City:</label>
            <select className="w-full p-2 border border-gray-300 rounded mb-4">
              <option value="">Select City</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>

            <label className="block mb-2">Select your Pickup Store:</label>
            <select className="w-full p-2 border border-gray-300 rounded mb-4">
              <option value="">Select Store</option>
              <option value="store1">Store 1</option>
              <option value="store2">Store 2</option>
            </select>

            <label className="block mb-2">When do you want your order?</label>
            <div className="mb-4">
              <input type="radio" id="now" name="time" value="now" />
              <label htmlFor="now" className="ml-2">Pickup Now</label>
            </div>
            <div className="mb-4">
              <input type="radio" id="later" name="time" value="later" />
              <label htmlFor="later" className="ml-2">Pickup Later</label>
            </div>

            <button className="w-full py-2 bg-blue-500 text-white rounded mb-4">
              Start Order
            </button>

            <p className="text-center">
              Already a user? <a href="/login" className="text-blue-600">Login</a>
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 bg-gray-800 p-4 md:p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img
            src="/images/deals.jpg"
            alt="Image 1"
            className="w-full h-auto object-cover rounded"
          />
          <div className="flex flex-col">
            <img
              src="/images/deals2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover rounded mb-4"
            />
            <img
              src="/images/deal 3.webp"
              alt="Image 3"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        <button onClick={toggleTerms} className="text-white underline font-bold">
          {showTerms ? "Hide Terms and Conditions" : "View Terms and Conditions"}
        </button>

        {showTerms && (
          <div className="mt-4">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">
              Terms and Conditions
            </h3>

            <p className="mb-4 text-white">
              Please read the following Notices and Terms & Conditions carefully...
            </p>

            <ul className="list-disc list-inside mb-4 text-white">
              <li>All deals are valid on Classic Crusts only.</li>
              <li>No discount to be applicable on existing Deals & Drinks.</li>
              <li>All deals shown are applicable in your local area only.</li>
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
