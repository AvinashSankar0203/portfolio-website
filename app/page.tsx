import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm text-gray-500">
            Chicago, IL • Data Analyst / Data Scientist
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Avinash Sankar
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl">
            I build SQL + Python analytics pipelines and dashboards that turn messy data
            into clear business decisions.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/projects"
              className="rounded-xl bg-gray-900 px-5 py-2 text-white hover:opacity-90"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              className="rounded-xl border border-gray-300 px-5 py-2 hover:bg-gray-50"
            >
              Download Resume
            </a>

            <a
              href="mailto:avinashsankarbe@gmail.com"
              className="rounded-xl border border-gray-300 px-5 py-2 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="mt-16">
          <h2 className="text-xl font-semibold">Core Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "SQL",
              "Power BI",
              "Tableau",
              "Pandas",
              "ETL",
              "APIs",
              "Data Modeling",
              "A/B Testing",
              "Machine Learning",
              "FastAPI",
              "Git & GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t pt-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Avinash Sankar •{" "}
            <a className="underline" href="mailto:avinashsankarbe@gmail.com">
              avinashsankarbe@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
