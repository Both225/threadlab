"use client";

import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-[3.2rem] bg-gray-900 text-gray-300 row-start-3 col-start-1 col-end-7">
      {/* Top Main Footer Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Column 1: Brand & Bio (Spans 4 cols on desktop) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-black">
                N
              </span>
              NexStore
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-400 leading-relaxed">
              Empowering developers and teams to build high-performance web
              applications with modern tech stacks and intuitive interfaces.
            </p>

            {/* Contact Details */}
            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+855 12 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <span>support@nexstore.com</span>
              </li>
            </ul>
          </div>

          {/* Columns 2-4: Quick Links (Spans 8 cols on desktop) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#changelog"
                    className="hover:text-white transition-colors"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>{" "}
                  <span className="ml-1 rounded-full bg-blue-600/20 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                    Hiring
                  </span>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="hover:text-white transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Legal & Security
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="mt-12 rounded-2xl bg-gray-800/60 p-6 sm:p-8 lg:mt-16 border border-gray-800">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Get the latest updates, tutorials, and component drops in your
                inbox weekly.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shrink-0"
              >
                Subscribe
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Social Links */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} NexStore Inc. All rights reserved.
          </p>

          {/* Social Icons (Pure Inline SVG) */}
          <div className="flex items-center gap-5 text-gray-400">
            {/* GitHub */}
            <a
              href="#github"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#twitter"
              className="hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#linkedin"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
