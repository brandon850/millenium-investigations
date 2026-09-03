import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Information Services",
  "Process Service",
  "Surveillance",
  "Field Investigation",
  "Multiple Services",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Contact Us"
        description="Get in touch for a free consultation. We're here to discuss your investigation needs."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-slate-100 text-red-600 text-xs font-semibold mb-4 uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">
                Let's Talk About Your Project
              </h2>
              <p className="text-slate-600 mb-8">
                Contact us today for a free consultation. We'll discuss your
                needs and provide a detailed estimate for your investigation
                requirements.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">
                    Call Us
                  </h3>
                  <a
                    href="tel:7704897017"
                    className="text-2xl text-slate-700 hover:text-amber-600 transition-colors font-semibold"
                  >
                    +1 (770) 489-7017
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">
                    Email Us
                  </h3>
                  <a
                    href="mailto:INFO@MILLENNIUMINV.COM"
                    className="text-lg text-slate-700 hover:text-amber-600 transition-colors"
                  >
                    INFO@MILLENNIUMINV.COM
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">
                    Our Office
                  </h3>
                  <p className="text-slate-600">
                    P.O. Box 5787
                    <br />
                    Douglasville, GA 30154-0014
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for contacting us. We'll respond to your inquiry
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    Send Us A Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        value={formData.firstName}
                        onChange={(e) =>
                          handleChange("firstName", e.target.value)
                        }
                        required
                        placeholder="First Name"
                        className="bg-white border-slate-300"
                      />
                      <Input
                        value={formData.lastName}
                        onChange={(e) =>
                          handleChange("lastName", e.target.value)
                        }
                        required
                        placeholder="Last Name"
                        className="bg-white border-slate-300"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="Email"
                        className="bg-white border-slate-300"
                      />
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-white border-slate-300">
                          <SelectValue placeholder="Choose Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Message"
                      className="bg-white border-slate-300 min-h-[180px]"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-6 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md uppercase tracking-wide text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send"
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
