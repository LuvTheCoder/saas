import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden flex items-center justify-center">

      {/* Deep ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl">

        {/* 404 */}
        <h1 className="text-[140px] md:text-[180px] font-black tracking-tight leading-none text-white/90">
          404
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-4 mb-6 h-px w-24 bg-white/10" />

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-white/50 leading-relaxed">
          The page you’re trying to access doesn’t exist, was removed,
          or is temporarily unavailable.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center
                       px-9 py-3 rounded-full
                       bg-white/95 text-black
                       font-semibold tracking-wide
                       hover:bg-white
                       hover:scale-[1.03]
                       transition-all duration-300"
          >
            Return Home
          </Link>
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-xs text-white/30 tracking-widest uppercase">
          Error · 404
        </p>
      </div>
    </div>
  );
}

export default NotFound;
