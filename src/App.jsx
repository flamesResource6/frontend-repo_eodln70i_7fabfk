import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Languages, MessageCircle, Phone, Play, Send, Settings, Star, Mic, MicOff, ChevronRight, ShieldCheck, LineChart, Sparkles, Globe, Building2, Store, Bot, Headphones, BadgePercent, Clock, CreditCard, Users, ThumbsUp, BarChart3 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const texts = {
  ar: {
    langLabel: 'العربية',
    toggle: 'English',
    topBanner: 'جمعنا 5 ملايين ريال سعودي لدعم الذكاء الاصطناعي المحلي',
    headline: 'مساعد ذكي يفهم عملاءك ويتحدث بلهجة فريقك',
    subHighlight: 'يدعم أكثر من 100 لغة و25 لهجة سعودية بصوت طبيعي',
    description: 'أطلق مساعدين صوت ونص خلال دقائق. اتصل بسلة، زد، واتساب، والقنوات الحكومية.',
    btnStart: 'ابدأ مجانًا',
    btnDemo: 'شاهد العرض',
    checklist: [
      'ربط مباشر مع سلة، زد وواتساب في أقل من 10 دقائق',
      'أتمتة حتى 75% من المحادثات المتكررة',
      'إشراف بشري بقواعد قابلة للتخصيص'
    ],
    stats: [
      { value: '75%', label: 'نسبة الأتمتة' },
      { value: '40%', label: 'تخفيض التكاليف' },
      { value: '95%', label: 'رضا العملاء' },
      { value: '5 دقائق', label: 'وقت الإعداد' }
    ],
    chatTitle: 'محادثة مباشرة مع "هلا"',
    benefitsTitle: 'لماذا تختارنا',
    benefits: [
      { title: 'صندوق وارد موحّد', desc: 'يوحّد واتساب، دردشة الموقع، والهاتف في مكان واحد' },
      { title: 'تتكلم اللهجات السعودية', desc: 'تفهم وترد بلهجات المناطق المختلفة في المملكة' },
      { title: 'أمان وامتثال محلي', desc: 'استضافة داخل السعودية مع ضوابط خصوصية قوية' }
    ],
    solutionsTitle: 'حلول حسب الصناعة',
    solutions: [
      { title: 'خدمة العملاء', desc: 'يعالج 70% من الأسئلة المتكررة تلقائيًا' },
      { title: 'التجارة الإلكترونية', desc: 'يتابع الطلبات، يقترح المنتجات، ويدعم المدفوعات' },
      { title: 'الخدمات العامة', desc: 'يتوافق مع متطلبات التواصل الحكومية' }
    ],
    channelsTitle: 'قنوات التواصل',
    channels: [
      { title: 'واتساب للأعمال', desc: 'رسائل واتساب رسمية' },
      { title: 'ودجت الموقع', desc: 'صندوق دردشة على موقعك' },
      { title: 'الهاتف والصوت', desc: 'نظام هاتف آلي بصوت طبيعي' },
      { title: 'السوشيال والرسائل', desc: 'إدارة إنستغرام، إكس (تويتر)، والرسائل النصية' }
    ],
    builderTitle: 'منشئ بدون كود',
    builderSteps: [
      'عرّف شخصية المساعد ونبرة الصوت',
      'اربط مصادر المعرفة (وثائق، PDF، قواعد بيانات)',
      'انشر على القنوات بضغطة واحدة'
    ],
    analyticsTitle: 'لوحة التحليلات',
    analyticsHighlights: [
      'تفصيل النوايا — اعرض أعلى 5 أسئلة شيوعًا',
      'مراجعات الجودة — ملاحظات المشرف وسجلات التصعيد'
    ],
    fundingTitle: 'تم إغلاق جولة تمويلية بقيمة 5 ملايين ريال سعودي',
    trustBadges: [
      '99.9% جاهزية',
      'أكثر من 500 علامة سعودية',
      'أكثر من 1M محادثة مؤتمتة',
      'دعم 24/7 بالعربية والإنجليزية'
    ],
    pricingTitle: 'الأسعار',
    plans: [
      { name: 'الباقة المبدئية', price: '149 ريال/شهر', popular: false, details: ['حتى قناتين', '1,000 محادثة', 'دعم أساسي'] },
      { name: 'الباقة النامية', price: '449 ريال/شهر', popular: true, details: ['4 قنوات', '10,000 محادثة', 'دعم الصوت'] },
      { name: 'المؤسسات', price: 'سعر مخصص', popular: false, details: ['استضافة خاصة', 'أمان متقدم', 'دعم مخصص'] }
    ],
    contactTitle: 'تواصل معنا',
    contactInfo: {
      phone: 'الهاتف: +966-5-555-5555',
      email: 'البريد: hello@example.sa',
      hours: 'المواعيد: 9ص — 6م (الأحد-الخميس)'
    },
    contactCta: 'اطلب اتصال',
    liveDemoTitle: 'جرّب الدردشة المباشرة',
    inputPlaceholder: 'اكتب رسالتك...',
    record: 'تسجيل',
    stop: 'إيقاف',
    send: 'إرسال',
    footerLinks: {
      product: 'المنتج', solutions: 'الحلول', support: 'الدعم', privacy: 'الخصوصية', terms: 'الشروط'
    }
  },
  en: {
    langLabel: 'English',
    toggle: 'العربية',
    topBanner: 'We raised 5M SAR to power local AI',
    headline: 'An intelligent assistant that understands your customers and speaks like your team',
    subHighlight: 'Supports 100+ languages and 25 Saudi dialects with natural-sounding voices',
    description: 'Launch voice and text assistants in minutes. Connect to Salla, Zid, WhatsApp, and government channels.',
    btnStart: 'Start for free',
    btnDemo: 'Watch the demo',
    checklist: [
      'Direct connections to Salla, Zid, and WhatsApp in under 10 minutes',
      'Automates up to 75% of repetitive conversations',
      'Human oversight with customizable rules'
    ],
    stats: [
      { value: '75%', label: 'Automation rate' },
      { value: '40%', label: 'Cost savings' },
      { value: '95%', label: 'Customer satisfaction' },
      { value: '5 min', label: 'Setup time' }
    ],
    chatTitle: 'Live chat with "Hala"',
    benefitsTitle: 'Benefits',
    benefits: [
      { title: 'Unified Inbox', desc: 'Brings WhatsApp, website chat, and phone into one place' },
      { title: 'Speaks Saudi Dialects', desc: 'Understands and responds in different Saudi accents' },
      { title: 'Local Security & Compliance', desc: 'Hosted in Saudi Arabia with strong privacy controls' }
    ],
    solutionsTitle: 'Solutions by Industry',
    solutions: [
      { title: 'Customer Care', desc: 'Handles 70% of repetitive questions automatically' },
      { title: 'E-commerce', desc: 'Tracks orders, suggests products, supports payments' },
      { title: 'Public Services', desc: 'Meets government communication requirements' }
    ],
    channelsTitle: 'Communication Channels',
    channels: [
      { title: 'WhatsApp Business', desc: 'Official WhatsApp messages' },
      { title: 'Website Widget', desc: 'Chat box on your website' },
      { title: 'Phone & Voice', desc: 'Automated phone system with natural voice' },
      { title: 'Social & SMS', desc: 'Manages Instagram, X (Twitter), and text messages' }
    ],
    builderTitle: 'No-Code Builder',
    builderSteps: [
      'Define the assistant’s personality and tone',
      'Connect knowledge sources (documents, PDFs, databases)',
      'Publish to channels with one click'
    ],
    analyticsTitle: 'Analytics Dashboard',
    analyticsHighlights: [
      'Intent breakdown — See top 5 most common questions',
      'Quality reviews — Supervisor feedback and escalation logs'
    ],
    fundingTitle: 'Closed a 5M SAR funding round',
    trustBadges: [
      '99.9% uptime',
      '500+ Saudi brands served',
      '1M+ automated conversations',
      '24/7 Arabic & English support'
    ],
    pricingTitle: 'Pricing',
    plans: [
      { name: 'Starter', price: '149 SAR/month', popular: false, details: ['Up to 2 channels', '1,000 conversations', 'Basic support'] },
      { name: 'Growth', price: '449 SAR/month', popular: true, details: ['4 channels', '10K conversations', 'Voice support'] },
      { name: 'Enterprise', price: 'Custom pricing', popular: false, details: ['Private hosting', 'Advanced security', 'Dedicated support'] }
    ],
    contactTitle: 'Contact',
    contactInfo: {
      phone: 'Phone: +966-5-555-5555',
      email: 'Email: hello@example.sa',
      hours: 'Hours: 9am — 6pm (Sun-Thu)'
    },
    contactCta: 'Request a call',
    liveDemoTitle: 'Live Chat Demo',
    inputPlaceholder: 'Type your message...',
    record: 'Record',
    stop: 'Stop',
    send: 'Send',
    footerLinks: { product: 'Product', solutions: 'Solutions', support: 'Support', privacy: 'Privacy', terms: 'Terms' }
  }
}

function TopBanner({ t, rtl }) {
  return (
    <div className={`w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-orange-500 text-white text-sm md:text-base py-2 px-4 ${rtl ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-medium flex items-center gap-2"><Sparkles className="w-4 h-4"/>{t.topBanner}</span>
        <span className="opacity-80 hidden sm:flex items-center gap-2"><ShieldCheck className="w-4 h-4"/>KSA</span>
      </div>
    </div>
  )
}

function Navbar({ lang, setLang, t, rtl }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`flex items-center ${rtl ? 'flex-row-reverse' : ''} gap-3`}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">HA</div>
          <div className="text-sm md:text-base text-white/90 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20">
            AI Voice Agent
          </div>
        </div>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-full shadow">
          <Languages className="w-4 h-4"/>
          <span className="text-sm font-medium">{t.toggle}</span>
        </button>
      </div>
    </div>
  )
}

function Hero({ t, rtl }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
          <div className={`grid md:grid-cols-2 gap-10 items-center ${rtl ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-sm text-gray-700 border border-white/60">
                <Globe className="w-4 h-4"/>
                <span>{t.subHighlight}</span>
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                {t.headline}
              </h1>
              <p className="mt-4 text-white/90 text-base md:text-lg">{t.description}</p>
              <div className={`mt-6 flex ${rtl ? 'justify-end' : 'justify-start'} gap-3`}>
                <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:opacity-95">
                  {t.btnStart}
                </button>
                <button className="px-5 py-3 rounded-xl bg-white/90 backdrop-blur text-gray-900 font-semibold border border-gray-200 flex items-center gap-2 hover:bg-white">
                  <Play className="w-4 h-4"/>{t.btnDemo}
                </button>
              </div>
              <ul className={`mt-6 space-y-2 ${rtl ? 'list-none' : 'list-none'}`}>
                {t.checklist.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="mt-1 w-5 h-5 rounded-full bg-white/30 text-white flex items-center justify-center"><Check className="w-3 h-3"/></div>
                    <span className="leading-7 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.stats.map((s, i) => (
                  <div key={i} className="rounded-xl bg-white/80 backdrop-blur border border-white/60 p-4 text-center shadow">
                    <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[520px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-orange-400/20 pointer-events-none" />
                <ChatPreview t={t} rtl={rtl} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  )
}

function ChatPreview({ t, rtl }) {
  const [messages, setMessages] = useState([
    { from: 'user', text: rtl ? 'السلام عليكم، أريد تتبّع طلبي' : 'Hi, I want to track my order' },
    { from: 'bot', text: rtl ? 'مرحبًا! يسعدني مساعدتك. هل لديك رقم الطلب؟' : 'Hello! Happy to help. Do you have the order number?' },
    { from: 'user', text: rtl ? 'نعم: 12345' : 'Yes: 12345' },
    { from: 'bot', text: rtl ? 'تم العثور على الطلب. يصل خلال 2-3 أيام بإذن الله.' : 'Found it. It will arrive in 2-3 days.' }
  ])
  const [input, setInput] = useState('')
  const [recording, setRecording] = useState(false)
  const mediaRecorderRef = useRef(null)

  const handleSend = () => {
    if (!input.trim()) return
    const newMsgs = [...messages, { from: 'user', text: input }]
    setMessages(newMsgs)
    setInput('')
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: rtl ? 'تم استلام رسالتك — هلا تساعدك الآن.' : 'Got it — Hala is on it.' }])
    }, 600)
  }

  async function toggleRecord() {
    if (recording) {
      mediaRecorderRef.current?.stop()
      setRecording(false)
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      const chunks = []
      mr.ondataavailable = e => chunks.push(e.data)
      mr.onstop = () => {
        // In a real app we would send audio to backend ASR
        setMessages(m => [...m, { from: 'user', text: rtl ? 'تم تسجيل رسالة صوتية 🎤' : 'Voice message recorded 🎤' }])
      }
      mediaRecorderRef.current = mr
      mr.start()
      setRecording(true)
    } catch (e) {
      alert(rtl ? 'فشل الوصول للميكروفون' : 'Microphone access failed')
    }
  }

  return (
    <div className={`h-full w-full bg-white/80 backdrop-blur-xl ${rtl ? 'text-right' : 'text-left'} p-4 flex flex-col`}>
      <div className="flex items-center gap-2 pb-3 border-b">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold">H</div>
        <div className="font-semibold text-gray-900">{t.chatTitle}</div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 py-3">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[80%] ${m.from === 'user' ? (rtl ? 'ml-auto' : 'mr-auto') : (rtl ? 'mr-auto' : 'ml-auto')}`}>
            <div className={`${m.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} px-3 py-2 rounded-2xl shadow`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className={`mt-2 flex items-center gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
        <button onClick={toggleRecord} className={`px-3 py-2 rounded-lg border ${recording ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-gray-800 border-gray-200'} flex items-center gap-2`}>
          {recording ? <MicOff className="w-4 h-4"/> : <Mic className="w-4 h-4"/>}
          <span className="text-sm">{recording ? t.stop : t.record}</span>
        </button>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={t.inputPlaceholder} className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"/>
        <button onClick={handleSend} className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center gap-2">
          <Send className="w-4 h-4"/><span className="text-sm">{t.send}</span>
        </button>
      </div>
    </div>
  )
}

function Benefits({ t, rtl }) {
  const icons = [InboxIcon, MessageIcon, ShieldIcon]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.benefitsTitle}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                {icons[i % icons.length]()} 
              </div>
              <h3 className={`mt-4 font-bold text-lg ${rtl ? 'text-right' : 'text-left'}`}>{b.title}</h3>
              <p className={`mt-2 text-gray-700 ${rtl ? 'text-right' : 'text-left'}`}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Solutions({ t, rtl }) {
  const solIcons = [Headphones, Store, Building2]
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.solutionsTitle}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.solutions.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                {React.createElement(solIcons[i], { className: 'w-6 h-6' })}
              </div>
              <h3 className={`mt-4 font-bold text-lg ${rtl ? 'text-right' : 'text-left'}`}>{s.title}</h3>
              <p className={`mt-2 text-gray-700 ${rtl ? 'text-right' : 'text-left'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Channels({ t, rtl }) {
  const chIcons = [MessageCircle, Bot, Phone, BadgePercent]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.channelsTitle}</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {t.channels.map((c, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                {React.createElement(chIcons[i], { className: 'w-6 h-6' })}
              </div>
              <h3 className={`mt-4 font-bold text-lg ${rtl ? 'text-right' : 'text-left'}`}>{c.title}</h3>
              <p className={`mt-2 text-gray-700 ${rtl ? 'text-right' : 'text-left'}`}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Builder({ t, rtl }) {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.builderTitle}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.builderSteps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold">{i+1}</div>
                <div className="font-semibold">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Analytics({ t, rtl }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.analyticsTitle}</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl p-6 bg-white border">
            <div className="h-48 w-full bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl flex items-end">
              <div className="flex w-full items-end gap-2 p-4">
                {[30, 50, 80, 60, 90, 70, 100, 65, 85, 75, 95, 110].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t" style={{ height: `${Math.min(h, 110)}px` }} />
                ))}
              </div>
            </div>
            <div className={`mt-3 text-sm text-gray-600 ${rtl ? 'text-right' : 'text-left'}`}>Monthly conversations</div>
          </div>
          <div className="space-y-3">
            {t.analyticsHighlights.map((a, i) => (
              <div key={i} className="rounded-xl p-4 bg-white border flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-purple-600"/>
                <div className="font-medium">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Funding({ t, rtl }) {
  const icons = [ShieldCheck, Users, MessageCircle, Headphones]
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col md:flex-row ${rtl ? 'md:flex-row-reverse' : ''} items-center justify-between gap-6`}>
          <h2 className="text-2xl md:text-3xl font-extrabold">{t.fundingTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {t.trustBadges.map((b, i)=>(
              <div key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 flex items-center gap-2">
                {React.createElement(icons[i%icons.length], { className: 'w-4 h-4' })}
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing({ t, rtl }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${rtl ? 'text-right' : 'text-left'}`}>{t.pricingTitle}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.plans.map((p, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${p.popular ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">{p.name}</div>
                {p.popular && <div className="text-xs px-2 py-1 rounded-full bg-white/20">Most popular</div>}
              </div>
              <div className={`mt-2 text-2xl font-extrabold ${p.popular ? 'text-white' : 'text-gray-900'}`}>{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.details.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${p.popular ? 'text-white' : 'text-green-600'}`}/>
                    <span className={`${p.popular ? 'text-white/90' : 'text-gray-700'}`}>{d}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl font-semibold ${p.popular ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}> {rtl ? 'اختر الباقة' : 'Choose plan'} </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ t, rtl }) {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-8 ${rtl ? 'text-right' : 'text-left'}`}>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">{t.contactTitle}</h2>
            <div className="mt-4 space-y-2 text-gray-700">
              <div>{t.contactInfo.phone}</div>
              <div>{t.contactInfo.email}</div>
              <div>{t.contactInfo.hours}</div>
            </div>
            <form className="mt-6 space-y-3">
              <input className="w-full px-4 py-3 rounded-xl border" placeholder={rtl ? 'الاسم' : 'Name'} />
              <input className="w-full px-4 py-3 rounded-xl border" placeholder={rtl ? 'البريد الإلكتروني' : 'Email'} />
              <textarea className="w-full px-4 py-3 rounded-xl border" rows="4" placeholder={rtl ? 'كيف نساعدك؟' : 'How can we help?'} />
              <button type="button" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">{t.contactCta}</button>
            </form>
          </div>
          <div>
            <LiveChat t={t} rtl={rtl} />
          </div>
        </div>
      </div>
    </section>
  )
}

function LiveChat({ t, rtl }) {
  const [log, setLog] = useState([
    { from: 'bot', text: rtl ? 'أهلًا! أنا هلا. كيف أقدر أساعدك اليوم؟' : 'Hi! I’m Hala. How can I help today?' }
  ])
  const [text, setText] = useState('')

  const onSend = () => {
    if (!text.trim()) return
    setLog(l => [...l, { from: 'user', text }, { from: 'bot', text: rtl ? 'تم — أعطيني دقيقة للمعالجة 🤖' : 'Done — give me a sec 🤖' }])
    setText('')
  }

  return (
    <div className="rounded-2xl bg-white border p-4 h-full min-h-[420px] flex flex-col">
      <div className="font-semibold flex items-center gap-2"><MessageCircle className="w-4 h-4 text-purple-600"/>{t.liveDemoTitle}</div>
      <div className="flex-1 overflow-y-auto space-y-2 py-3">
        {log.map((m, i) => (
          <div key={i} className={`max-w-[85%] ${m.from==='user' ? (rtl ? 'ml-auto' : 'mr-auto') : (rtl ? 'mr-auto' : 'ml-auto')}`}>
            <div className={`${m.from==='user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-3 py-2`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className={`mt-2 flex items-center gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder={t.inputPlaceholder} className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        <button onClick={onSend} className="px-3 py-2 rounded-lg bg-gray-900 text-white flex items-center gap-2"><Send className="w-4 h-4"/>{t.send}</button>
      </div>
    </div>
  )
}

// Simple icon helpers
function InboxIcon(){ return <div className="w-6 h-6">📥</div> }
function MessageIcon(){ return <div className="w-6 h-6">🗣️</div> }
function ShieldIcon(){ return <div className="w-6 h-6">🛡️</div> }

export default function App(){
  const [lang, setLang] = useState('ar')
  const rtl = lang === 'ar'
  const t = texts[lang]

  useEffect(()=>{
    document.dir = rtl ? 'rtl' : 'ltr'
  }, [rtl])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <TopBanner t={t} rtl={rtl} />
      <Navbar lang={lang} setLang={setLang} t={t} rtl={rtl} />
      <Hero t={t} rtl={rtl} />
      <main>
        <Benefits t={t} rtl={rtl} />
        <Solutions t={t} rtl={rtl} />
        <Channels t={t} rtl={rtl} />
        <Builder t={t} rtl={rtl} />
        <Analytics t={t} rtl={rtl} />
        <Funding t={t} rtl={rtl} />
        <Pricing t={t} rtl={rtl} />
        <Contact t={t} rtl={rtl} />
      </main>
      <footer className="py-10 border-t bg-white/70 backdrop-blur">
        <div className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row ${rtl ? 'md:flex-row-reverse' : ''} items-center justify-between gap-4`}>
          <div className="text-gray-600 text-sm">© {new Date().getFullYear()} Hala AI</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-purple-600" href="#">{t.footerLinks.product}</a>
            <a className="hover:text-purple-600" href="#">{t.footerLinks.solutions}</a>
            <a className="hover:text-purple-600" href="#">{t.footerLinks.support}</a>
            <a className="hover:text-purple-600" href="#">{t.footerLinks.privacy}</a>
            <a className="hover:text-purple-600" href="#">{t.footerLinks.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
