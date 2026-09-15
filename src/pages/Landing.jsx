import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="theme-page min-h-screen transition-colors duration-300">

      <nav className="theme-surface border-b px-6 py-5 transition-colors duration-300 sm:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <h1 className="theme-heading text-2xl font-bold tracking-tight">
            Resume<span className="text-blue-600">Builder</span>
          </h1>

          <div className="flex items-center gap-3">

            <button
              className="theme-muted rounded-lg px-4 py-2 font-medium transition hover:bg-gray-100"
              onClick={() => navigate('/login')}
            >
              Login
            </button>

            <button
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>

          </div>

        </div>
      </nav>

      <main>

        <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">

          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 opacity-60 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Build • Preview • Download
            </p>

            <h2 className="theme-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Build Your
              <span className="text-blue-600"> Professional Resume</span>
              <br />
              Step by Step
            </h2>

            <p className="theme-muted mx-auto mt-7 max-w-2xl text-lg leading-8">
              Create your resume, add your education, experience, projects,
              skills and certifications, preview the final design and
              download it as a PDF.
            </p>

            <button
              className="mt-9 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              onClick={() => navigate('/register')}
            >
              Create Your Resume
            </button>

          </div>

        </section>

        <section className="theme-surface border-y px-6 py-20 transition-colors duration-300 sm:px-10">

          <div className="mx-auto max-w-6xl">

            <div className="mb-12 text-center">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Simple Workflow
              </p>

              <h2 className="theme-heading mt-3 text-3xl font-bold sm:text-4xl">
                How It Works
              </h2>

              <p className="theme-muted mt-4">
                Follow these simple steps to complete your resume.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-4">

              <div className="theme-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                  1
                </div>

                <h3 className="theme-heading text-xl font-semibold">
                  Create Resume
                </h3>

                <p className="theme-muted mt-3 leading-7">
                  Enter your basic personal and professional information
                  to create your resume.
                </p>

              </div>

              <div className="theme-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                  2
                </div>

                <h3 className="theme-heading text-xl font-semibold">
                  View & Add Details
                </h3>

                <p className="theme-muted mt-3 leading-7">
                  Open your resume from the dashboard using
                  <span className="theme-heading font-medium"> View Resume </span>
                  and add education, experience, projects, skills and
                  certifications.
                </p>

              </div>

              <div className="theme-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                  3
                </div>

                <h3 className="theme-heading text-xl font-semibold">
                  Preview
                </h3>

                <p className="theme-muted mt-3 leading-7">
                  Preview your completed resume and check how it looks
                  before downloading.
                </p>

              </div>

              <div className="theme-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                  4
                </div>

                <h3 className="theme-heading text-xl font-semibold">
                  Download PDF
                </h3>

                <p className="theme-muted mt-3 leading-7">
                  Save your finished resume as a PDF and use it for your
                  job applications.
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className="px-6 py-24 text-center sm:px-10">

          <div className="mx-auto max-w-3xl">

            <h2 className="theme-heading text-3xl font-bold sm:text-4xl">
              Ready to Build Your Resume?
            </h2>

            <p className="theme-muted mt-4 text-lg">
              Create your account and start building your professional
              resume.
            </p>

            <button
              className="mt-8 rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              onClick={() => navigate('/register')}
            >
              Get Started
            </button>

          </div>

        </section>

      </main>

      <footer className="theme-surface theme-muted border-t px-6 py-7 text-center text-sm transition-colors duration-300">
        © 2026 ResumeBuilder. Build your career with confidence.
      </footer>

    </div>
  )
}

export default Landing