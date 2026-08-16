import { Contact } from '../sections/Contact';

const leaders = [
  {
    name: 'Shravanth H K',
    role: 'Co-Founder',
    age: '',
    image: '/assets/shravanth.jpeg',
    imagePosition: '66% center',
    paragraphs: [
      'Shravanth Arya brings a lifelong immersion in business, shaped by nearly a decade and a half of family legacy in equity investments, fund management, real estate, and construction. Immersed in these high-stakes industries from a young age, he developed an instinctive grasp of market dynamics, disciplined risk assessment, and long-term value creation.',
      'Over the years, Shravanth has cultivated a sharp, practical approach to capital allocation, strategic partnerships, and commercial execution. His entrepreneurial mindset combines analytical rigor with the agility required to navigate complex, fast-moving markets.',
      "At Altius Global, Shravanth leverages this deep-rooted financial and operational background, driving the company's vision of building a robust, internationally connected enterprise from Dubai.",
    ],
  },
  {
    name: 'Umang Chhabda',
    role: 'Co-Founder',
    age: '',
    image: '/assets/umang.png',
    imagePosition: '47% 52%',
    paragraphs: [
      'Umang Chhabda brings a deep-rooted perspective on enterprise, backed by a 26-year family legacy spanning road construction, real estate development, and industrial manufacturing. Growing up immersed in heavy industry and large-scale operations, he developed an instinctive understanding of leadership, complex negotiation, and long-term value creation from an early age.',
      "Over the years, Umang has cultivated a practical, hands-on approach to problem-solving, strategic relationship-building, and market execution. Guided by the principles of his family's multi-decade business background, he believes that enduring enterprises are built on operational resilience, mutual trust, and the ability to adapt to evolving markets.",
      'At Altius Global, Umang brings this industrial and operational foundation to the team, driving key relationships, exploring new commercial opportunities, and helping establish the company as a globally connected enterprise headquartered in Dubai.',
    ],
  },
  {
    name: 'Sai Venkat',
    role: 'Co-Founder',
    age: '',
    image: '/assets/sai new.png',
    imagePosition: 'center center',
    paragraphs: [
      'Sai Venkat brings a dynamic and driven perspective to enterprise, shaped by early, hands-on exposure to business leadership and strategic decision-making. Guided by experienced mentors throughout his journey, he developed a sharp entrepreneurial mindset focused on long-term vision, persistence, and calculated risk-taking from an early stage.',
      'Over the years, Sai has cultivated a solution-oriented approach to identifying opportunities, navigating business dynamics, and building meaningful partnerships. His work is driven by a strong commitment to adaptability and execution, ensuring that every venture is built for sustainable growth.',
      "At Altius Global, Sai leverages this energetic and forward-looking foundation, focusing on driving the company's strategic vision, exploring international markets, and contributing to the development of a scalable, globally connected enterprise from Dubai.",
    ],
  },
  {
    name: 'Shlok Bhosale',
    role: 'Group President',
    image: '/assets/shlok.jpeg',
    imagePosition: 'center 46%',
    paragraphs: [
      "For the past 15 years, Shlok Bhosale's family has been deeply embedded in the manpower supplying industry. Having spent years on the ground managing and scaling those operations, Shlok learned early on that business is fundamentally about people, not paperwork.",
      'Growing up surrounded by the day-to-day realities of enterprise management provided invaluable lessons in trust, resilience, and reliable execution. Those years on the ground proved that a company is only as good as its word and the relationships it keeps.',
      "At Altius Global, Shlok brings this foundational background in operations and human capital, driving the company's ambition to build a strong, trusted, and internationally connected enterprise.",
    ],
  },
];

function LeaderImage({ leader }) {
  return (
    <div className="relative h-[340px] overflow-hidden rounded-2xl border border-[#4A3728]/10 bg-[#2A1F17] shadow-xl shadow-[#4A3728]/10 md:h-[430px]">
      <img
        src={leader.image}
        alt={`${leader.name} profile`}
        width="1200"
        height="1600"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover contrast-105 saturate-[0.9]"
        style={{ objectPosition: leader.imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F17]/45 via-transparent to-transparent" />
    </div>
  );
}

function LeaderFeature({ leader, index }) {
  const imageFirst = index % 2 === 0;

  return (
    <article className="grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div className={`${imageFirst ? 'md:col-start-1' : 'md:col-start-8'} md:col-span-5`}>
        <LeaderImage leader={leader} />
      </div>

      <div className={`${imageFirst ? 'md:col-start-7' : 'md:col-start-1 md:row-start-1'} flex flex-col justify-center md:col-span-6`}>
        <div className="mb-5 hidden h-px w-full bg-gradient-to-r from-[#B8860B]/55 to-transparent md:block" />
        <p className="font-sans text-base font-semibold uppercase tracking-[0.2em] text-[#B8860B] md:text-lg">
          {leader.role}
          {leader.age ? ` | ${leader.age}` : ''}
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A3728] md:text-5xl lg:text-6xl">{leader.name}</h2>
        <div className="mt-7 space-y-5 font-sans text-base leading-relaxed text-[#4A3728]/75 md:text-lg">
          {leader.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function FoundersManagementPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2A1F17] px-6 pb-20 pt-40 text-white md:px-12 md:pb-24 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_32%),linear-gradient(135deg,rgba(10,7,5,0.95),rgba(42,31,23,0.88))]" />
        <div className="container relative z-10 mx-auto">
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-[#D4AF37]">Co-Founders & Leadership</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-white md:text-7xl">
            Founders & Management
          </h1>
          <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-white/75 md:text-xl">
            Co-founders and leadership shaping a Dubai-headquartered enterprise with global ambition, disciplined execution, and long-term business instinct.
          </p>
        </div>
      </section>

      <section className="bg-[#E8DCC8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="divide-y divide-[#4A3728]/10 border-y border-[#4A3728]/10">
            {leaders.map((leader, index) => (
              <LeaderFeature key={leader.name} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
