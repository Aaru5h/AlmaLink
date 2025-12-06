'use client';

import Link from 'next/link';
import { Home, Search, Bell, Mail, User, Users, Newspaper, MoreHorizontal, MapPin, Calendar, Link as LinkIcon, ArrowLeft, MessageCircle, Repeat, Heart, Share, Bookmark } from 'lucide-react';

const userData = {
  name: 'John Doe',
  handle: '@johndoe',
  avatar: 'JD',
  bio: 'Senior Software Engineer at Tech Corp 👨‍💻 | CS Class of 2019 🎓 | Passionate about AI, Open Source, and Mentorship. Building the future.',
  location: 'San Francisco, CA',
  website: 'johndoe.dev',
  joined: 'September 2015',
  following: 245,
  followers: '1.2k',
  posts: [
    {
      id: 1,
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
      time: '1d',
      content: 'Working on some exciting new features for our alumni platform. Can\'t wait to share more! 🛠️',
      likes: 89,
      comments: 12,
      shares: 5,
      views: '3.4k',
      liked: false
    }
  ]
};

export default function ProfilePage() {
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
            <NavItem href="/news" icon={Newspaper} label="News" />
            <NavItem href="/profile" icon={User} label="Profile" active />
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

        {/* CENTER FEED - Profile */}
        <div className="w-[600px] border-r border-gray-800 min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 border-b border-gray-800 px-4 py-1 flex items-center gap-6">
            <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold leading-tight">{userData.name}</h1>
              <div className="text-xs text-gray-500">{userData.posts.length} posts</div>
            </div>
          </div>

          {/* Banner */}
          <div className="h-48 bg-gradient-to-r from-purple-900 to-pink-900 relative">
            {/* Avatar */}
            <div className="absolute -bottom-16 left-4">
              <div className="w-32 h-32 rounded-full gradient-primary border-4 border-black flex items-center justify-center text-4xl font-bold">
                {userData.avatar}
              </div>
            </div>
          </div>

          {/* Profile Actions */}
          <div className="flex justify-end px-4 py-3 h-16">
            <button className="h-9 px-4 rounded-full border border-gray-600 font-bold text-sm hover:bg-white/10 transition-colors">
              Edit profile
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-4 mt-2 mb-4">
            <h2 className="text-xl font-bold leading-tight">{userData.name}</h2>
            <div className="text-gray-500 text-sm mb-4">{userData.handle}</div>
            
            <p className="text-[15px] mb-3 leading-normal">
              {userData.bio}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-500 text-sm mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-[var(--primary)] hover:underline">{userData.website}</a>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {userData.joined}</span>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="hover:underline cursor-pointer">
                <span className="font-bold text-white">{userData.following}</span> <span className="text-gray-500">Following</span>
              </div>
              <div className="hover:underline cursor-pointer">
                <span className="font-bold text-white">{userData.followers}</span> <span className="text-gray-500">Followers</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-800 mt-2">
            <Tab label="Posts" active />
            <Tab label="Replies" />
            <Tab label="Highlights" />
            <Tab label="Media" />
            <Tab label="Likes" />
          </div>

          {/* Posts Feed */}
          <div>
            {userData.posts.map(post => (
              <article key={post.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center font-bold">
                    {userData.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">{userData.name}</span>
                        <span className="text-gray-500">{userData.handle}</span>
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

          {/* You might like */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden mb-6">
            <h2 className="text-xl font-bold p-4">You might like</h2>
            {[1, 2, 3].map((_, i) => (
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
            <div className="p-4 text-[var(--primary)] text-sm cursor-pointer hover:bg-white/[0.03]">
              Show more
            </div>
          </div>

          {/* Trends */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold p-4">Trends for you</h2>
            {[
              { category: 'Technology', topic: '#AIRevolution', posts: '52.4K' },
              { category: 'University', topic: 'Homecoming 2025', posts: '12.1K' },
            ].map((item, i) => (
              <div key={i} className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors">
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{item.category} · Trending</span>
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <div className="font-bold text-[15px] mt-0.5">{item.topic}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.posts} posts</div>
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

function Tab({ label, active }) {
  return (
    <div className={`flex-1 text-center py-4 cursor-pointer hover:bg-white/10 transition-colors relative ${active ? 'font-bold text-white' : 'text-gray-500 font-medium'}`}>
      {label}
      {active && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-[var(--primary)] rounded-full"></div>
      )}
    </div>
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
