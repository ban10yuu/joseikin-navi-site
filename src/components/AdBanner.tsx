'use client';

interface AdBannerProps {
  size?: 'full' | 'medium' | 'compact';
}

export default function AdBanner({ size = 'full' }: AdBannerProps) {
  if (size === 'compact') {
    return (
      <div className="my-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
        <span className="text-[10px] text-slate-400 block mb-1">広告</span>
        <div className="h-[60px] bg-slate-100 rounded flex items-center justify-center text-xs text-slate-300">
          AD SPACE
        </div>
      </div>
    );
  }

  if (size === 'medium') {
    return (
      <div className="my-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
        <span className="text-[10px] text-slate-400 block mb-2">広告</span>
        <div className="h-[120px] bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-300">
          AD SPACE
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 p-5 bg-slate-50 border border-slate-200 rounded-xl text-center">
      <span className="text-[10px] text-slate-400 block mb-2">広告</span>
      <div className="h-[200px] bg-slate-100 rounded-lg flex items-center justify-center text-sm text-slate-300">
        AD SPACE
      </div>
    </div>
  );
}
