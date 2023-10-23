import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4623xw9",
        "Slid",
        form.current,
        "QK2ZD8NX_fm1fxfUV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      id="Contact"
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-8 shadow-md rounded-lg max-w-md mx-auto mt-10"
    >
      <div className="mb-4">
        <label
          htmlFor="user_name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="user_email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="mt-1 p-2 w-full border rounded-md h-32"
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send"
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
      />
    </form>
  );
}
