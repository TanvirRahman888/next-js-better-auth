import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-default-200 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              ACME
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-default-500">
              Build, manage, and grow with a simple and modern platform designed
              for a smooth user experience.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/features"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-default-500 transition hover:text-foreground"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Account
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/sign-in"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href="/sign-up"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Sign Up
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="text-default-500 transition hover:text-foreground"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-default-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-default-500">
            © {new Date().getFullYear()} ACME. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-default-500 transition hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-default-500 transition hover:text-foreground"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-default-500 transition hover:text-foreground"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;