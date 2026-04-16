import { Users, Code2, Headphones, TrendingUp, Megaphone } from 'lucide-react'

export const metadata = {
  title: 'Careers — FindMyShots',
  description: 'Join the FindMyShots team',
}

const roles = [
  {
    icon: Code2,
    title: 'Full-Stack Developer (Specialist)',
    part: 'Value Creation',
    month: 'Month 1',
    urgent: true,
    salary: '₱35,000 – ₱50,000/month',
    description: "We're building features that directly drive revenue — starting with our prepay registration integration. You'll work with our CTO and existing dev on a live production system used by thousands of runners every week.",
    stack: 'Next.js 15, NestJS 11, PostgreSQL/Supabase, Firebase, Google App Engine',
    lookingFor: [
      'Has shipped real production features — not just side projects',
      'Strong in NestJS/Next.js (our stack)',
      'Works well async and remotely without hand-holding',
      'Bonus: experience with payment integrations',
    ],
    email: 'Specialist Dev',
  },
  {
    icon: Headphones,
    title: 'Ops / Customer Success',
    part: 'Value Delivery',
    month: 'Month 1',
    urgent: true,
    salary: '₱20,000 – ₱30,000/month',
    description: "Nobody clearly owns what happens after a deal is signed. You will. Organizer setup, photographer onboarding, payout queries, event launches — you own the full post-sale experience.",
    stack: null,
    lookingFor: [
      'Obsessively organized — loves checklists and systems',
      'Patient with non-technical customers',
      'Can spot a broken process and build the SOP to fix it',
      'Bonus: handled support for a tech product before',
    ],
    email: 'Ops/CS',
  },
  {
    icon: TrendingUp,
    title: 'BizDev / Sales',
    part: 'Sales',
    month: 'Month 2',
    urgent: false,
    salary: '₱25,000 – ₱35,000/month',
    description: "You'll own the full organizer sales cycle — outbound, demos, closing, and renewals. Right now the CEO closes every deal. Your job is to change that.",
    stack: null,
    lookingFor: [
      'Has closed B2B deals before (events, SaaS, sponsorships)',
      "Self-managed — doesn't need a manager on Monday morning",
      'Comfortable with rejection and knows what to do next',
      'Bonus: network in the PH running and events scene',
    ],
    email: 'BizDev/Sales',
  },
  {
    icon: Megaphone,
    title: 'Content / Growth',
    part: 'Marketing',
    month: 'Month 2',
    urgent: false,
    salary: '₱20,000 – ₱30,000/month',
    description: "Our CMO owns brand strategy — you make it real every day. Social media, email campaigns, event recaps, growth experiments. We need content that actually performs.",
    stack: null,
    lookingFor: [
      'Portfolio with real engagement numbers',
      'Understands PH running and endurance sports culture',
      'Works across formats: video, copy, graphics briefs',
      "Bonus: basic Canva skills so you're never blocked",
    ],
    email: 'Content/Growth',
  },
]

const steps = [
  { step: '01', title: 'Application', desc: 'Short intro + one specific example of relevant work. No lengthy cover letters.' },
  { step: '02', title: 'Async Assessment', desc: 'A short take-home task. Under 2 hours. We respect that you have a job.' },
  { step: '03', title: 'Interview', desc: '45–60 minute video call with the hiring manager.' },
  { step: '04', title: 'CEO Call', desc: 'Short culture and alignment call with Van.' },
  { step: '05', title: 'Offer', desc: "If it's a yes on both sides, offer within 48 hours." },
]

export default function CareersPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-slate-800 rounded-lg">
            <Users className="w-5 h-5 text-violet-400" />
          </div>
          <span className="text-xs text-slate-500 uppercase tracking-widest">We're Hiring</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Join FindMyShots</h1>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          We're building the platform that makes every race photo findable and every memory permanent.
          Small team, high ownership, expanding across Southeast Asia.
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 mb-10">
        <p className="text-slate-300 text-sm leading-relaxed">
          FindMyShots is <span className="text-white font-medium">remote-first</span>. We don't measure hours — we measure outcomes.
          If you want to <span className="text-white font-medium">own something real and move fast</span>, keep reading.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-white mb-5">Open Roles</h2>
      <div className="flex flex-col gap-5 mb-12">
        {roles.map((role) => {
          const Icon = role.icon
          return (
            <div key={role.title} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{role.title}</h3>
                    <p className="text-xs text-slate-500">{role.part} · Remote PH · Full-time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {role.urgent && (
                    <span className="text-xs bg-red-900/40 text-red-400 border border-red-800/50 px-2 py-0.5 rounded-full">Hiring Now</span>
                  )}
                  <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">{role.month}</span>
                  <span className="text-xs bg-violet-900/40 text-violet-300 border border-violet-800/50 px-2 py-0.5 rounded-full">{role.salary}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{role.description}</p>
              {role.stack && <p className="text-xs text-slate-500 mb-4"><span className="text-slate-400 font-medium">Stack: </span>{role.stack}</p>}
              <div className="mb-5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Looking for</p>
                <ul className="flex flex-col gap-1.5">
                  {role.lookingFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-violet-400 mt-0.5">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`mailto:team@findmyshots.com?subject=${encodeURIComponent(role.email + ' — [Your Name]')}`}
                className="inline-flex items-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Apply for this role
              </a>
            </div>
          )
        })}
      </div>

      <h2 className="text-lg font-semibold text-white mb-5">How We Hire</h2>
      <div className="flex flex-col gap-4 mb-12">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <span className="text-xs text-violet-400 font-mono">{s.step}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-0.5">{s.title}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
        <p className="text-white font-medium mb-1">Don't see the right role?</p>
        <p className="text-slate-400 text-sm mb-4">Tell us what you're great at and why FindMyShots.</p>
        <a
          href="mailto:team@findmyshots.com?subject=General%20Application%20%E2%80%94%20%5BYour%20Name%5D"
          className="inline-flex items-center gap-2 text-sm bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Send a general application
        </a>
      </div>

      <p className="text-center text-xs text-slate-600 mt-8">
        FindMyShots is remote-first and equal opportunity. We hire on capability and ownership.
      </p>
    </div>
  )
}
