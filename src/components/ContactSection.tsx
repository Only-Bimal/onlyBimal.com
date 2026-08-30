import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate quick processing delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success("Thank you! Your message has been sent successfully.");
      
      // Fallback opens default email client in background if user prefers
      const mailtoUrl = `mailto:contact@onlybimal.com?subject=Contact%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Open mail client as fallback
      window.location.href = mailtoUrl;
    } catch {
      toast.error("Something went wrong. Please reach out directly to contact@onlybimal.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white content-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              I'm always open to discussing new projects, architecture consultations, or
              leadership opportunities. Feel free to reach out to me through any of the
              channels below.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:contact@onlybimal.com"
                aria-label="Send email to contact@onlybimal.com"
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1"
              >
                <div className="p-2 rounded-lg bg-brand-light mr-3 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">contact@onlybimal.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/onlybimal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bimal's LinkedIn profile"
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1"
              >
                <div className="p-2 rounded-lg bg-brand-light mr-3 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">linkedin.com/in/onlybimal</span>
              </a>
              <a
                href="https://github.com/only-bimal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bimal's GitHub profile"
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1"
              >
                <div className="p-2 rounded-lg bg-brand-light mr-3 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <span className="font-medium">github.com/only-bimal</span>
              </a>
            </div>
          </div>
          <div className="bg-brand-light rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  aria-required="true"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-gray-900"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-gray-900"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-brand-blue hover:bg-brand-navy text-white flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-navy"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
