import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Auth Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-xl">Pharmart</span>
          </Link>
          <nav>
            <Link
              href="https://help.pharmart.com"
              className="text-sm text-zinc-600 hover:text-indigo-600"
            >
              Help Center
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        {children}
      </main>

      {/* Auth Footer */}
      <footer className="py-6 border-t bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Pharmart. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link
                href="/terms"
                className="text-zinc-500 hover:text-indigo-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-zinc-500 hover:text-indigo-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-zinc-500 hover:text-indigo-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
