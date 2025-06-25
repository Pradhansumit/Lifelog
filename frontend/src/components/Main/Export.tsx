import { Button } from "../ui/button";
import { useState } from "react";
import getUserEmailFromToken from "@/utils/userInfoToken";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import api from "@/config/axios";

const Export = () => {
  const [endDateVal, setEndDateVal] = useState(null);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [selectStartDate, setSelectStartDate] = useState<Date | undefined>(
    undefined,
  );
  const [selectEndDate, setSelectEndDate] = useState<Date | undefined>(
    undefined,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentriesbydate/", {
        user: userEmail,
        startDate: selectStartDate,
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
        <form
          className="flex flex-col items-center p-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-3">
            {/* Start Date */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="date" className="px-1">
                Start Date
              </Label>
              <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {selectStartDate
                      ? selectStartDate.toLocaleDateString("IN")
                      : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={selectStartDate}
                    captionLayout="dropdown"
                    onSelect={(selectStartDate) => {
                      setSelectStartDate(selectStartDate);
                      setStartDateOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="date" className="px-1">
                End Date
              </Label>
              <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {selectEndDate
                      ? selectEndDate.toLocaleDateString("IN")
                      : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={selectEndDate}
                    captionLayout="dropdown"
                    onSelect={(selectEndDate) => {
                      setSelectEndDate(selectEndDate);
                      setEndDateOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
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
