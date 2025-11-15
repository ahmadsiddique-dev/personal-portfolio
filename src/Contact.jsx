import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <center>
  <section className="w-full py-12 px-4">
    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-bold text-white bg-amber-500 inline-block px-6 py-3 rounded-lg shadow-lg">
        Have a Query?
      </h2>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-12 gap-6 mt-10 max-w-5xl mx-auto">
      {/* LEFT SIDE */}
      <div className="md:col-span-6 bg-amber-500 text-white flex flex-col justify-center p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Let’s Talk</h3>
        <p className="text-white/90 leading-relaxed">
          Feel free to reach out to us for any kind of questions, feedback,
          collaboration, or support. We typically respond within 24 hours.
        </p>

        {/* Extra design elements */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <p className="text-white/90">Quick Response</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <p className="text-white/90">Friendly Support</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <p className="text-white/90">Professional Guidance</p>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <form
        className="md:col-span-6 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* NAME */}
        <div className="flex flex-col text-start gap-1">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>

          <input
            id="name"
            className="px-3 neumorphic-input py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register("name", {
              required: { value: true, message: "Please Enter your Name." },
              maxLength: {
                value: 30,
                message: "Must be less than 30 characters.",
              },
            })}
          />

          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-start font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="email"
            className="neumorphic-input px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register("email", {
              required: { value: true, message: "Email is required." },
            })}
          />

          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* MESSAGE */}
        <div className="flex text-start flex-col gap-1">
          <label htmlFor="message" className="font-medium text-gray-700">
            Message
          </label>

          <textarea
            id="message"
            rows="4"
            className="px-3 rounded-sm! neumorphic-input py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register("message", {
              required: { value: true, message: "Message is required." },
            })}
          ></textarea> 

          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-2 bg-amber-500 text-white py-2 rounded-lg font-medium hover:bg-amber-600 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</center>

  );
};

export default Contact;
