"use client";
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setIsSent(true);
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="w-full max-w-3xl text-text-primary rounded-xl border border-border-clean bg-surface p-8 shadow-sm flex flex-col items-center justify-center text-center h-[380px] transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-accent-dim flex items-center justify-center text-accent-blue text-lg mb-4 font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Message sent</h3>
        <p className="text-sm text-text-secondary max-w-xs sm:max-w-sm">
          Thank you for reaching out! I've received your message and will get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setIsSent(false)} 
          className="mt-6 text-xs font-mono font-bold text-accent-blue hover:underline"
        >
          Send another message &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl text-text-primary rounded-xl border border-border-clean bg-surface p-6 shadow-sm">
      <p className="text-sm text-text-secondary mb-6 leading-relaxed">
        {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
      </p>
      <form onSubmit={handleSendMail} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wider">Your Name</label>
          <input
            className="bg-transparent w-full border-b border-border-clean focus:border-accent-blue ring-0 outline-0 transition-all duration-300 py-2 text-text-primary px-0 rounded-none text-sm"
            type="text"
            maxLength="100"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wider">Your Email</label>
          <input
            className="bg-transparent w-full border-b border-border-clean focus:border-accent-blue ring-0 outline-0 transition-all duration-300 py-2 text-text-primary px-0 rounded-none text-sm"
            type="email"
            maxLength="100"
            required={true}
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
          />
          {error.email && <p className="text-xs text-red-500 font-mono mt-1">Please provide a valid email!</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wider">Your Message</label>
          <textarea
            className="bg-transparent w-full border-b border-border-clean focus:border-accent-blue ring-0 outline-0 transition-all duration-300 py-2 text-text-primary px-0 rounded-none text-sm resize-none"
            maxLength="500"
            name="message"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows="4"
            value={userInput.message}
          />
        </div>

        <div className="flex flex-col items-start gap-4 mt-2">
          {error.required && (
            <p className="text-xs text-red-500 font-mono">
              * All fields are required!
            </p>
          )}
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-accent-blue hover:bg-accent-blue/90 px-6 py-2.5 text-center text-xs md:text-sm font-semibold tracking-wide text-white transition-all transform active:scale-95 duration-200 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Sending...</span>
            ) : (
              <span className="flex items-center gap-1.5">
                Send Message
                <TbMailForward size={16} />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;