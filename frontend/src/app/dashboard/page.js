'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Search, Bell, Mail, User, Users, Newspaper, MoreHorizontal, PenSquare, Image as ImageIcon, Smile, Calendar, Heart, MessageCircle, Repeat, Share, Bookmark } from 'lucide-react';

// Mock Data
const mockPosts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    handle: '@sarahj_dev',
    avatar: 'SJ',
    time: '2h',
    content: 'Just wrapped up an amazing mentorship session with current CS students! It\'s incredible to see the next generation of engineers so passionate about technology. Always happy to help fellow alumni! 🚀 #Mentorship #TechCommunity',
    likes: 42,
    comments: 8,
    shares: 3,
    views: '1.2k',
    liked: true
  },
  {
    id: 2,
    author: 'Michael Chen',
    handle: '@mchen_pm',
    avatar: 'MC',
    time: '5h',
    content: 'Excited to announce that we\'re hiring! Looking for talented product designers and engineers. If you\'re from our alma mater, reach out - would love to chat! \n\nCheck out the roles below 👇',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60',
    likes: 156,
    comments: 24,
    shares: 45,
    views: '5.4k',
    liked: false
  }
];

const trendingTopics = [
  { category: 'Technology', topic: '#AIRevolution', posts: '52.4K' },
  { category: 'University', topic: 'Homecoming 2025', posts: '12.1K' },
  { category: 'Career', topic: 'Remote Work', posts: '8.9K' },
  { category: 'Alumni', topic: 'Class of 2020', posts: '5.2K' },
];

export default function DashboardPage() {
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
            <NavItem href="/dashboard" icon={Home} label="Home" active />
            <NavItem href="/directory" icon={Search} label="Explore" />
            <NavItem href="#" icon={Bell} label="Notifications" />
            <NavItem href="#" icon={Mail} label="Messages" />
            <NavItem href="/directory" icon={Users} label="Directory" />
            <NavItem href="/news" icon={Newspaper} label="News" />
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

        {/* CENTER FEED */}
        <div className="w-[600px] border-r border-gray-800 min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 border-b border-gray-800 px-4 py-3">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          {/* Create Post */}
          <div className="border-b border-gray-800 p-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center font-bold">JD</div>
              <div className="flex-1">
                <textarea 
                  placeholder="What's happening?" 
                  className="w-full bg-transparent text-xl placeholder-gray-500 border-none focus:ring-0 resize-none p-0 mt-2 min-h-[50px]"
                />
                <div className="flex items-center justify-between mt-4 border-t border-gray-800 pt-3">
                  <div className="flex gap-1 text-[var(--primary)]">
                    <IconButton icon={ImageIcon} />
                    <IconButton icon={Smile} />
                    <IconButton icon={Calendar} />
                  </div>
                  <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 disabled:opacity-50">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed */}
          <div>
            {mockPosts.map(post => (
              <article key={post.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center font-bold">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">{post.author}</span>
                        <span className="text-gray-500">{post.handle}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 hover:underline">{post.time}</span>
                      </div>
                      <button className="text-gray-500 hover:text-[var(--primary)] rounded-full p-2 hover:bg-[var(--primary)]/10 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="mt-1 text-[15px] leading-normal whitespace-pre-wrap">
                      {post.content}
                    </p>

                    {post.image && (
                      <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
                        <img src={post.image} alt="Post content" className="w-full h-auto" />
                      </div>
                    )}

                    <div className="flex justify-between mt-3 max-w-md text-gray-500">
                      <ActionBtn icon={MessageCircle} count={post.comments} color="blue" />
                      <ActionBtn icon={Repeat} count={post.shares} color="green" />
                      <ActionBtn icon={Heart} count={post.likes} color="pink" active={post.liked} />
                      <ActionBtn icon={Bookmark} color="blue" />
                      <ActionBtn icon={Share} color="blue" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR - Widgets */}
        <div className="w-[350px] pl-8 py-4 hidden lg:block h-screen sticky top-0">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-[#202327] border-none rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[var(--primary)] focus:bg-black transition-all"
            />
          </div>

          {/* Trending */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden mb-6">
            <h2 className="text-xl font-bold p-4">Trends for you</h2>
            {trendingTopics.map((item, i) => (
              <div key={i} className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors">
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{item.category} · Trending</span>
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <div className="font-bold text-[15px] mt-0.5">{item.topic}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.posts} posts</div>
              </div>
            ))}
            <div className="p-4 text-[var(--primary)] text-sm cursor-pointer hover:bg-white/[0.03]">
              Show more
            </div>
          </div>

          {/* Suggested Users */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold p-4">Who to follow</h2>
            {[1, 2].map((_, i) => (
              <div key={i} className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">Alumni User</div>
                  <div className="text-gray-500 text-sm truncate">@alumni_user</div>
                </div>
                <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold text-sm hover:opacity-90">
                  Follow
                </button>
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

function IconButton({ icon: Icon }) {
  return (
    <button className="p-2 rounded-full hover:bg-[var(--primary)]/10 transition-colors">
      <Icon className="w-5 h-5" />
    </button>
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
