import React, { useEffect, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

import { getCalenderdataAPI } from "../Service/apiservice";

export default function Calender() {
  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    try {
      const res = await getCalenderdataAPI();

      console.log(res.data);

      setTrips(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTripForDate = (date) => {
    return trips.find((trip) =>
      dayjs(trip.traveldate).isSame(date, "day")
    );
  };

  const CustomDay = (props) => {
    const { day, ...other } = props;

    const trip = getTripForDate(day);

    return (
      <div
        style={{
          position: "relative",
          height: "75px",
          width: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Date */}
        <div
          {...other}
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",

            backgroundColor: trip ? "#1976d2" : "transparent",
            color: trip ? "white" : "inherit",

            fontWeight: trip ? "bold" : "normal",
            fontSize: "16px",
          }}
        >
          {dayjs(day).date()}
        </div>

        {/* Destination below date */}
        {trip && (
          <div
            style={{
              marginTop: "5px",
              fontSize: "13px",
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "center",
              maxWidth: "115px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            ✈️ {trip.destination}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "900px",
          maxWidth: "100%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          My Travel Calendar ✈️
        </h1>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            slots={{
              day: CustomDay,
            }}
            sx={{
              width: "100%",
              height: "650px",

              "& .MuiPickersCalendarHeader-root": {
                fontSize: "22px",
              },

              "& .MuiDayCalendar-header": {
                justifyContent: "space-around",
              },

              "& .MuiDayCalendar-weekContainer": {
                justifyContent: "space-around",
                marginBottom: "10px",
              },
            }}
          />
        </LocalizationProvider>
      </div>
<div
  style={{
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  }}
>
  {trips.map((trip) => (
    <div
      key={trip.id}
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid #eeeeee",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: "#1976d2",
        }}
      >
        🌍 {trip.destination}
      </h2>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "12px",
        }}
      >
        📅 Travel Date: {trip.traveldate}
      </p>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: 0,
        }}
      >
        📅 Return Date: {trip.returndate}
      </p>
    </div>
  ))}
</div>

    </div>
  );
}