'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Search, Bell, Mail, User, Users, Newspaper, MoreHorizontal, MapPin, Briefcase, GraduationCap, Filter, X } from 'lucide-react';

const mockAlumni = [
  {
    id: 1,
    name: 'Sarah Johnson',
    handle: '@sarahj_dev',
    avatar: 'SJ',
    title: 'Software Engineer',
    company: 'Google',
    location: 'San Francisco, CA',
    graduationYear: 2018,
    field: 'Computer Science',
    skills: ['React', 'Node.js', 'AI/ML'],
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    handle: '@mchen_pm',
    avatar: 'MC',
    title: 'Product Manager',
    company: 'Meta',
    location: 'New York, NY',
    graduationYear: 2017,
    field: 'Business',
    skills: ['Product Strategy', 'Analytics'],
    verified: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    handle: '@emily_r',
    avatar: 'ER',
    title: 'Founder & CEO',
    company: 'TechStart',
    location: 'Austin, TX',
    graduationYear: 2015,
    field: 'Engineering',
    skills: ['Entrepreneurship', 'Leadership'],
    verified: false
  },
  {
    id: 4,
    name: 'David Park',
    handle: '@dpark_ds',
    avatar: 'DP',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    graduationYear: 2019,
    field: 'Data Science',
    skills: ['Python', 'Machine Learning'],
    verified: true
  }
];

export default function DirectoryPage() {
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
            <NavItem href="/directory" icon={Users} label="Directory" active />
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

        {/* CENTER FEED - Directory */}
        <div className="w-[600px] border-r border-gray-800 min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 border-b border-gray-800 px-4 py-3">
            <h1 className="text-xl font-bold">Alumni Directory</h1>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search for alumni, skills, or companies" 
                className="w-full bg-[#202327] border-none rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[var(--primary)] focus:bg-black transition-all"
              />
            </div>
          </div>

          {/* Alumni List */}
          <div>
            {mockAlumni.map(alumni => (
              <div key={alumni.id} className="border-b border-gray-800 p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center font-bold text-lg">
                    {alumni.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold hover:underline">{alumni.name}</span>
                          {alumni.verified && (
                            <span className="text-[var(--primary)]">
                              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
                            </span>
                          )}
                        </div>
                        <div className="text-gray-500 text-sm">{alumni.handle}</div>
                      </div>
                      <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold text-sm hover:opacity-90">
                        Connect
                      </button>
                    </div>

                    <p className="text-[15px] mb-2">{alumni.title} at {alumni.company}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{alumni.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>Class of {alumni.graduationYear}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {alumni.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-[#202327] text-gray-300 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR - Filters */}
        <div className="w-[350px] pl-8 py-4 hidden lg:block h-screen sticky top-0">
          <div className="bg-[#16181c] rounded-2xl overflow-hidden mb-6">
            <h2 className="text-xl font-bold p-4 border-b border-gray-800">Filters</h2>
            
            <div className="p-4 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Field of Study</label>
                <select className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-[var(--primary)] focus:outline-none">
                  <option>All Fields</option>
                  <option>Computer Science</option>
                  <option>Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Location</label>
                <select className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-[var(--primary)] focus:outline-none">
                  <option>All Locations</option>
                  <option>San Francisco, CA</option>
                  <option>New York, NY</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Graduation Year</label>
                <select className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-[var(--primary)] focus:outline-none">
                  <option>All Years</option>
                  <option>2020-2024</option>
                  <option>2015-2019</option>
                </select>
              </div>

              <button className="w-full bg-[var(--primary)] text-white font-bold py-2 rounded-full hover:opacity-90">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Suggested Connections */}
          <div className="bg-[#16181c] rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold p-4">Suggested for you</h2>
            {[1, 2].map((_, i) => (
              <div key={i} className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">Alumni User</div>
                  <div className="text-gray-500 text-sm truncate">@alumni_user</div>
                </div>
                <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold text-sm hover:opacity-90">
                  Connect
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
