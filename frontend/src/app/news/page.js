'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Search, Bell, Mail, User, Users, Newspaper, MoreHorizontal, Sparkles, ExternalLink, Bookmark, Share, MessageCircle, Heart, Repeat } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    title: 'University Announces New AI Research Center with $50M Funding',
    source: 'University News',
    handle: '@univ_news',
    avatar: 'UN',
    time: '2h',
    category: 'Research',
    excerpt: 'The university has secured major funding to establish a cutting-edge artificial intelligence research center. This initiative will bring together top researchers and students to solve global challenges.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60',
    likes: 245,
    comments: 42,
    shares: 89,
    aiFiltered: true,
  },
  {
    id: 2,
    title: 'Alumni Startup Raises Series B, Valued at $500M',
    source: 'TechCrunch',
    handle: '@techcrunch',
    avatar: 'TC',
    time: '5h',
    category: 'Alumni Success',
    excerpt: 'TechStart, founded by Class of 2015 alumna, has successfully closed its Series B funding round led by major venture capital firms.',
    likes: 567,
    comments: 89,
    shares: 123,
    aiFiltered: true,
  },
  {
    id: 3,
    title: 'Record Number of Students Accepted to Top Graduate Programs',
    source: 'Academic Affairs',
    handle: '@academic_affairs',
    avatar: 'AA',
    time: '1d',
    category: 'Academics',
    excerpt: 'This year saw a record 85% of applicants accepted to top-tier graduate programs across the globe, highlighting the strength of our undergraduate curriculum.',
    likes: 890,
    comments: 156,
    shares: 234,
    aiFiltered: false,
  }
];

export default function NewsPage() {
  const [showAIFiltered, setShowAIFiltered] = useState(false);
  const filteredNews = mockNews.filter(news => !showAIFiltered || news.aiFiltered);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1265px] mx-auto flex">
        
        {/* LEFT SIDEBAR - Navigation */}
        <div className="w-[275px] h-screen sticky top-0 flex flex-col px-2 border-r border-gray-800">
          <div className="p-4 mb-2">
            <Link href="/" className="text-3xl font-bold gradient-text font-[family-name:var(--font-display)]">
              AlmaLink
            </Link>
          </div>

          <nav className="space-y-1 flex-1">
            <NavItem href="/dashboard" icon={Home} label="Home" />
            <NavItem href="/directory" icon={Search} label="Explore" />
            <NavItem href="#" icon={Bell} label="Notifications" />
            <NavItem href="#" icon={Mail} label="Messages" />
            <NavItem href="/directory" icon={Users} label="Directory" />
            <NavItem href="/news" icon={Newspaper} label="News" active />
            <NavItem href="/profile" icon={User} label="Profile" />
            <NavItem href="#" icon={MoreHorizontal} label="More" />
            
            <button className="w-full mt-8 bg-[var(--primary)] hover:opacity-90 text-white rounded-full py-4 font-bold text-lg transition-all shadow-lg shadow-[var(--primary)]/20">
              Post
            </button>
          </nav>

          <div className="p-4 my-4 flex items-center gap-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold">JD</div>
            <div className="flex-1">
              <div className="font-bold text-sm">John Doe</div>
              <div className="text-gray-500 text-sm">@johndoe</div>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* CENTER FEED - News */}
        <div className="w-[600px] border-r border-gray-800 min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold">Institute News</h1>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Sparkles className="w-5 h-5 text-[var(--primary)]" />
            </button>
          </div>

          {/* AI Filter Toggle */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#16181c]/50">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="font-bold text-sm">AI Curated Feed</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showAIFiltered}
                onChange={(e) => setShowAIFiltered(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
            </label>
          </div>

          {/* News Feed */}
          <div>
            {filteredNews.map(news => (
              <article key={news.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full gradient-secondary flex-shrink-0 flex items-center justify-center font-bold">
                    {news.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">{news.source}</span>
                        <span className="text-gray-500">{news.handle}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 hover:underline">{news.time}</span>
                      </div>
                      <button className="text-gray-500 hover:text-[var(--primary)] rounded-full p-2 hover:bg-[var(--primary)]/10 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    {news.aiFiltered && (
                      <div className="flex items-center gap-1 text-xs text-[var(--primary)] font-medium mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>AI Recommended</span>
                      </div>
                    )}
                    
                    <h2 className="font-bold text-lg leading-tight mb-2">{news.title}</h2>
                    <p className="text-[15px] text-gray-300 leading-normal mb-3">
                      {news.excerpt}
                    </p>

                    {news.image && (
                      <div className="rounded-2xl overflow-hidden border border-gray-800 mb-3">
                        <img src={news.image} alt="News thumbnail" className="w-full h-48 object-cover" />
                      </div>
                    )}

                    <div className="flex justify-between max-w-md text-gray-500">
                      <ActionBtn icon={MessageCircle} count={news.comments} color="blue" />
                      <ActionBtn icon={Repeat} count={news.shares} color="green" />
                      <ActionBtn icon={Heart} count={news.likes} color="pink" />
                      <ActionBtn icon={Share} color="blue" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR - Trending */}
        <div className="w-[350px] pl-8 py-4 hidden lg:block h-screen sticky top-0">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search news" 
              className="w-full bg-[#202327] border-none rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[var(--primary)] focus:bg-black transition-all"
            />
          </div>

          {/* Trending News */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden mb-6">
            <h2 className="text-xl font-bold p-4">Trending News</h2>
            {[
              { category: 'Research', topic: 'Quantum Computing Breakthrough', posts: '12K reads' },
              { category: 'Campus', topic: 'New Student Center Opening', posts: '5K reads' },
              { category: 'Sports', topic: 'Championship Finals', posts: '8K reads' },
            ].map((item, i) => (
              <div key={i} className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors">
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{item.category} · Trending</span>
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <div className="font-bold text-[15px] mt-0.5">{item.topic}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.posts}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function NavItem({ href, icon: Icon, label, active }) {
  return (
    <Link href={href} className="group flex items-center w-fit">
      <div className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${active ? 'font-bold' : 'font-normal'} group-hover:bg-white/10`}>
        <Icon className={`w-7 h-7 ${active ? 'fill-current' : ''}`} />
        <span className="text-xl hidden xl:block">{label}</span>
      </div>
    </Link>
  );
}

function ActionBtn({ icon: Icon, count, color, active }) {
  const colorClasses = {
    blue: 'hover:text-blue-400 hover:bg-blue-500/10',
    green: 'hover:text-green-400 hover:bg-green-500/10',
    pink: 'hover:text-pink-400 hover:bg-pink-500/10',
  };

  return (
    <button className={`group flex items-center gap-1 transition-colors ${colorClasses[color] || ''} ${active ? 'text-pink-500' : ''}`}>
      <div className="p-2 rounded-full group-hover:bg-opacity-10">
        <Icon className={`w-4 h-4 ${active ? 'fill-current' : ''}`} />
      </div>
      {count && <span className="text-xs">{count}</span>}
    </button>
  );
}
