export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold">
            SimpleApp
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="hover:text-gray-600">
              Features
            </a>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>

          <button className="rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-gray-500">
              Simple. Useful. Reliable.
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Make your work easier.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A simple tool designed to help you organize your work,
              save time, and focus on what matters.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded bg-black px-6 py-3 font-medium text-white hover:bg-gray-800">
                Get Started
              </button>

              <a
                href="#features"
                className="rounded border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-y border-gray-200 bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12">
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="mt-3 text-gray-600">
                Everything you need to get things done.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold">Easy to Use</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  A straightforward interface that anyone can understand.
                </p>
              </div>

              <div className="rounded border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold">Fast</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Built to be quick and responsive so you can stay productive.
                </p>
              </div>

              <div className="rounded border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold">Reliable</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Dependable tools that work when you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Built for simplicity</h2>

            <p className="mt-5 leading-8 text-gray-600">
              We believe software should be easy to understand and pleasant
              to use. That's why we focus on the essentials and leave out
              unnecessary complexity.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-gray-600">
              Start using SimpleApp today and make your work a little easier.
            </p>

            <button className="mt-8 rounded bg-black px-6 py-3 font-medium text-white hover:bg-gray-800">
              Get Started
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SimpleApp. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
