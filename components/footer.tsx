import React from "react";

export default function footer() {
  return (
    <div className=" bg-white border-gray-200 shadow-sm border-t">
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400">© Shun Kano — Portfolio</p>
        <div className="flex items-center gap-4">
          {[
            {
              href: "https://x.com",
              label: "X",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              ),
            },
            {
              href: "https://github.com",
              label: "GitHub",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
            },
            {
              href: "https://qiita.com",
              label: "Qiita",
              icon: (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.317 16.516c-1.265.043-2.295-.29-3.09-1-.794-.71-1.19-1.744-1.19-3.1 0-1.346.395-2.42 1.184-3.22.79-.8 1.828-1.2 3.118-1.2.67 0 1.27.1 1.8.3v-1.5h1.6v9.3c-.71.28-1.734.42-3.07.42h-.352zm2.283-6.89c-.43-.17-.9-.26-1.41-.26-.83 0-1.49.27-1.97.82-.48.55-.72 1.29-.72 2.22 0 .94.22 1.66.67 2.16.45.5 1.09.75 1.92.75.37 0 .74-.04 1.11-.11l.4-.09v-5.49z" />
                </svg>
              ),
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-indigo-500 transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
