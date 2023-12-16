import React, { useState } from "react";


function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (formData) => {
    const waNumber = "+917219401352"; // Replace with your WhatsApp number, prefixed with country code
    const message = `Appointment Request:\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nReason: ${formData.reason}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp(formData);
  };

  return (
    <div id="contact" className="w-full bg-[#ebfacb] h-auto mt-10 p-10">
      <h2 className="text-center pt-10">Appointment</h2>
      <h1 className="text-4xl font-bold text-center">
        ASK FOR APPOINTMENT EASILY
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto border-2 mt-10 border-black rounded-lg"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Your Full Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>

        {/* Date Of Appointment Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Date Of Appointment
          </label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // Custom date picker style
          />
        </div>

        {/* Time Of Appointment Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Time Of Appointment
          </label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={formData.time}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // Custom time picker style
          />
        </div>

        {/* Reason Of Appointment Field */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Reason Of Appointment
          </label>
          <input
            type="text"
            name="reason"
            onChange={handleChange}
            value={formData.reason}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Reason for your appointment"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
