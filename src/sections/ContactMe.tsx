"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast } from "sonner";
import { useTheme } from "next-themes";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const captchaRef = useRef<any>(null);
  const { theme, setTheme } = useTheme();

  const hCaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "";
  const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if CAPTCHA token is present
    if (!token) {
      setError("Please complete the CAPTCHA to proceed.");
      return;
    }

    toast.promise(
      (async () => {
        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const subject = `${name} sent you a message from Web3Forms`;
        formData.append("subject", subject);

        formData.append("access_key", web3FormsAccessKey);
        // Append the CAPTCHA token to the form data
        formData.append("h-captcha-response", token);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          if (formRef.current) {
            formRef.current.reset();
          }
          // Clear the CAPTCHA token after successful submission
          setToken("");
          if (captchaRef.current) {
            captchaRef.current.resetCaptcha();
          }
          return data; // Resolve the promise with the response data
        } else {
          throw new Error(data.message || "Form submission failed.");
        }
      })(),
      {
        loading: "Submitting form...",
        success: () => {
          return "Form submitted successfully! 🎉 We will reply to you soon!";
        },
        error: () => {
          return "An error occurred while submitting the form.";
        },
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-4"
        >
          <div className="bg-sky-400 size-2.5 rounded-full relative">
            <div className="bg-emerald-300 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <h4 className="text-2xl font-Ovo">Connect with me</h4>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Want to chat? Just shoot me a dm with a direct question using the form
        below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        ref={formRef}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto lg:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/10 dark:border-white/90"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/10 dark:border-white/90"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          rows={6}
          name="message"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/10 dark:border-white/90"
          required
        ></motion.textarea>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <HCaptcha
            sitekey={hCaptchaSiteKey}
            ref={captchaRef}
            theme={theme === "light" ? "light" : "dark"}
            reCaptchaCompat={false}
            onVerify={(token) => {
              setToken(token);
              setError("");
            }}
          />
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-6 w-max flex items-center justify between gap-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover/20"
        >
          Submit now
          <Send className="h-4 w-4" />
        </motion.button>

        {/* <p className="mt-4">{result}</p> */}
      </motion.form>
    </motion.div>
  );
};

export default ContactMe;
