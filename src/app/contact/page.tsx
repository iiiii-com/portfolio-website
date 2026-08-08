"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, Palette, ArrowRight, Check } from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-8">
            联系我
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="sr-only">
                姓名
              </label>
              <input
                type="text"
                id="name"
                placeholder="您的姓名"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 transition-colors text-base font-light"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                placeholder="您的邮箱"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 transition-colors text-base font-light"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                留言
              </label>
              <textarea
                id="message"
                placeholder="请输入留言内容..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-300 transition-colors text-base font-light resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 border text-sm tracking-[0.2em] font-light transition-all duration-300 flex items-center justify-center gap-2 ${
                submitted
                  ? "border-green-700 text-green-400 bg-green-900/20"
                  : "border-zinc-700 text-zinc-300 hover:border-white hover:text-white hover:bg-zinc-800"
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  发送成功
                </>
              ) : (
                "发送消息"
              )}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-10">
            关注我
          </h2>

          <div className="space-y-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors py-2"
              >
                <span className="text-zinc-500 group-hover:text-white transition-colors">
                  {iconMap[link.icon]}
                </span>
                <span className="text-lg font-light tracking-wide">
                  {link.platform}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-zinc-800/50">
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              期待与您交流摄影、建筑或任何有趣的话题。
              <br />
              欢迎通过表单或社交媒体与我取得联系。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
