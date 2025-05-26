"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-[#0F1F17] via-[#1A2B20] to-[#0F1F17] text-gray-300 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start md:items-center">
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-4 md:hidden">Quick Links</h3>
              <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium text-base group relative"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium text-base group relative"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium text-base group relative"
                >
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </nav>
            </div>

            <div className="text-center">
              <div className="inline-block">
                <p className="text-sm text-gray-400 mb-2">
                  © {new Date().getFullYear()} NAVTTC
                </p>
                <p className="text-xs text-gray-500">
                  All rights reserved.
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-4 md:hidden">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://facebook.com/arzuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group relative p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Facebook size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://instagram.com/arzuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative p-3 bg-gray-800/50 rounded-full hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://youtube.com/arzuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group relative p-3 bg-gray-800/50 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <Youtube size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://linkedin.com/company/arzuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative p-3 bg-gray-800/50 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                Empowering communities through technical education and vocational training
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-[#01431D] text-gray-300 h-[24px] flex justify-center items-center space-x-2">
        <p className="text-xs font-semibold">Developed by Arzuno Team</p>
        <a
          href="mailto:arzunoteam@gmail.com"
          aria-label="Email Arzuno Team"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>
  );
}