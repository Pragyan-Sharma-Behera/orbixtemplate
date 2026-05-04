import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/pragyan-sharma-behera-738b9a404?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const WHATSAPP_NO = "917002021780";
const EMAIL = "psharmabehera@gmail.com";

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10H5.67v8h2.67zM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.41 1.33V10h-2.67v8h2.67v-4.47c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.97 0 1.36.74 1.36 1.81V18h2.68z" />
  </svg>
);

type FormData = {
  fullName: string;
  businessName: string;
  contact: string;
  websiteType: string;
  budget: string;
  description: string;
};

const emptyForm: FormData = {
  fullName: "",
  businessName: "",
  contact: "",
  websiteType: "",
  budget: "",
  description: "",
};

function buildMessage(d: FormData) {
  return `Hi, I'd like to start a project with ORBIX.\n\nFull Name: ${d.fullName}\nBusiness Name: ${d.businessName}\nContact: ${d.contact}\nWebsite Type: ${d.websiteType}\nBudget: ${d.budget}\n\nProject Description:\n${d.description}`;
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-white/30 focus:outline-none focus:border-primary-glow transition-colors";

const selectCls =
  "w-full rounded-xl border border-white/10 bg-[oklch(0.13_0.05_290/0.8)] px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary-glow transition-colors";

export function ProjectFormDialog({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((d) => ({ ...d, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const msg = buildMessage(formData);
  const encodedMsg = encodeURIComponent(msg);
  const emailSubject = encodeURIComponent(`New Project Inquiry — ${formData.businessName}`);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setSubmitted(false);
          setFormData(emptyForm);
        }
      }}
    >
      <DialogTrigger asChild>
        <button className={triggerClassName}>
          Start your project
          <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-lg border-white/10 p-0 overflow-hidden"
        style={{
          background: "oklch(0.13 0.05 290 / 0.95)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="mb-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary-glow mb-2">
              · Start your project
            </div>
            <DialogTitle className="font-display text-2xl font-semibold text-foreground leading-tight">
              Tell us about your project
            </DialogTitle>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Full Name
                  </label>
                  <input
                    required
                    value={formData.fullName}
                    onChange={set("fullName")}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Business Name
                  </label>
                  <input
                    required
                    value={formData.businessName}
                    onChange={set("businessName")}
                    className={inputCls}
                    placeholder="Your business"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Contact Email / Phone Number
                </label>
                <input
                  required
                  value={formData.contact}
                  onChange={set("contact")}
                  className={inputCls}
                  placeholder="email@example.com or +91..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Website Type
                  </label>
                  <select
                    required
                    value={formData.websiteType}
                    onChange={set("websiteType")}
                    className={selectCls}
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="Business">Business</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Budget Range
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={set("budget")}
                    className={selectCls}
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    <option value="₹20k–50k">₹20k–50k</option>
                    <option value="₹50k–1L">₹50k–1L</option>
                    <option value="₹1L+">₹1L+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Project Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={set("description")}
                  className={inputCls + " resize-none"}
                  placeholder="Tell us briefly about your business and what kind of website you want."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-[oklch(0.55_0.28_295)] to-[oklch(0.72_0.28_305)] py-3.5 text-sm font-semibold text-white shadow-[0_0_60px_oklch(0.62_0.26_300/0.5)] hover:shadow-[0_0_120px_oklch(0.62_0.26_300/0.6)] transition-all hover:-translate-y-0.5 mt-2"
              >
                Send →
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Ready to send — choose your channel:
                </p>
                <p className="text-xs text-white/50">
                  Your project details are pre-filled and ready to go.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}?subject=${emailSubject}&body=${encodedMsg}`}
                  className="group flex items-center gap-4 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-foreground hover:bg-white/10 hover:border-primary-glow transition"
                >
                  <Mail size={18} className="text-primary-glow shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">Send via Email</div>
                    <div className="text-xs text-white/50">{EMAIL}</div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-primary-glow group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NO}?text=${encodedMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-foreground hover:bg-white/10 hover:border-primary-glow transition"
                >
                  <MessageCircle size={18} className="text-primary-glow shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">Send via WhatsApp</div>
                    <div className="text-xs text-white/50">+91 70020 21780</div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-primary-glow group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-foreground hover:bg-white/10 hover:border-primary-glow transition"
                >
                  <IconLinkedIn className="text-primary-glow shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">Send via LinkedIn</div>
                    <div className="text-xs text-white/50">pragyan-sharma-behera</div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-primary-glow group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
