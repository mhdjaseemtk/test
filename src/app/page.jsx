"use client";

import React, { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState(1250);
  const [volume, setVolume] = useState(2.5);
  const [documentation, setDocumentation] = useState(true);

  // Calculation Logic
  const weightVal = typeof weight === "number" && weight > 0 ? weight : 0;
  const volumeVal = typeof volume === "number" && volume > 0 ? volume : 0;

  const weightCBM = weightVal / 500;
  const chargeableCBM = Math.max(weightCBM, volumeVal);
  const freightCost = chargeableCBM * 265;
  const documentationCost = documentation ? 150 : 0;
  const totalCost = freightCost + documentationCost;

  const handleRecalculate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <nav className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between font-manrope antialiased text-sm tracking-tight">
          <div className="text-xl font-bold tracking-tighter text-slate-900">GlobalLogix</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1 hover:text-indigo-500 transition-all duration-200" href="#">Solutions</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#">Rates</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#">Tracking</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-500 mr-2">
              <span className="material-symbols-outlined cursor-pointer hover:text-indigo-600 transition-standard">language</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-indigo-600 transition-standard">account_circle</span>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-lg font-label-md hover:bg-primary-dark active:scale-95 transition-standard">
              Get Quote
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-primary tracking-widest mb-3 block">PREMIUM FREIGHT CALCULATOR</span>
              <h1 className="font-display-xl text-slate-900 flex items-center flex-wrap gap-4">
                Guangzhou 
                <span className="material-symbols-outlined text-slate-300 text-4xl">east</span> 
                Jebel Ali
              </h1>
            </div>
            <div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-2 w-fit">
              <span className="material-symbols-outlined text-primary">sailing</span>
              <span className="font-label-md text-on-surface">Standard Ocean Freight (LCL)</span>
            </div>
          </div>
        </section>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Section: Input Form */}
          <div className="md:col-span-7 lg:col-span-8 bg-white border border-slate-100 rounded-xl p-card-padding bento-shadow transition-standard hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <h2 className="font-headline-md text-slate-900">Shipment Details</h2>
            </div>
            <form onSubmit={handleRecalculate} className="space-y-stack-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
                <div className="space-y-2">
                  <label className="font-label-md text-slate-700">Gross Weight (kg)</label>
                  <div className="relative group">
                    <input 
                      className="w-full h-14 bg-slate-50 border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-standard" 
                      placeholder="0.00" 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
                    />
                    <span className="absolute right-4 top-4 text-slate-400 font-label-md">kg</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-slate-700">Total Volume (CBM)</label>
                  <div className="relative group">
                    <input 
                      className="w-full h-14 bg-slate-50 border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-standard" 
                      placeholder="0.00" 
                      type="number" 
                      value={volume}
                      onChange={(e) => setVolume(e.target.value ? parseFloat(e.target.value) : "")}
                    />
                    <span className="absolute right-4 top-4 text-slate-400 font-label-md">m³</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-100 text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-label-md text-slate-900">Local Documentation Service</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Flat fee of $150.00</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer self-end sm:self-auto shrink-0">
                  <input 
                    checked={documentation}
                    onChange={(e) => setDocumentation(e.target.checked)}
                    className="sr-only peer" 
                    type="checkbox"
                  />
                  <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md pt-4">
                <button type="submit" className="bg-primary text-white h-14 rounded-xl font-label-md md:text-base flex items-center justify-center gap-2 hover:bg-primary-dark transition-standard group px-2">
                  <span className="whitespace-nowrap">Recalculate Quote</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button type="button" className="bg-slate-50 text-slate-900 border border-slate-200 h-14 rounded-xl font-label-md hover:bg-slate-100 transition-standard flex items-center justify-center gap-2 px-2">
                  <span className="material-symbols-outlined">bookmark</span>
                  Save Configuration
                </button>
              </div>
            </form>
          </div>
          {/* Right Section: Results */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-gutter">
            {/* Main Cost Card */}
            <div className="bg-indigo-900 text-white rounded-xl p-card-padding bento-shadow flex flex-col justify-between min-h-[280px] transition-standard hover:-translate-y-1">
              <div>
                <span className="font-label-caps opacity-70 mb-2 block">TOTAL ESTIMATED FREIGHT</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light opacity-80">$</span>
                  <span className="font-display-xl">{totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <p className="text-sm">Price includes all mandatory port fees</p>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-3/4"></div>
                </div>
              </div>
            </div>
            {/* Breakdown Card */}
            <div className="bg-white border border-slate-100 rounded-xl p-card-padding bento-shadow flex-grow transition-standard hover:-translate-y-0.5">
              <h3 className="font-label-caps text-slate-400 mb-6">COST BREAKDOWN</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg">
                  <div>
                    <p className="font-label-md text-slate-900">Weight-to-CBM Ratio</p>
                    <p className="text-xs text-slate-500">{weightVal.toLocaleString()}kg / 500</p>
                  </div>
                  <span className="font-label-md text-slate-900">{weightCBM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg">
                  <div>
                    <p className="font-label-md text-slate-900">Chargeable Volume</p>
                    <p className="text-xs text-slate-500">Max of Actual vs. Wt/CBM</p>
                  </div>
                  <span className="font-label-md text-indigo-600">{chargeableCBM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} m³</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg">
                  <div>
                    <p className="font-label-md text-slate-900">Freight Rate</p>
                    <p className="text-xs text-slate-500">$265.00 per m³</p>
                  </div>
                  <span className="font-label-md text-slate-900">${freightCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg">
                  <div>
                    <p className="font-label-md text-slate-900">Documentation</p>
                    <p className="text-xs text-slate-500">Local service {documentation ? 'enabled' : 'disabled'}</p>
                  </div>
                  <span className="font-label-md text-slate-900">${documentationCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Featured Map Section */}
        <section className="mt-gutter">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden bento-shadow group border border-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="stylized vector world map with glowing shipping routes between China and the Middle East in navy and gold colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj7R0NY4AYP1pNi05DBl7LubLdsGvWIWXPyA431BB0ip8Bci07tW9p_PTBdirXWxMFMdA0hP-d2PN4BNxzr1N47zgu_ZjC0sDgYCnUJJBTRj44DTpBaYptE3QWl9WJ7vkgwacrBjVAw7XqHMTm9Q-d4lBa-x--sOdkEED9h4CcNidmqhaGYBnGsDxHrIxbPobtkSI10r9YBPS_Noi5HHbtngXAKRQsyIVcNSrdleaBonWQM_TYELPb5ESvqn0WcmyDYe4gq9p2J4U" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-label-caps text-indigo-300">ESTIMATED TRANSIT</p>
              <p className="font-headline-lg">18-22 Business Days</p>
            </div>
            <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
              <p className="text-xs opacity-80 uppercase font-bold tracking-widest mb-1">Carrier Status</p>
              <p className="text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                High Availability
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 font-manrope text-xs tracking-wide uppercase">
          <div className="text-lg font-bold text-slate-800 normal-case flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-700">anchor</span>
            GlobalLogix
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Carrier Network</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Documentation</a>
          </div>
          <p className="text-slate-500 text-center md:text-right normal-case tracking-normal">© {new Date().getFullYear()} GlobalLogix Logistics. Precise Freight Solutions.</p>
        </div>
      </footer>
    </>
  );
}
