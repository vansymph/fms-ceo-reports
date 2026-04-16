import { Users, Code2, Headphones, TrendingUp, Megaphone } from 'lucide-react'

export const metadata = {
  title: 'Careers — FindMyShots',
  description: 'Join the FindMyShots team',
}

const roles = [
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    part: 'Value Creation',
    tag: 'Full-time',
    tagColor: 'violet',
    salary: '₱35,000 – ₱50,000/month',
    description: "We're building features that directly drive revenue — starting with our prepay registration integration. You'll work with our CTO on a live production system used by thousands of runners every week. This is a full-time specialist role.",
    stack: 'Next.js 15, NestJS 11, PostgreSQL/Supabase, Firebase, Google App Engine',
    lookingFor: [
      'Has shipped real production features — not just side projects',
      'Strong in NestJS or Next.js (our stack)',
      'Works well async and remotely without hand-holding',
      'Bonus: experience with payment integrations',
    ],
    email: 'Specialist Dev',
  },
  {
    icon: Headphones,
    title: 'Ops & Growth Intern',
    part: 'Value Delivery',
    tag: 'Internship',
    tagColor: 'green',
    salary: 'Unpaid · Open-ended · Convert-to-hire',
    description: "You'll own the post-sale experience — organizer setup, photographer onboarding, support, and building processes. Intern as long as you want. When the time is right and you've shown what you can do, we'll bring you on full-time.",
    stack: null,
    lookingFor: [
      'Organized and resourceful — figures things out without a playbook',
      'Good with people, especially non-technical ones',
      'Takes ownership without being told to',
      'Any background welcome — we care about mindset, not your CV',
    ],
    email: 'Ops Intern',
  },
  {
    icon: TrendingUp,
    title: 'BizDev & Sales Intern',
    part: 'Sales',
    tag: 'Internship',
    tagColor: 'green',
    salary: 'Unpaid · Open-ended · Convert-to-hire',
    description: "You'll own the organizer sales pipeline — outbound, demos, and closing. You're not shadowing someone. You're doing the work from day one. Intern as long as you want, and when you've proven yourself, the full-time role is yours.",
    stack: null,
    lookingFor: [
      'Can start conversations with strangers and build rapport fast',
      'Self-driven — sets their own agenda without being pushed',
      'Genuinely interested in PH running, sports, or events',
      'Any background welcome — hustle matters more than experience',
    ],
    email: 'BizDev Intern',
  },
  {
    icon: Megaphone,
    title: 'Content & Growth Intern',
    part: 'Marketing',
    tag: 'Internship',
    tagColor: 'green',
    salary: 'Unpaid · Open-ended · Convert-to-hire',
    description: "You'll own content execution — social media, email, event recaps, and growth experiments. Not busy work. Real output that shapes the brand. Intern as long as you want, and when the timing is right, we'll make it official.",
    stack: null,
    lookingFor: [
      'Has made content people actually engaged with — show us',
      'Understands PH running, triathlon, or sports culture',
      'Writes like a human, not a press release',
      'Any background welcome — show us your work, not your degree',
    ],
    email: 'Content Intern',
  },
]

const steps = [
  { step: '01', title: 'Apply', desc: 'Short intro + one example of relevant work or something you built. No cover letters.' },
  { step: '02', title: 'Quick Task', desc: 'A small take-home relevant to the role. Under 2 hours. We want to see how you think.' },
  { step: '03', title: 'Founder Call', desc: '30-minute call directly with a FindMyShots founder. No HR, no layers.' },
  { step: '04', title: 'Start', desc: "If it's a yes, you start within the week. No fixed end date — intern as long as you want." },
  { step: '05', title: 'Go Full-Time', desc: "When the time is right and you've shown what you can do, we'll bring you on. The decision is ours, but the door is always open." },
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
          We're a photo commerce platform for running events, expanding across Southeast Asia.
          Small team, real traction, high ownership. The people who join now help build what this becomes.
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 mb-3">
        <p className="text-slate-300 text-sm leading-relaxed">
          Most of our open roles start as <span className="text-white font-medium">internships with no fixed end date</span>.
          You intern as long as you want. When the timing is right and you've proven yourself,
          we'll bring you on full-time. No pressure, no arbitrary deadlines —
          just <span className="text-white font-medium">real work, real ownership, and a real path forward</span>.
        </p>
      </div>

      <div className="bg-amber-900/20 border border-amber-800/40 rounded-xl p-4 mb-10">
        <p className="text-amber-300 text-sm">
          <span className="font-medium">Internships are unpaid.</span> What we offer instead: direct mentorship from the founders,
          ownership over a real business function, and a front-row seat to building a startup that's already generating real revenue.
          The full-time offer comes when you've earned it — and we never cut interns loose.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-white mb-5">Open Roles</h2>
      <div className="flex flex-col gap-5 mb-12">
        {roles.map((role) => {
          const Icon = role.icon
          const tagBg = role.tagColor === 'green'
            ? 'bg-green-900/40 text-green-400 border-green-800/50'
            : 'bg-violet-900/40 text-violet-300 border-violet-800/50'
          return (
            <div key={role.title} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{role.title}</h3>
                    <p className="text-xs text-slate-500">{role.part} · Remote PH</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${tagBg}`}>{role.tag}</span>
                  <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">{role.salary}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{role.description}</p>
              {role.stack && <p className="text-xs text-slate-500 mb-4"><span className="text-slate-400 font-medium">Stack: </span>{role.stack}</p>}
              <div className="mb-5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">What makes you a fit</p>
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
