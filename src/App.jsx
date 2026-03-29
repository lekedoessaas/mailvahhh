import React, { useState, useEffect } from 'react';
import { 
  Search, ShieldCheck, Mail, ArrowRight, CheckCircle2, 
  Zap, Database, Chrome, Terminal, Globe, Layers, 
  Lock, Activity, PlayCircle, Shield, Moon, Sun, 
  Star, Quote, X, Loader2, CheckCircle, LogOut, 
  UploadCloud, Workflow, AlertTriangle, PenTool
} from 'lucide-react';
import { COMPETITORS, LEGAL_DATA, spamWords } from './data/constants.js';

// Simple components
const Badge = ({ children, color = 'blue' }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    gold: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${colors[color]} mb-4`}>
      {children}
    </div>
  );
};

const Navbar = ({ isDark, toggleTheme, isLoggedIn, onOpenAuth, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div onClick={() => navigate('home')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white">Mailvah.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => navigate('home')} className="text-sm font-bold text-slate-600 hover:text-blue-600">Home</button>
          <button onClick={() => navigate('compare', 'apollo')} className="text-sm font-bold text-slate-600 hover:text-blue-600">Compare</button>
          <button onClick={() => navigate('legal', 'privacy')} className="text-sm font-bold text-slate-600 hover:text-blue-600">Legal</button>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {isLoggedIn ? (
            <button onClick={() => navigate('dashboard')} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
              Dashboard
            </button>
          ) : (
            <button onClick={() => onOpenAuth('signup')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold">
              Start Free
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ navigate }) => (
  <footer className="bg-slate-950 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black">Mailvah.</span>
          </div>
          <p className="text-slate-400 text-sm">The most affordable, high-accuracy Outbound Security Suite.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => navigate('home')} className="hover:text-white">Features</button></li>
            <li><button onClick={() => navigate('home')} className="hover:text-white">Pricing</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Compare</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => navigate('compare', 'apollo')} className="hover:text-white">vs Apollo</button></li>
            <li><button onClick={() => navigate('compare', 'hunter')} className="hover:text-white">vs Hunter</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => navigate('legal', 'privacy')} className="hover:text-white">Privacy</button></li>
            <li><button onClick={() => navigate('legal', 'terms')} className="hover:text-white">Terms</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        © 2026 Donmican Technology Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

const AuthModal = ({ isOpen, onClose, initialMode, onLoginSuccess }) => {
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => { setMode(initialMode); }, [initialMode]);
  
  if (!isOpen) return null;

  const handleAuth = (e) => {
    e.preventDefault(); 
    setLoading(true);
    setTimeout(() => { 
      setLoading(false); 
      onLoginSuccess(); 
      onClose(); 
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black">{mode === 'login' ? 'Welcome back' : 'Create account'}</h3>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          <input type="email" placeholder="Email" required className="w-full border rounded-lg px-4 py-3" />
          <input type="password" placeholder="Password" required className="w-full border rounded-lg px-4 py-3" />
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
            {loading ? 'Loading...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-blue-600 font-bold">
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

// Pages
const LandingPage = ({ onOpenAuth }) => {
  const [domain, setDomain] = useState('');
  const [searchState, setSearchState] = useState('idle');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchState('scanning');
    setTimeout(() => setSearchState('result'), 2000);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center px-4 py-20">
        <Badge color="emerald">Mailvah Engine 2.0 is Live</Badge>
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Never bounce again.<br />
          <span className="text-blue-600">Scale with certainty.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Live SMTP verification on bare-metal servers. Stop relying on stale databases.
        </p>
        
        {searchState === 'idle' && (
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 mb-8">
            <input 
              type="text" 
              placeholder="Enter domain (e.g., stripe.com)" 
              value={domain}
              onChange={e => setDomain(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-3"
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
              Verify
            </button>
          </form>
        )}
        
        {searchState === 'scanning' && (
          <div className="max-w-xl mx-auto bg-slate-900 text-white p-6 rounded-xl mb-8">
            <Activity className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500" />
            <p>Scanning {domain}...</p>
          </div>
        )}
        
        {searchState === 'result' && (
          <div className="max-w-xl mx-auto bg-white border p-6 rounded-xl mb-8 text-left">
            <h3 className="font-bold text-lg mb-4">{domain} - Verified</h3>
            <p className="text-green-600 font-bold mb-4">✓ Domain is valid</p>
            <button onClick={() => setSearchState('idle')} className="text-blue-600 font-bold">
              Check another
            </button>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onOpenAuth('signup')} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
            Start for free
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge color="blue">The Engine</Badge>
            <h2 className="text-4xl font-black">Everything you need to scale</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border">
              <Terminal className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Live SMTP Engine</h3>
              <p className="text-slate-600 dark:text-slate-400">Real-time verification, no cached data.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border">
              <Database className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Bulk Processing</h3>
              <p className="text-slate-600 dark:text-slate-400">Process 100,000 emails in minutes.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border">
              <Shield className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Blacklist Monitor</h3>
              <p className="text-slate-600 dark:text-slate-400">Protect your domain reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 text-center px-4">
        <h2 className="text-4xl font-black mb-8">Fair pricing. Zero waste.</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6">
            <Badge color="emerald">Free</Badge>
            <h3 className="text-2xl font-bold mb-2">Sandbox</h3>
            <div className="text-4xl font-black mb-4">$0<span className="text-lg">/mo</span></div>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>✓ 150 credits</li>
              <li>✓ Spam composer</li>
            </ul>
            <button onClick={() => onOpenAuth('signup')} className="w-full border py-2 rounded-lg font-bold">
              Start Free
            </button>
          </div>
          <div className="border rounded-2xl p-6 bg-slate-900 text-white">
            <Badge color="blue">Pro</Badge>
            <h3 className="text-2xl font-bold mb-2">Scale</h3>
            <div className="text-4xl font-black mb-4">$39<span className="text-lg">/mo</span></div>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>✓ 5,000 credits</li>
              <li>✓ Bulk verifier</li>
              <li>✓ API access</li>
            </ul>
            <button onClick={() => onOpenAuth('signup')} className="w-full bg-blue-600 py-2 rounded-lg font-bold">
              Upgrade
            </button>
          </div>
          <div className="border rounded-2xl p-6">
            <Badge color="purple">Enterprise</Badge>
            <h3 className="text-2xl font-bold mb-2">Custom</h3>
            <div className="text-4xl font-black mb-4">Contact</div>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>✓ Dedicated IP</li>
              <li>✓ 100k+ volume</li>
            </ul>
            <button className="w-full border py-2 rounded-lg font-bold">
              Talk to us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ComparePage = ({ params, navigate }) => {
  const data = COMPETITORS[params] || COMPETITORS['apollo'];
  
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <Badge color="blue">Comparison</Badge>
        <h1 className="text-4xl font-black mb-4">Mailvah vs {data.name}</h1>
        <p className="text-xl text-slate-600">{data.tagline}</p>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-2xl border p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Feature Comparison</h2>
        <div className="space-y-3">
          {data.features.map((f, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b">
              <span>{f.name}</span>
              <div className="flex gap-4">
                <span className={f.us ? 'text-green-600' : 'text-gray-400'}>
                  {f.us ? '✓ Mailvah' : '✗'}
                </span>
                <span className={f.them ? 'text-blue-600' : 'text-gray-400'}>
                  {f.them ? '✓ ' + data.name : '✗'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-2">Why switch?</h3>
        <p className="mb-4">{data.overview}</p>
        <button onClick={() => navigate('home')} className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold">
          Get Started
        </button>
      </div>

      <button onClick={() => navigate('compare', params === 'apollo' ? 'hunter' : 'apollo')} className="text-blue-600 font-bold">
        Compare with another competitor →
      </button>
    </main>
  );
};

const LegalPage = ({ params }) => {
  const data = LEGAL_DATA[params] || LEGAL_DATA['privacy'];
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <Badge color="purple">Legal</Badge>
      <h1 className="text-4xl font-black mb-4">{data.title}</h1>
      <p className="text-sm text-slate-500 mb-8">Effective: {data.date}</p>
      
      <p className="text-lg mb-8">{data.intro}</p>
      
      <div className="space-y-6">
        {data.sections.map((section, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">{section.heading}</h2>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              {section.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const Dashboard = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('composer');
  const [composerInput, setComposerInput] = useState('');
  
  const spamCount = (composerInput.toLowerCase().match(new RegExp(spamWords.join('|'), 'g')) || []).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-4 mb-8 border-b pb-4">
          <button 
            onClick={() => setActiveTab('composer')}
            className={`pb-2 font-bold ${activeTab === 'composer' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          >
            Spam Composer
          </button>
          <button 
            onClick={() => setActiveTab('bulk')}
            className={`pb-2 font-bold ${activeTab === 'bulk' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
          >
            Bulk Upload
          </button>
        </div>

        {activeTab === 'composer' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Spam-Proof Composer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <textarea
                value={composerInput}
                onChange={(e) => setComposerInput(e.target.value)}
                placeholder="Type your email here..."
                className="w-full h-64 p-4 border rounded-xl"
              />
              <div className="bg-slate-900 text-white p-4 rounded-xl">
                <h3 className="font-bold mb-4">Analysis</h3>
                {spamCount > 0 ? (
                  <div className="text-red-400">
                    ⚠️ Found {spamCount} spam words!
                  </div>
                ) : (
                  <div className="text-green-400">
                    ✓ No spam words detected
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bulk' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Bulk CSV Verifier</h2>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center">
              <UploadCloud className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p>Drop CSV file here or click to upload</p>
            </div>
          </div>
        )}

        <button 
          onClick={() => navigate('home')} 
          className="mt-8 flex items-center gap-2 text-slate-600"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [route, setRoute] = useState({ path: 'home', param: null });
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navigate = (path, param = null) => {
    setRoute({ path, param });
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('dashboard');
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          isLoggedIn={isLoggedIn}
          onOpenAuth={(mode) => { setAuthMode(mode); setIsAuthModalOpen(true); }}
          navigate={navigate}
        />
        
        <main className="flex-1">
          {route.path === 'home' && (
            <LandingPage 
              onOpenAuth={(mode) => { setAuthMode(mode); setIsAuthModalOpen(true); }}
            />
          )}
          {route.path === 'compare' && (
            <ComparePage params={route.param} navigate={navigate} />
          )}
          {route.path === 'legal' && (
            <LegalPage params={route.param} />
          )}
          {route.path === 'dashboard' && (
            <Dashboard navigate={navigate} />
          )}
        </main>

        {route.path !== 'dashboard' && <Footer navigate={navigate} />}

        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
}
