import { Button } from "../ui/button";
import { useEffect, useState } from "react";
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

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: { padding: 20 },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  row: { flexDirection: "row" },
  title: {
    fontSize: "24px",
    textAlign: "center",
    textDecorationStyle: "solid",
    paddingBottom: "10px",
  },
  heading: {
    fontSize: "16px",
    textAlign: "center",
    textDecorationStyle: "solid",
    paddingBottom: "10px",
  },
  idCell: {
    width: "10%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    fontSize: 10,
  },
  moodCell: {
    width: "15%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    fontSize: 10,
  },
  createdCell: {
    width: "25%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    fontSize: 10,
  },
  noteCell: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    fontSize: 10,
  },
  header: {
    backgroundColor: "#eee",
    fontWeight: "bold",
  },
});

interface MoodEntry {
  mood: string;
  note?: string;
  createdAt: string;
}

const Export = () => {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [selectStartDate, setSelectStartDate] = useState<Date | undefined>(
    undefined,
  );
  const [selectEndDate, setSelectEndDate] = useState<Date | undefined>(
    undefined,
  );
  const [showPDF, setShowPDF] = useState(false);
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userEmail = getUserEmailFromToken();
      if (userEmail) {
        const res = await api.post("/entry/getuserentriesbydate/", {
          user: userEmail,
          startDate: selectStartDate,
          endDate: selectEndDate,
        });
        setMoodData(res.data.data);
        console.log(moodData);
      } else {
        alert("Not Authorized. Token missing.");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (moodData && moodData.length > 0 && moodData[0]?.mood) {
      setShowPDF(true);
    }
  }, [moodData]);

  const MyDocument = (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <Text style={styles.title}>LifeLog</Text>
        <Text style={styles.heading}>
          Mood Data
          {`(${selectStartDate?.toLocaleDateString(
            "IN",
          )} - ${selectEndDate?.toLocaleDateString("IN")})`}
        </Text>
        <View style={styles.table}>
          {/* TABLE HEADER */}
          <View style={styles.row}>
            <Text style={[styles.idCell, styles.header]}>Id</Text>
            <Text style={[styles.moodCell, styles.header]}>Mood</Text>
            <Text style={[styles.createdCell, styles.header]}>Created At</Text>
            <Text style={[styles.noteCell, styles.header]}>Note</Text>
          </View>

          {/* TABLE ROW */}
          {moodData.map((item, idx) => (
            <View key={idx} style={styles.row}>
              <Text style={styles.idCell}>{idx + 1}</Text>
              <Text style={styles.moodCell}>{item.mood}</Text>
              <Text style={styles.createdCell}>
                {item.createdAt?.split("T")[0]}
              </Text>
              <Text style={styles.noteCell}>{item.note}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

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

          <Button type="submit" className="mt-5 mb-4 cursor-pointer">
            Export
          </Button>
        </form>
      </div>
      {/* MOOD PREVIEW */}
      {showPDF && (
        <div className="flex flex-col justify-center items-center">
          <div className="hidden md:inline w-full lg:w-4/6 ">
            <PDFViewer className="w-full h-96">{MyDocument}</PDFViewer>
          </div>

          <Button className="my-10">
            <PDFDownloadLink document={MyDocument} fileName="data-table.pdf">
              {({ loading }) => (loading ? "Preparing PDF..." : "Download PDF")}
            </PDFDownloadLink>
          </Button>
        </div>
      )}
    </>
  );
};

export default Export;
