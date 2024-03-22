import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAxios } from "../hooks/use-axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import UserLogo from "../assets/user.png";

const DoctorPage = () => {
  const navigate = useNavigate();
  const { fetchData, loading } = useAxios();
  const [searchParams] = useSearchParams();

  const doctorId = searchParams.get("id");

  const [doctor, setDoctor] = useState({});

  const getDoctor = async () => {
    const { obj, error } = await fetchData(
      `/users/doctors/getDoctor/${doctorId}`
    );
    if (error) console.log(error);
    else {
      setDoctor(obj?.data);
    }
  };

  useEffect(() => {
    if (!doctorId) {
      return navigate("/search", { replace: true });
    }
    getDoctor();
  }, [doctorId]);

  if (loading) {
    return (
      <div className="h-scr grid place-items-center">
        <ClipLoader size={"2rem"} color="black" />
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-full" // Make image rounded
              src={doctor?.avatar || UserLogo}
              alt="Doctor"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
              {doctor.name}
            </div>
            <div className="mt-2 text-xl font-sans">
              {doctor?.workDetails?.qualification}
            </div>{" "}
            {/* Use a sans-serif font for body text */}
            <div className="mt-2 flex items-center">
              <span className="font-bold mr-2">
                <svg
                  className="h-5 w-5 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 10a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5a2 2 0 114 0v3.586l-1.293-1.293A1 1 0 0010 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{doctor.workDetails.workingTime}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className="font-bold mr-2">
                <svg
                  className="h-5 w-5 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5 2v11l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{doctor.workDetails.registrationId}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className="font-bold mr-2">
                <svg
                  className="h-5 w-5 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5 2v11l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>
                {doctor.workDetails.currentWorkPlace}, {doctor.city}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link
          to="/book-appointment"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" // Button with rounded corners
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorPage;
