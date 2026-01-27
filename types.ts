
export enum AppMode {
  TTS = 'TTS',
  LIVE = 'LIVE'
}

export interface TranscriptionMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface HistoryItem {
  id: string;
  text: string;
  ipa: string;
  translation: string;
  audioBlob: Blob;
  audioBuffer: AudioBuffer;
  timestamp: number;
  voice: string;
}

export type VoiceOption = 'Kore' | 'Puck'; // Kore (Female), Puck (Male)
