
import React, { useState } from 'react';
import TTSSection from './components/TTSSection';
import LiveAudioSection from './components/LiveAudioSection';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.TTS);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <nav className="p-6 flex items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <i className="fa-solid fa-bolt-lightning text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              SpeakAI
            </h1>
            <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Voice Master</p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-1 p-1 bg-slate-800/50 rounded-lg border border-slate-700">
          <button
            onClick={() => setMode(AppMode.TTS)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === AppMode.TTS ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Dictionary & TTS
          </button>
          <button
            onClick={() => setMode(AppMode.LIVE)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              mode === AppMode.LIVE ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Conversation
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs text-slate-500 italic">"Learning is better with sound"</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Master English with <span className="text-blue-500">Crystal Clear</span> Audio
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Generate high-quality pronunciations, download them for offline use, or practice speaking with our real-time AI partner.
          </p>
        </div>

        <div className="flex justify-center md:hidden mb-8">
           <div className="flex gap-1 p-1 bg-slate-800/50 rounded-lg border border-slate-700">
            <button
              onClick={() => setMode(AppMode.TTS)}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                mode === AppMode.TTS ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400'
              }`}
            >
              TTS
            </button>
            <button
              onClick={() => setMode(AppMode.LIVE)}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                mode === AppMode.LIVE ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400'
              }`}
            >
              CONVO
            </button>
          </div>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {mode === AppMode.TTS ? <TTSSection /> : <LiveAudioSection />}
        </div>
      </main>

      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default App;
