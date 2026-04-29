"use client";

import React, { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    brand: "GlobalLogix",
    solutions: "Solutions",
    rates: "Rates",
    tracking: "Tracking",
    support: "Support",
    getQuote: "Get Quote",
    heroSubtitle: "PREMIUM FREIGHT CALCULATOR",
    origin: "Guangzhou",
    destination: "Jebel Ali",
    freightType: "Standard Ocean Freight (LCL)",
    shipmentDetails: "Shipment Details",
    grossWeight: "Gross Weight (kg)",
    totalVolume: "Total Volume (CBM)",
    placeholderWeight: "e.g. 1250",
    placeholderVolume: "e.g. 2.5",
    localDocService: "Local Documentation Service",
    flatFee: "Flat fee of $150.00",
    calculateQuote: "Calculate Quote",
    saveConfig: "Save Configuration",
    saved: "Saved!",
    totalFreight: "TOTAL ESTIMATED FREIGHT",
    priceIncludes: "Price includes all mandatory port fees",
    costBreakdown: "COST BREAKDOWN",
    weightToCbm: "Weight-to-CBM Ratio",
    chargeableVolume: "Chargeable Volume",
    maxOfActual: "Max of Actual vs. Wt/CBM",
    freightRate: "Freight Rate",
    perCbm: "$265.00 per m³",
    documentation: "Documentation",
    localServiceEnabled: "Local service enabled",
    localServiceDisabled: "Local service disabled",
    estimatedTransit: "ESTIMATED TRANSIT",
    transitDays: "18-22 Business Days",
    carrierStatus: "Carrier Status",
    highAvailability: "High Availability",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    carrierNetwork: "Carrier Network",
    apiDocumentation: "Documentation",
    footerCopyright: "GlobalLogix Logistics. Precise Freight Solutions.",
    toastRequired: "is required",
    toastGreater0: "Must be greater than 0",
    toastSuccess: "Quote calculated successfully!",
    toastSaved: "Configuration saved for later!",
    toastErrorFix: "Please fix errors before saving",
    toastPdf: "Downloading quote PDF...",
    toastDev: "coming soon!",
  },
  zh: {
    brand: "环球物流",
    solutions: "解决方案",
    rates: "运费",
    tracking: "物流追踪",
    support: "支持",
    getQuote: "获取报价",
    heroSubtitle: "高级运费计算器",
    origin: "广州",
    destination: "杰贝阿里",
    freightType: "标准海运 (拼箱 LCL)",
    shipmentDetails: "货物详情",
    grossWeight: "毛重 (kg)",
    totalVolume: "总体积 (CBM)",
    placeholderWeight: "例如: 1250",
    placeholderVolume: "例如: 2.5",
    localDocService: "本地文件服务",
    flatFee: "固定费用 $150.00",
    calculateQuote: "计算报价",
    saveConfig: "保存配置",
    saved: "已保存!",
    totalFreight: "预估总运费",
    priceIncludes: "价格包含所有强制性港口费用",
    costBreakdown: "费用明细",
    weightToCbm: "重量体积比",
    chargeableVolume: "计费体积",
    maxOfActual: "取实际体积与重抛比最大值",
    freightRate: "运费率",
    perCbm: "$265.00 / 立方米",
    documentation: "文件费",
    localServiceEnabled: "已启用本地服务",
    localServiceDisabled: "未启用本地服务",
    estimatedTransit: "预计航程",
    transitDays: "18-22 个工作日",
    carrierStatus: "承运状态",
    highAvailability: "舱位充足",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    carrierNetwork: "承运网络",
    apiDocumentation: "API 文档",
    footerCopyright: "GlobalLogix 物流。精准的货运解决方案。",
    toastRequired: "不能为空",
    toastGreater0: "必须大于 0",
    toastSuccess: "报价计算成功！",
    toastSaved: "配置已保存！",
    toastErrorFix: "请在保存前修复错误",
    toastPdf: "正在下载报价 PDF...",
    toastDev: "即将推出！",
  },
  ar: {
    brand: "جلوبال لوجيكس",
    solutions: "الحلول",
    rates: "الأسعار",
    tracking: "التتبع",
    support: "الدعم",
    getQuote: "احصل على تسعيرة",
    heroSubtitle: "حاسبة الشحن المميزة",
    origin: "قوانغتشو",
    destination: "جبل علي",
    freightType: "شحن بحري قياسي (LCL)",
    shipmentDetails: "تفاصيل الشحنة",
    grossWeight: "الوزن الإجمالي (كجم)",
    totalVolume: "الحجم الإجمالي (CBM)",
    placeholderWeight: "مثال: 1250",
    placeholderVolume: "مثال: 2.5",
    localDocService: "خدمة التوثيق المحلي",
    flatFee: "رسوم ثابتة $150.00",
    calculateQuote: "حساب التسعيرة",
    saveConfig: "حفظ الإعدادات",
    saved: "تم الحفظ!",
    totalFreight: "إجمالي الشحن المقدر",
    priceIncludes: "السعر يشمل جميع رسوم الميناء الإلزامية",
    costBreakdown: "تفصيل التكلفة",
    weightToCbm: "نسبة الوزن إلى الحجم",
    chargeableVolume: "الحجم الخاضع للرسوم",
    maxOfActual: "الأعلى من الفعلي أو نسبة الوزن",
    freightRate: "سعر الشحن",
    perCbm: "$265.00 لكل متر مكعب",
    documentation: "التوثيق",
    localServiceEnabled: "خدمة محلية مفعلة",
    localServiceDisabled: "خدمة محلية معطلة",
    estimatedTransit: "مدة العبور المقدرة",
    transitDays: "18-22 يوم عمل",
    carrierStatus: "حالة الناقل",
    highAvailability: "توفر عالي",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    carrierNetwork: "شبكة الناقلين",
    apiDocumentation: "التوثيق",
    footerCopyright: "جلوبال لوجيكس للخدمات اللوجستية. حلول شحن دقيقة.",
    toastRequired: "مطلوب",
    toastGreater0: "يجب أن يكون أكبر من 0",
    toastSuccess: "تم حساب التسعيرة بنجاح!",
    toastSaved: "تم حفظ الإعدادات لاحقاً!",
    toastErrorFix: "يرجى إصلاح الأخطاء قبل الحفظ",
    toastPdf: "جاري تحميل تسعيرة PDF...",
    toastDev: "قريباً!",
  }
};

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[language];

  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [documentation, setDocumentation] = useState(true);
  
  const [weightError, setWeightError] = useState("");
  const [volumeError, setVolumeError] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load from local storage on mount if available
  useEffect(() => {
    const saved = localStorage.getItem('globalLogixConfig');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.weight) setWeight(parsed.weight);
        if (parsed.volume) setVolume(parsed.volume);
        if (typeof parsed.documentation === 'boolean') setDocumentation(parsed.documentation);
        if (parsed.language && translations[parsed.language]) setLanguage(parsed.language);
        setHasCalculated(true);
      } catch (e) {
        // ignore JSON parse errors
      }
    }
  }, []);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    setLangDropdownOpen(false);
    showToast(langCode === 'en' ? 'Language changed to English' : langCode === 'zh' ? '语言已切换至中文' : 'تم تغيير اللغة إلى العربية');
    
    // Save preference
    const saved = localStorage.getItem('globalLogixConfig');
    try {
      const parsed = saved ? JSON.parse(saved) : {};
      parsed.language = langCode;
      localStorage.setItem('globalLogixConfig', JSON.stringify(parsed));
    } catch (e) {}
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const validate = () => {
    let isValid = true;
    setWeightError("");
    setVolumeError("");

    if (weight === "" || weight === null) {
      setWeightError(`${t.grossWeight} ${t.toastRequired}`);
      isValid = false;
    } else if (isNaN(weight) || weight <= 0) {
      setWeightError(t.toastGreater0);
      isValid = false;
    }

    if (volume === "" || volume === null) {
      setVolumeError(`${t.totalVolume} ${t.toastRequired}`);
      isValid = false;
    } else if (isNaN(volume) || volume <= 0) {
      setVolumeError(t.toastGreater0);
      isValid = false;
    }

    return isValid;
  };

  const handleRecalculate = (e) => {
    e.preventDefault();
    if (validate()) {
      setHasCalculated(true);
      setIsSaved(false);
      showToast(t.toastSuccess);
    } else {
      setHasCalculated(false);
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('globalLogixConfig', JSON.stringify({ weight, volume, documentation, language }));
      setIsSaved(true);
      setHasCalculated(true);
      showToast(t.toastSaved);
      setTimeout(() => setIsSaved(false), 3000);
    } else {
      showToast(t.toastErrorFix);
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Calculation Logic
  const weightVal = typeof weight === "number" || (typeof weight === "string" && weight !== "") ? parseFloat(weight) : 0;
  const volumeVal = typeof volume === "number" || (typeof volume === "string" && volume !== "") ? parseFloat(volume) : 0;

  const weightCBM = weightVal > 0 ? weightVal / 500 : 0;
  const chargeableCBM = Math.max(weightCBM, volumeVal);
  const freightCost = chargeableCBM * 265;
  const documentationCost = documentation ? 150 : 0;
  const totalCost = freightCost + documentationCost;

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-sans' : ''}>
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <nav className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between font-manrope antialiased text-sm tracking-tight">
          <div className="text-xl font-bold tracking-tighter text-slate-900 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>{t.brand}</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1 hover:text-indigo-500 transition-all duration-200" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.solutions} ${t.toastDev}`); }}>{t.solutions}</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#" onClick={(e) => { e.preventDefault(); scrollToCalculator(); }}>{t.rates}</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.tracking} ${t.toastDev}`); }}>{t.tracking}</a>
            <a className="text-slate-500 font-medium hover:text-indigo-500 transition-all duration-200" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.support} ${t.toastDev}`); }}>{t.support}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-500 mr-2 relative" ref={dropdownRef}>
              <span className="material-symbols-outlined cursor-pointer hover:text-indigo-600 transition-standard" onClick={() => setLangDropdownOpen(!langDropdownOpen)}>language</span>
              
              {/* Language Dropdown */}
              {langDropdownOpen && (
                <div className="absolute top-10 right-0 md:right-auto md:left-0 bg-white border border-slate-100 rounded-xl shadow-lg w-32 py-2 z-50 flex flex-col font-label-md">
                  <button onClick={() => changeLanguage('en')} className={`px-4 py-2 text-left hover:bg-slate-50 transition-colors ${language === 'en' ? 'text-primary font-bold' : 'text-slate-700'}`}>English</button>
                  <button onClick={() => changeLanguage('zh')} className={`px-4 py-2 text-left hover:bg-slate-50 transition-colors ${language === 'zh' ? 'text-primary font-bold' : 'text-slate-700'}`}>中文 (Chinese)</button>
                  <button onClick={() => changeLanguage('ar')} className={`px-4 py-2 text-left hover:bg-slate-50 transition-colors ${language === 'ar' ? 'text-primary font-bold' : 'text-slate-700'}`}>العربية (Arabic)</button>
                </div>
              )}
              
              <span className="material-symbols-outlined cursor-pointer hover:text-indigo-600 transition-standard" onClick={() => showToast("Client login portal opened")}>account_circle</span>
            </div>
            <button onClick={scrollToCalculator} className="bg-primary text-white px-5 py-2 rounded-lg font-label-md hover:bg-primary-dark active:scale-95 transition-standard">
              {t.getQuote}
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-primary tracking-widest mb-3 block">{t.heroSubtitle}</span>
              <h1 className="font-display-xl text-slate-900 flex items-center flex-wrap gap-2 sm:gap-4">
                <span>{t.origin}</span>
                <span className={`material-symbols-outlined text-slate-300 text-3xl sm:text-4xl mx-1 sm:mx-0 translate-y-1 ${language === 'ar' ? 'rotate-180' : ''}`}>east</span> 
                <span>{t.destination}</span>
              </h1>
            </div>
            <div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-2 w-fit cursor-help" onClick={() => showToast("LCL (Less than Container Load) shipping mode selected")}>
              <span className="material-symbols-outlined text-primary">sailing</span>
              <span className="font-label-md text-on-surface">{t.freightType}</span>
            </div>
          </div>
        </section>

        {/* Main Bento Grid */}
        <div id="calculator" className="grid grid-cols-1 md:grid-cols-12 gap-gutter scroll-mt-24">
          {/* Left Section: Input Form */}
          <div className="md:col-span-7 lg:col-span-8 bg-white border border-slate-100 rounded-xl p-card-padding bento-shadow transition-standard hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <h2 className="font-headline-md text-slate-900">{t.shipmentDetails}</h2>
            </div>
            <form onSubmit={handleRecalculate} className="space-y-stack-lg" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
                <div className="space-y-2">
                  <label className="font-label-md text-slate-700">{t.grossWeight}</label>
                  <div className="relative group">
                    <input 
                      className={`w-full h-14 bg-slate-50 border rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-standard ${weightError ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                      placeholder={t.placeholderWeight} 
                      type="number" 
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.target.value);
                        if(weightError) setWeightError("");
                      }}
                      min="0.1"
                      step="any"
                    />
                    <span className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-4 text-slate-400 font-label-md`}>kg</span>
                  </div>
                  {weightError && <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span> {weightError}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-slate-700">{t.totalVolume}</label>
                  <div className="relative group">
                    <input 
                      className={`w-full h-14 bg-slate-50 border rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-standard ${volumeError ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                      placeholder={t.placeholderVolume}
                      type="number" 
                      value={volume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                        if(volumeError) setVolumeError("");
                      }}
                      min="0.01"
                      step="any"
                    />
                    <span className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-4 text-slate-400 font-label-md`}>m³</span>
                  </div>
                  {volumeError && <p className="text-red-500 text-xs font-semibold mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span> {volumeError}</p>}
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-100 text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-label-md text-slate-900">{t.localDocService}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.flatFee}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer self-end sm:self-auto shrink-0">
                  <input 
                    checked={documentation}
                    onChange={(e) => setDocumentation(e.target.checked)}
                    className="sr-only peer" 
                    type="checkbox"
                  />
                  <div className={`w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer ${language === 'ar' ? 'peer-checked:after:-translate-x-full' : 'peer-checked:after:translate-x-full'} peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary`}></div>
                </label>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md pt-4">
                <button type="submit" className="bg-primary text-white h-14 rounded-xl font-label-md md:text-base flex items-center justify-center gap-2 hover:bg-primary-dark transition-standard group px-2">
                  <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">{t.calculateQuote}</span>
                  <span className={`material-symbols-outlined transition-transform text-sm sm:text-base ${language === 'ar' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
                </button>
                <button type="button" onClick={handleSave} className="bg-slate-50 text-slate-900 border border-slate-200 h-14 rounded-xl font-label-md hover:bg-slate-100 transition-standard flex items-center justify-center gap-2 px-2">
                  <span className={`material-symbols-outlined text-sm sm:text-base ${isSaved ? 'text-emerald-500' : ''}`}>{isSaved ? 'check_circle' : 'bookmark'}</span>
                  <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">{isSaved ? t.saved : t.saveConfig}</span>
                </button>
              </div>
            </form>
          </div>
          {/* Right Section: Results */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-gutter">
            {/* Main Cost Card */}
            <div className="bg-indigo-900 text-white rounded-xl p-card-padding bento-shadow flex flex-col justify-between min-h-[280px] transition-standard hover:-translate-y-1 relative overflow-hidden group">
              <div className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                <button onClick={() => showToast(t.toastPdf)} className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-lg flex items-center justify-center transition-standard">
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
              <div>
                <span className="font-label-caps opacity-70 mb-2 block">{t.totalFreight}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light opacity-80">$</span>
                  <span className="font-display-xl">
                    {hasCalculated ? totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}
                  </span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-primary-fixed-dim">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <p className="text-sm">{t.priceIncludes}</p>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className={`bg-white h-full transition-all duration-1000 ${hasCalculated ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            </div>
            {/* Breakdown Card */}
            <div className={`bg-white border border-slate-100 rounded-xl p-card-padding bento-shadow flex-grow transition-standard ${!hasCalculated && 'opacity-50 grayscale'}`}>
              <h3 className="font-label-caps text-slate-400 mb-6">{t.costBreakdown}</h3>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg gap-1">
                  <div>
                    <p className="font-label-md text-slate-900">{t.weightToCbm}</p>
                    <p className="text-xs text-slate-500">{hasCalculated ? weightVal.toLocaleString() : "0"}kg / 500</p>
                  </div>
                  <span className={`font-label-md text-slate-900 ${language === 'ar' ? 'self-start sm:self-auto' : 'self-end sm:self-auto'}`}>{hasCalculated ? weightCBM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "-"}</span>
                </li>
                <li className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg gap-1">
                  <div>
                    <p className="font-label-md text-slate-900">{t.chargeableVolume}</p>
                    <p className="text-xs text-slate-500">{t.maxOfActual}</p>
                  </div>
                  <span className={`font-label-md text-indigo-600 ${language === 'ar' ? 'self-start sm:self-auto' : 'self-end sm:self-auto'}`}>{hasCalculated ? chargeableCBM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "-"} m³</span>
                </li>
                <li className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg gap-1">
                  <div>
                    <p className="font-label-md text-slate-900">{t.freightRate}</p>
                    <p className="text-xs text-slate-500">{t.perCbm}</p>
                  </div>
                  <span className={`font-label-md text-slate-900 ${language === 'ar' ? 'self-start sm:self-auto' : 'self-end sm:self-auto'}`}>{hasCalculated ? `$${freightCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "-"}</span>
                </li>
                <li className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-slate-50 hover:bg-slate-50 transition-standard px-2 -mx-2 rounded-lg gap-1">
                  <div>
                    <p className="font-label-md text-slate-900">{t.documentation}</p>
                    <p className="text-xs text-slate-500">{documentation ? t.localServiceEnabled : t.localServiceDisabled}</p>
                  </div>
                  <span className={`font-label-md text-slate-900 ${language === 'ar' ? 'self-start sm:self-auto' : 'self-end sm:self-auto'}`}>{hasCalculated ? `$${documentationCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "-"}</span>
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
            <div className={`absolute bottom-8 ${language === 'ar' ? 'right-8' : 'left-8'} text-white`}>
              <p className="font-label-caps text-indigo-300">{t.estimatedTransit}</p>
              <p className="font-headline-lg">{t.transitDays}</p>
            </div>
            <div className={`absolute top-8 ${language === 'ar' ? 'left-8' : 'right-8'} bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white cursor-pointer hover:bg-white/30 transition-standard`} onClick={() => showToast("Carrier routing matrix loaded")}>
              <p className="text-xs opacity-80 uppercase font-bold tracking-widest mb-1">{t.carrierStatus}</p>
              <p className="text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {t.highAvailability}
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 font-manrope text-xs tracking-wide uppercase">
          <div className="text-lg font-bold text-slate-800 normal-case flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="material-symbols-outlined text-indigo-700">anchor</span>
            {t.brand}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.privacyPolicy} opened`); }}>{t.privacyPolicy}</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.termsOfService} opened`); }}>{t.termsOfService}</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.carrierNetwork} opened`); }}>{t.carrierNetwork}</a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast(`${t.apiDocumentation} opened`); }}>{t.apiDocumentation}</a>
          </div>
          <p className="text-slate-500 text-center md:text-right normal-case tracking-normal">© {new Date().getFullYear()} {t.footerCopyright}</p>
        </div>
      </footer>

      {/* Global Toast Notification */}
      <div className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-[100] flex items-center gap-3 font-label-md transition-all duration-300 transform ${toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <span className="material-symbols-outlined text-emerald-400">info</span>
        {toastMessage}
      </div>
    </div>
  );
}
