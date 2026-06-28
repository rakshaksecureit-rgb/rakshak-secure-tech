"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Landmark,
  RadioTower,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type FormData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
  website: string; // Honeypot
};

const initialForm: FormData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  industry: "",
  message: "",
  website: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

const [error, setError] = useState("");


const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (loading) return;

  setError("");
setSuccess("");

  
if (!form.name.trim()) {
  setError("Please enter your full name.");
  return;
}

if (!form.email.trim()) {
  setError("Please enter your email address.");
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
  setError("Please enter a valid email address.");
  return;
}

if (!form.phone.trim()) {
  setError("Please enter your phone number.");
  return;
}

if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone)) {
  setError("Please enter a valid phone number.");
  return;
}

if (form.message.trim().length < 15) {
  setError("Please describe your project in a little more detail.");
  return;
}
  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to submit enquiry.");
    }

    setSuccess(
      "Your enquiry has been submitted successfully."
    );

    setForm(initialForm);
  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-35%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[90px] sm:left-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:left-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:left-0 lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

        <div className="absolute bottom-0 right-[-35%] h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] sm:right-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:right-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:right-0 lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >

            <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.28em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
              PROJECT ENQUIRY
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">

              Let's Discuss

              <span className="mt-1 block text-cyan-400">
                Your Requirements
              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Whether you are planning a Smart City,
              Surveillance Network, Command Center,
              Critical Infrastructure Project or Enterprise
              Security Deployment, our team is ready to help.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">

              {[
                {
                  icon: Landmark,
                  title: "Government Projects",
                },
                {
                  icon: Shield,
                  title: "Defense & Homeland Security",
                },
                {
                  icon: RadioTower,
                  title: "Critical Infrastructure",
                },
                {
                  icon: Building2,
                  title: "Enterprise Security",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20 sm:gap-4 sm:p-5"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-12 sm:w-12">

                      <Icon
                        size={22}
                        className="text-cyan-300"
                      />

                    </div>

                    <h3 className="text-sm font-medium leading-6 sm:text-base">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:p-8 lg:rounded-[36px]"
          >

            <form
  onSubmit={handleSubmit}
  className="space-y-5 sm:space-y-6"
>

              <div className="grid gap-5 md:grid-cols-2">

                <input 
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
    autoComplete="name"
  placeholder="Full Name"  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

                <input
  type="text"
  name="organization"
  value={form.organization}
  onChange={handleChange}
    autoComplete="organization"
  placeholder="Organization"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

              <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
   autoComplete="email"
  placeholder="Email Address"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

                <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={handleChange}
    autoComplete="tel"
  placeholder="Phone Number"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

              </div>

              <select
  name="industry"
  value={form.industry}
  onChange={handleChange}
  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
>
               <option value="">
  Select Industry
</option>
                <option value="Government">Government</option>
<option value="Defense">Defense</option>
<option value="Smart City">Smart City</option>
<option value="Infrastructure">Infrastructure</option>
<option value="Enterprise">Enterprise</option>

              </select>
<div className="hidden" aria-hidden="true">
  <input
    type="text"
    name="website"
    value={form.website}
    onChange={handleChange}
    tabIndex={-1}
    autoComplete="off"
  />
</div>

  <textarea
  rows={6}
  name="message"
  value={form.message}
  onChange={handleChange}
    autoComplete="off"
  placeholder="Tell us about your project requirements..."
  className="min-h-[170px] w-full resize-y rounded-2xl border border-white/10 bg-black/20 p-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:min-h-[190px] sm:p-5 sm:text-base"
/>

{error && (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300 backdrop-blur-xl"
  >
    <AlertCircle size={18} className="shrink-0" />
    <span>{error}</span>
  </motion.div>
)}

{success && (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 backdrop-blur-xl"
  >
    <CheckCircle2 size={18} className="shrink-0" />
    <span>{success}</span>
  </motion.div>
)}

<button
  type="submit"
  disabled={loading}
  aria-disabled={loading}
  aria-busy={loading}
  className={`group flex h-13 w-full items-center justify-center gap-3 rounded-2xl px-6 text-sm font-semibold transition-all duration-300 sm:h-14 sm:text-base ${
    loading
      ? "cursor-not-allowed bg-cyan-300 text-black opacity-80"
      : "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] active:scale-[0.99]"
  }`}
>
  {loading ? (
    <>
      <Loader2
        size={18}
        className="animate-spin"
      />
      Sending Secure Enquiry...
    </>
  ) : (
    <>
      Submit Enquiry
      <Send
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  )}
</button>
            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}