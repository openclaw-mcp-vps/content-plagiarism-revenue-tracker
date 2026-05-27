export default function Page() {
  const faqs = [
    {
      q: "How does CopyGuard detect stolen content?",
      a: "We fingerprint your articles and continuously crawl the web using search APIs and content similarity algorithms to surface exact and near-duplicate copies."
    },
    {
      q: "How is revenue loss calculated?",
      a: "We estimate organic traffic to infringing URLs using third-party traffic data APIs, then apply your average RPM or conversion rate to produce a dollar-value impact figure."
    },
    {
      q: "Are the DMCA notices legally valid?",
      a: "The generated notices follow the DMCA Section 512(c)(3) template. You review and sign before sending — we handle the formatting and host lookup automatically."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] text-[#58a6ff] border border-[#30363d]">
          Content Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Revenue Lost to{" "}
          <span className="text-[#58a6ff]">Content Theft</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CopyGuard monitors the web for stolen content, estimates the traffic and revenue plagiarizers are stealing from you, and generates ready-to-send DMCA takedown notices automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Protecting My Content
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">$15/mo · Cancel anytime</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔍", title: "Web Monitoring", desc: "Continuous crawling detects copies within hours of publication." },
          { icon: "💸", title: "Revenue Impact", desc: "Dollar-value estimates based on real traffic data APIs." },
          { icon: "📄", title: "Auto DMCA", desc: "One-click DMCA notices pre-filled with infringing URLs." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your content</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Monitor up to 500 URLs",
              "Daily plagiarism scans",
              "Traffic & revenue estimates",
              "Unlimited DMCA notices",
              "Email alerts on new matches",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} CopyGuard. All rights reserved.
      </footer>
    </main>
  );
}
