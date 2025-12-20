import Link from "next/link";
import type { Metadata } from "next";
import LandingButtons from "./components/LandingButtons";
import LandingNavButtons from "./components/LandingNavButtons";

export const metadata: Metadata = {
  title: "ApniSec - Enterprise Cybersecurity Solutions",
  description: "Leading cybersecurity company providing Cloud Security, Red Team Assessment, and VAPT services to protect your digital assets.",
  keywords: "cybersecurity, cloud security, red team, VAPT, penetration testing, security assessment",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-500">ApniSec</Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#services" className="text-gray-300 hover:text-white transition">
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition">
                About
              </Link>
              <LandingNavButtons />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Secure Your Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Enterprise-grade cybersecurity solutions to protect your organization from evolving threats
            </p>
            <LandingButtons />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cloud Security */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition">
              <div className="text-green-500 text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive cloud infrastructure security assessments and continuous monitoring to protect your cloud assets.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AWS, Azure, GCP security</li>
                <li>• Configuration audits</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>

            {/* Red Team Assessment */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition">
              <div className="text-green-500 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Red Team Assessment</h3>
              <p className="text-gray-400 mb-4">
                Simulated cyber attacks to test your organization's detection and response capabilities.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Advanced threat simulation</li>
                <li>• Social engineering tests</li>
                <li>• Incident response evaluation</li>
              </ul>
            </div>

            {/* VAPT */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition">
              <div className="text-green-500 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">VAPT</h3>
              <p className="text-gray-400 mb-4">
                Vulnerability Assessment and Penetration Testing to identify and fix security weaknesses.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Web & mobile app testing</li>
                <li>• Network security audits</li>
                <li>• API security testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
            {/* Google */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-500">G</span>
              <span className="text-3xl font-bold text-red-500">o</span>
              <span className="text-3xl font-bold text-yellow-500">o</span>
              <span className="text-3xl font-bold text-blue-500">g</span>
              <span className="text-3xl font-bold text-green-500">l</span>
              <span className="text-3xl font-bold text-red-500">e</span>
            </div>
            {/* GitHub */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-white">GitHub</span>
            </div>
            {/* Microsoft */}
            <div className="flex items-center justify-center space-x-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
              </div>
              <span className="text-3xl font-bold text-gray-400">Microsoft</span>
            </div>
            {/* Netflix */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-red-600">NETFLIX</span>
            </div>
            {/* Mastercard */}
            <div className="flex items-center justify-center space-x-2">
              <div className="flex relative">
                <div className="w-8 h-8 bg-red-600 rounded-full opacity-90"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-90 -ml-4"></div>
              </div>
              <span className="text-3xl font-bold text-white">mastercard</span>
            </div>
            {/* Facebook */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">facebook</span>
            </div>
            {/* Sony */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-white font-serif">SONY</span>
            </div>
            {/* Yahoo */}
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-purple-600">yahoo!</span>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 text-lg italic mb-6">
                "ApniSec's VAPT services identified critical vulnerabilities that traditional tools missed. Their team is simply world-class."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-white">John Doe</h4>
                  <p className="text-sm text-gray-500">CISO, TechCorp Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 text-lg italic mb-6">
                "The Red Team assessment was an eye-opener. It helped us harden our defenses against real-world attack vectors."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-500">VP Engineering, DataFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose ApniSec?</h2>
          <p className="text-gray-400 text-lg mb-8">
            We are a team of certified cybersecurity professionals dedicated to protecting businesses from cyber threats. 
            With years of experience and cutting-edge tools, we deliver comprehensive security solutions tailored to your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
              <div className="text-gray-400">Clients Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">10K+</div>
              <div className="text-gray-400">Vulnerabilities Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-4">ApniSec</h3>
              <p className="text-gray-400 text-sm">
                Protecting businesses from cyber threats with enterprise-grade security solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Cloud Security</li>
                <li>Red Team Assessment</li>
                <li>VAPT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>contact@apnisec.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ApniSec. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
