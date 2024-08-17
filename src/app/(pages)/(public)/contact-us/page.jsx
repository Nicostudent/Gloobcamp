"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input";
import CustomButton from "@/components/CustomButton";
import { sendForm } from "@/services/ContactUsService";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/components/NotificationToast";

const ContactUs = () => {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSendForm = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await sendForm(values);

      if (response.success) {
        showNotificationSuccess("Message sent successfully");
        resetForm();
      }
    } catch (error) {
      showNotificationError("Unexpected error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: handleSendForm,
  });

  return (
    <section className="space-y-4 py-20">
      <div className="w-full">
        <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
          <div className="my-10 flex flex-col items-center justify-center px-10">
            <div className="w-full">
              <h4 className="mb-4 text-center text-base font-medium leading-6 text-primary lg:text-left">
                Contact Us
              </h4>
              <h2 className="font-manrope mb-3 text-center text-4xl font-semibold text-primary">
                Send Us A Message
              </h2>
              <p className="mb-6 text-center text-lg font-normal leading-7 text-tertiary dark:text-white">
                Want to connect? Send us a message!
              </p>
            </div>
            <div className="flex aspect-square w-52 flex-col items-center justify-center gap-5 rounded-full bg-primary lg:w-72">
              <Image src="/icon.svg" alt="Logo" width={100} height={100} />
              <h2 className="font-manrope text-center text-2xl font-semibold text-white lg:text-left">
                Gloobcamp
              </h2>
            </div>
          </div>
          <div className="mb-10 flex items-center lg:mb-0">
            <div className="w-full">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-600 dark:text-red-700">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="mt-8"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-600 dark:text-red-700">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <textarea
                    id="text"
                    name="message"
                    className="placeholder-text-400 mt-8 h-48 w-full resize-none rounded-xl border border-gray-200 px-4 py-4 text-lg font-normal leading-7 text-gray-600 shadow-sm focus:outline-none dark:bg-tertiary dark:text-white"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-600 dark:text-red-700">
                      {formik.errors.message}
                    </div>
                  )}
                </div>
                <CustomButton
                  className="mt-8 w-full justify-center"
                  purple
                  text="Submit"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
