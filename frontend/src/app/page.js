import Link from 'next/link';
import { Sparkles, Users, BookOpen, TrendingUp, MessageCircle, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold gradient-text font-[family-name:var(--font-display)]">
              AlmaLink
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                How It Works
              </Link>
              <Link href="#about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth?mode=login" className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Login
              </Link>
              <Link href="/auth?mode=signup" className="px-6 py-2 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary)] rounded-full blur-[120px] animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-[var(--primary-light)]" />
              <span className="text-sm text-[var(--text-secondary)]">Connecting Alumni & Students Worldwide</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fadeInUp font-[family-name:var(--font-display)]" style={{animationDelay: '0.1s'}}>
              Bridge the Gap Between{' '}
              <span className="gradient-text">Generations</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              AlmaLink brings together institutions, alumni, and students in one powerful platform. 
              Share experiences, find mentors, and unlock opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <Link href="/auth?mode=signup" className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:-translate-y-1 shadow-xl">
                Get Started Free
              </Link>
              <Link href="#how-it-works" className="px-8 py-4 glass text-[var(--text-primary)] rounded-xl font-semibold text-lg hover:border-[var(--border-hover)] transition-all">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              {[
                { label: 'Alumni Connected', value: '50K+' },
                { label: 'Institutions', value: '500+' },
                { label: 'Success Stories', value: '10K+' }
              ].map((stat, i) => (
                <div key={i} className="text-center animate-fadeInUp" style={{animationDelay: `${0.4 + i * 0.1}s`}}>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-[var(--text-tertiary)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
              Why Choose <span className="gradient-text">AlmaLink</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Connect, mentor, and grow with your alumni community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: 'Alumni Directory',
                description: 'Find and connect with verified alumni using smart filters and AI-powered search.',
              },
              {
                icon: MessageCircle,
                title: 'Mentorship',
                description: 'Get guidance from experienced professionals or mentor the next generation.',
              },
              {
                icon: Newspaper,
                title: 'Stay Updated',
                description: 'Curated news and updates from your institution, all in one place.',
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--primary)] transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
              Get Started in <span className="gradient-text">Minutes</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Create your account using your alma mater email for instant verification.'
              },
              {
                step: '2',
                title: 'Build Your Profile',
                description: 'Add your professional details and connect with your network.'
              },
              {
                step: '3',
                title: 'Start Networking',
                description: 'Discover alumni, find mentors, and unlock opportunities.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">{item.title}</h3>
                  <p className="text-lg text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl glass relative overflow-hidden">
            <div className="absolute inset-0 gradient-animated opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
                Ready to <span className="gradient-text">Connect</span>?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Join thousands of alumni and students building meaningful connections
              </p>
              <Link href="/auth?mode=signup" className="inline-block px-8 py-4 gradient-primary text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:-translate-y-1 shadow-xl">
                Create Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">AlmaLink</div>
              <p className="text-[var(--text-tertiary)] text-sm">
                Connecting generations of learners and achievers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Product</h4>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h4>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Support</h4>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
            © 2024 AlmaLink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
