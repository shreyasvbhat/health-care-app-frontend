import React, { useState } from "react";

// Star Rating Component
const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <button
          key={star}
          className={`text-4xl ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          } focus:outline-none`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default function ReviewPage() {
  const [namePatient, setNamePatient] = useState("");
  const [nameDoctor, setNameDoctor] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <>
      <h1 className="text-center mt-16 font-mono font-bold text-3xl text-blue-800">
        Your Feedback Matters!
      </h1>
      <div className="mt-10  p-3 w-1/4 m-auto bg-sky-50 shadow-md rounded-md overflow-hidden justify-center items-center">
        <div className="p-6">
          <div className="flex flex-col mb-4">
            <div>
              <label
                htmlFor="namePatient"
                className="block text-sm font-medium text-purple-900"
              >
                Name of Patient
              </label>
              <input
                type="text"
                name="namePatient"
                id="namePatient"
                rows="2"
                className="p-2 mt-1 mb-3 focus:ring-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your name.."
                value={namePatient}
                onChange={(e) => setNamePatient(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nameDoctor"
              className="block text-sm font-medium text-purple-900"
            >
              Name of Doctor
            </label>
            <input
              type="text"
              name="nameDoctor"
              id="nameDoctor"
              rows="2"
              className="p-2 mt-1 mb-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter doctor's name..."
              value={nameDoctor}
              onChange={(e) => setNameDoctor(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-3">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-purple-900"
            >
              Share your experience in scaling:
            </label>
            <StarRating rating={rating} onChange={setRating} />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Add your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-purple-900 rounded-md focus:outline-none hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
