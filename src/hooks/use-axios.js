import { useState } from "react";
import axios from "../lib/axios";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    let error = "",
      obj = null;
    setLoading(true);
    try {
      const response = await axios.get(url);
      obj = response.data;
    } catch (e) {
      error = e.response.data.message || "Something went wrong!";
    } finally {
      setLoading(false);
    }
    return { error, obj };
  }

  async function mutateData(url, object) {
    let error = "",
      obj = null;
    setLoading(true);
    try {
      const response = await axios.post(url, object);
      console.log(response.data);
      obj = response.data;
    } catch (e) {
      error = e.response.data.message || "Something went wrong!";
    } finally {
      setLoading(false);
    }
    return { error, obj };
  }
  return { loading, fetchData, mutateData };
};
