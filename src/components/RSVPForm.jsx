import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import api from "../lib/api"



// ============================
// Zod schema for validation
// ============================
const RSVP_SCHEMA = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(50, "Email must be less than 50 characters")
    .optional()
    .or(z.literal("")), // allow empty string
  phone: z
    .string()
    .min(5, "Phone is required")
    .max(20, "Phone must be less than 20 digits"),
  attending: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Please select attendance" }),
  }),
  guests: z
    .number({ invalid_type_error: "Number of guests is required" })
    .min(1, "Must have at least 1 guest"),
});

export default function RSVPForm() {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RSVP_SCHEMA),
  });

  // ============================
  // Submit function
  // ============================
  const onSubmit = async (data) => {
    try {
      await api.post("/api/rsvp", {
        ...data,
        attending: data.attending === "yes",
      });

      setStatus({ type: "success", message: "RSVP submitted! 💖" });
      reset();

      // ✅ Auto-hide success message after 3 seconds
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Submission failed. Try again!" });

      // ✅ Auto-hide error message too
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="pt-10 md:pt-16 pb-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-serif text-blue-600 text-center mb-6">
        RSVP
      </h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-primary p-6 md:p-8 rounded-xl shadow-md space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <input
          {...register("name")}
          placeholder="Full Name *"
          className="input"
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}

        {/* Email (optional) */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email (optional)"
          className="input"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}

        {/* Phone */}
        <input {...register("phone")} placeholder="Phone *" className="input" />
        {errors.phone && (
          <p className="text-red-600 text-sm">{errors.phone.message}</p>
        )}

        {/* Attendance */}
        <select {...register("attending")} className="input">
          <option value="">Will you attend? *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.attending && (
          <p className="text-red-600 text-sm">{errors.attending.message}</p>
        )}

        {/* Number of Guests */}
        <input
          {...register("guests", { valueAsNumber: true })}
          type="number"
          min={1}
          placeholder="Number of Guests *"
          className="input"
        />
        {errors.guests && (
          <p className="text-red-600 text-sm">{errors.guests.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mx-auto block w-full bg-accent text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Submit RSVP
        </button>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-2 text-center font-medium ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.form>
    </section>
  );
}
