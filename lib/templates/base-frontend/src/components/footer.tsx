"use client";
import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">About</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Next.js starter template with HeroUI, Redux Toolkit, and authentication boilerplate.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Created by{" "}
              <Link
                href="https://github.com/m0hamedesmail"
                target="_blank"
                className="text-sm font-medium"
              >
                m0hamedesmail
              </Link>
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              CEO & Founder of{" "}
              <Link
                href="https://merncore.com"
                target="_blank"
                className="text-sm font-medium"
              >
                MERNCore.com
              </Link>
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/m0hamedesmail"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  GitHub Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/~m0hamedesmail"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  NPM Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/nextjs-hero-starter"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  This Package
                </Link>
              </li>
              <li>
                <Link
                  href="https://merncore.com"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  MERNCore.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Next.js Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://heroui.com"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  HeroUI Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://redux-toolkit.js.org"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Redux Toolkit
                </Link>
              </li>
              <li>
                <Link
                  href="https://react-hook-form.com"
                  target="_blank"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  React Hook Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-divider pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} m0hamedesmail. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/m0hamedesmail"
                target="_blank"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                GitHub
              </Link>
              <Link
                href="https://www.npmjs.com/~m0hamedesmail"
                target="_blank"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                NPM
              </Link>
              <Link
                href="https://merncore.com"
                target="_blank"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                MERNCore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
