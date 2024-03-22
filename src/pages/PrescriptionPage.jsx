export default function ReviewPage() {
  return (
    <>
      <h1 className="text-center mt-10 font-mono font-bold text-3xl text-blue-800">
        Prescription Details!
      </h1>
      <div className="mt-10  p-3 w-1/4 m-auto bg-sky-50 shadow-md rounded-md overflow-hidden justify-center items-center">
        <div className="p-6">
          <div className="flex flex-col mb-4">
            <div className="mt-1">
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
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="contactDoctor"
                className="block text-sm font-medium text-purple-900"
              >
                Email of Doctor / Phone Number / Details
              </label>
              <input
                type="email"
                name="contactDoctor"
                id="contactDoctor"
                rows="2"
                className="p-2 mt-1 mb-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="doctor's email here..."
              />
            </div>
            <div className="mt-2">
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
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              className="w-full px-3 py-8 border border-blue-200 rounded-md focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Medicine details and their timings..."
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
