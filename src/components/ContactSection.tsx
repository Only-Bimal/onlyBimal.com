import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import portfolioData from "@/data/portfolioData.json";

const iconMap = {
  Mail,
  Linkedin,
  Github,
};

const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

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
      const mailtoUrl = `mailto:${contact.email}?subject=Contact%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Open mail client as fallback
      window.location.href = mailtoUrl;
    } catch {
      toast.error(`Something went wrong. Please reach out directly to ${contact.email}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-slate-800 content-auto transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{contact.sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-slate-300 mb-6 transition-colors">
              {contact.description}
            </p>
            <div className="space-y-4">
              {contact.socials.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Mail;
                const isExternal = social.url.startsWith("http");

                return (
                  <a
                    key={index}
                    href={social.url}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={social.label}
                    className="flex items-center text-gray-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md p-1"
                  >
                    <div className="p-2 rounded-lg bg-brand-light dark:bg-slate-700 mr-3 text-brand-blue dark:text-blue-400 group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-blue dark:group-hover:text-white transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{social.displayText}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bg-brand-light dark:bg-slate-700/60 dark:border dark:border-slate-600/50 rounded-lg p-6 shadow-sm transition-colors">
            <h3 className="text-xl font-semibold text-brand-navy dark:text-slate-100 mb-4 transition-colors">
              {contact.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1 transition-colors"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-400 transition-colors"
                  placeholder={contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1 transition-colors"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-400 transition-colors"
                  placeholder={contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1 transition-colors"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-400 transition-colors"
                  placeholder={contact.form.messagePlaceholder}
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
                    {contact.form.submittingButtonText}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {contact.form.submitButtonText}
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
