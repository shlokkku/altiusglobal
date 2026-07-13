import { Building2, Mail, Phone } from 'lucide-react';
import { brand } from '../data/site';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#E8DCC8] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#4A3728]/10 grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[#2A1F17] p-12 text-white flex flex-col justify-between">
            <div>
              <span className="text-[#D4AF37] font-sans font-medium tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
              <h3 className="font-serif text-4xl mb-8">Let's Discuss Your Trade Requirements</h3>
              <p className="font-sans text-white/70 text-sm mb-12">
                Connect with our international trade specialists for competitive pricing, product specifications, and global logistics solutions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <div>
                    <h5 className="font-serif text-lg mb-1">Dubai Headquarters</h5>
                    <p className="font-sans text-sm text-white/70">
                      {brand.address.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <p className="font-sans text-sm text-white/70">{brand.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <p className="font-sans text-sm text-white/70">{brand.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <button type="button" className="w-full py-4 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A1F17] transition-colors font-sans font-medium tracking-wide">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 p-12 lg:p-16">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name" />
                <Field label="Company Name" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Email Address" type="email" />
                <Field label="Country" />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs font-semibold text-[#4A3728] uppercase tracking-wider">Product Interest / Message</label>
                <textarea rows="4" className="w-full bg-white border border-[#4A3728]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all font-sans text-[#4A3728] resize-none" />
              </div>
              <button type="submit" className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white px-8 py-4 rounded-xl font-sans font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = 'text' }) {
  return (
    <div className="space-y-2">
      <label className="font-sans text-xs font-semibold text-[#4A3728] uppercase tracking-wider">{label}</label>
      <input type={type} className="w-full bg-white border border-[#4A3728]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all font-sans text-[#4A3728]" />
    </div>
  );
}
