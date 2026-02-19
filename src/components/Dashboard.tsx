import { marketingPlan } from '../data';
import { Calendar, MessageSquare, Lightbulb, Wrench, FileText, CheckCircle2 } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {marketingPlan.marketing_plan_title}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          دليلك الشامل لإطلاق مطعمك بنجاح باستخدام أحدث أدوات الذكاء الاصطناعي.
        </p>
      </header>

      {/* Executive Summary */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">الملخص التنفيذي</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {marketingPlan.executive_summary.map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Calendar */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">خطة المحتوى (4 أسابيع)</h2>
        </div>
        
        <div className="space-y-8">
          {/* Week 1 - Detailed */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">الأسبوع الأول</span>
              {marketingPlan.content_calendar.week_1.theme}
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {marketingPlan.content_calendar.week_1.days.map((day) => (
                <div key={day.day} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-indigo-200 transition-colors">
                  <div className="font-bold text-indigo-600 mb-3">اليوم {day.day}</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-blue-600 shrink-0">فيسبوك:</span>
                      <span className="text-gray-700">{day.facebook}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-pink-600 shrink-0">إنستجرام:</span>
                      <span className="text-gray-700">{day.instagram_reel}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-black shrink-0">تيك توك:</span>
                      <span className="text-gray-700">{day.tiktok}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Weeks 2, 3, 4 - Summary */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { week: 'الأسبوع الثاني', data: marketingPlan.content_calendar.week_2 },
              { week: 'الأسبوع الثالث', data: marketingPlan.content_calendar.week_3 },
              { week: 'الأسبوع الرابع', data: marketingPlan.content_calendar.week_4 },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex flex-col gap-1">
                  <span className="text-indigo-600 text-sm">{item.week}</span>
                  {item.data.theme}
                </h3>
                <ul className="space-y-2">
                  {item.data.schedule.map((task, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0"></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Prompts */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-7 h-7 text-amber-500" />
            <h2 className="text-2xl font-semibold text-gray-900">أوامر الذكاء الاصطناعي (Prompts)</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(marketingPlan.ai_prompts).map(([key, prompt]) => (
              <div key={key} className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100/50">
                <p className="text-gray-800 text-sm leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chatbot Responses */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-7 h-7 text-emerald-500" />
            <h2 className="text-2xl font-semibold text-gray-900">ردود الشات بوت</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(marketingPlan.chatbot_responses).map(([key, response]) => (
              <div key={key} className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100/50">
                <div className="text-xs font-semibold text-emerald-600 mb-1 uppercase tracking-wider">{key.replace('_', ' ')}</div>
                <p className="text-gray-800 text-sm">{response}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recommended Tools */}
      <section className="bg-gray-900 rounded-3xl p-8 shadow-lg text-white">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-indigo-400" />
          <h2 className="text-2xl font-semibold">أدوات الذكاء الاصطناعي المجانية</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(marketingPlan.recommended_free_ai_tools).map(([category, tools]) => (
            <div key={category} className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-medium text-indigo-300 mb-4 capitalize">
                {category.replace(/_/g, ' ')}
              </h3>
              <ul className="space-y-2">
                {tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
