import { Document, View, Text, Page } from "@react-pdf/renderer";
import { Button } from "../ui/button";
import { useState } from "react";
import getUserEmailFromToken from "@/utils/userInfoToken";
import api from "@/config/axios";

const Export = () => {
  const [startDateVal, setStartDateVal] = useState(null);
  const [endDateVal, setEndDateVal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentriesbydate/", {
        user: userEmail,
        startDate: startDateVal,
        endDate: endDateVal,
      });
      const moodEntries = res.data.data;
      console.log(moodEntries);
    } catch (error) {}
  };
  return (
    <>
      <h2 className="text-3xl mb-4">Mood Summary</h2>
      <div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center justify-center">
            <label htmlFor="startdate">Start Date</label>
            <input
              type="date"
              name="startdate"
              id="startdate"
              onChange={(e) => setStartDateVal(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <label htmlFor="enddate">End Date</label>
            <input
              type="date"
              name="enddate"
              id="enddate"
              onChange={(e) => setEndDateVal(e.target.value)}
            />
          </div>
          <Button type="submit" className="my-4 cursor-pointer">
            Export
          </Button>
        </form>
      </div>
    </>
  );
};

export default Export;
