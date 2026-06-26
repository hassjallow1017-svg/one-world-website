import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import BusinessStatus from "@/components/shared/BusinessStatus";
import ContactForm from "@/components/contact/ContactForm";
import { allHours } from "@/lib/businessHours";

export const metadata: Metadata = {
  title: "Contact Us | One World Financial Services",
  description: "Contact One World Financial Services in Kololi, The Gambia. Phone, email, WhatsApp, and directions. Open Mon–Sat 8am–6pm, Sun 10am–4pm.",
};

const phones = [
  { number: "+220 2517942", href: "tel:+2202517942" },
  { number: "+220 2635333", href: "tel:+2202635333" },
  { number: "+220 2660305", href: "tel:+2202660305" },
  { number: "+220 3704323", href: "tel:+2203704323" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      <div className="bg-[#1B2A87] py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">Contact Us</h1>
        <p className="text-green-100 text-lg">We're here to help — reach us any way you prefer</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold font-heading text-gray-900 dark:text-white">Business Hours</h3>
                <BusinessStatus />
              </div>
              <ul className="space-y-2">
                {allHours.map(h => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 text-[#1B2A87]" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#1B2A87]" /> Phone Numbers
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {phones.map(p => (
                  <a key={p.href} href={p.href}
                    className="px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 text-[#1B2A87] dark:text-blue-400 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors text-center">
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#1B2A87]" /> Email
              </h3>
              <a href="mailto:oneworldkololi@gmail.com"
                className="text-[#1B2A87] dark:text-blue-400 hover:underline text-sm break-all">
                oneworldkololi@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div id="whatsapp-contact-card" className="bg-blue-500 rounded-2xl p-6 text-white shadow-md">
              <h3 className="font-semibold font-heading mb-2 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Chat With Us on WhatsApp
              </h3>
              <p className="text-green-100 text-sm mb-4">Quick questions, rate enquiries, or transfer quotes — we're on WhatsApp.</p>
              <a href="https://wa.me/2202517942?text=Hello%2C+I%27d+like+to+enquire+about+your+services"
                target="_blank" rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-white text-green-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors">
                Start Chat
              </a>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1B2A87]" /> Find Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Kololi, The Gambia</p>
              <div className="rounded-xl overflow-hidden h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.123!2d-16.6986!3d13.4549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI3JzE3LjYiTiAxNsKwNDEnNTQuOSJX!5e0!3m2!1sen!2sgm!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One World Financial Services location"
                />
              </div>
            </div>

            {/* Social */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-xl text-sm font-medium hover:bg-pink-100 transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
