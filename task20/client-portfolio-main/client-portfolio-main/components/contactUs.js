import React from "react";
import { useForm, useWatch } from "react-hook-form";

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          reset();
        } else {
          // do something
        }
      })
      .catch((error) => {
        alert("there was error in sending message ");

        console.log(error);
      });
  };

  return (
    <section className="py-16 " id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white mb-8 ">
          Contact
        </h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="hidden"
              value="58e5386a-0d43-451c-a6eb-4967b52d7879"
              {...register("access_key")}
            />
            <input
              type="hidden"
              value={`${userName} sent a message from TechnicsLab Site`}
              {...register("subject")}
            />

            <input
              type="hidden"
              value={`${userName}`}
              {...register("from_name")}
            />
            <input
              type="checkbox"
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
                className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
              {errors.name && (
                <div className="mt-1 text-sm text-red-400 invalid-feedback">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="you@company.com"
                className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Enter your Message",
                })}
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
                rows="6"
                style={{
                  resize: "none",
                }}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#912de9] text-white rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>

              {isSubmitSuccessful && (
                <div className="text-center">
                  <div className="text-center">Your Message has been sent</div>
                </div>
              )}
              {isSubmitting && (
                <div className="text-center">Your Message is being sent</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
