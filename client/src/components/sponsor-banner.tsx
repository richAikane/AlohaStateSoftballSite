import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";
import tropicalBg from "../assets/tropical-palm-bg-2.png";

const registrationLink = "https://teamsideline.com/sites/aikaneohana/home";

export default function SponsorBanner() {
  return (
    <div className="w-full mx-auto px-4 py-3">
      <div
        className="max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${tropicalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "480px",
        }}
      >
        <div className="absolute inset-0 bg-white/25 z-0"></div>

        <div className="relative z-10 px-6 py-6 md:px-8 md:py-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-2xl scale-110"></div>
                <img
                  src={anuenueClassicLogo}
                  alt="Ānuenue Classic 2026 Logo"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-white object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
              <span
                style={{
                  background: "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 2px 4px rgba(255,255,255,0.9))",
                }}
              >
                ĀNUENUE CLASSIC 2026
              </span>
            </h2>
            <p
              className="text-base md:text-lg font-bold"
              style={{ color: "#374151", textShadow: "0 2px 4px rgba(255,255,255,0.9)" }}
            >
              Team registration now open • March 26–29 · Honolulu
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs md:text-sm text-gray-700">
              <span className="bg-white/70 px-3 py-1 rounded-full shadow-sm">Pool play + brackets weekend</span>
              <span className="bg-white/70 px-3 py-1 rounded-full shadow-sm">Built for LGBTQIA+ athletes & allies</span>
              <span className="bg-white/70 px-3 py-1 rounded-full shadow-sm">Awards for champions, standouts, spirit</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6">
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">March 26–29, 2026</h3>
              <p className="text-sm text-gray-600">Thu–Sun tournament weekend</p>
              <p className="text-xs text-gray-500 mt-2">Games March 28–29</p>
            </div>

            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">🌴</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Honolulu, Hawai'i</h3>
              <p className="text-sm text-gray-600">Patsy T. Mink Regional Park</p>
              <p className="text-xs text-gray-500 mt-2">Beautiful island setting</p>
            </div>

            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">🌈</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Multiple Divisions</h3>
              <p className="text-sm text-gray-600">Fair, competitive matchups</p>
              <p className="text-xs text-gray-500 mt-2">Community-first energy</p>
            </div>

            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">🏨</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Host Hotels</h3>
              <p className="text-sm text-gray-600">Twin Fin & Alohilani</p>
              <p className="text-xs text-gray-500 mt-2">Steps from Waikīkī</p>
              <div className="flex flex-col gap-1 mt-2 text-xs font-semibold">
                <a
                  href="https://www.twinfinwaikiki.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-800 hover:underline"
                >
                  The Twin Fin
                </a>
                <a
                  href="https://www.alohilaniresort.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-800 hover:underline"
                >
                  Alohilani Resort
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur rounded-2xl p-5 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-gray-800">Registration: Open now</p>
                <p className="text-sm text-gray-700">Teams & free agents welcome — secure your spot.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-3 shadow-sm text-center">
                  <p className="text-sm font-semibold text-purple-800">Early Bird</p>
                  <p className="text-xs text-gray-700">Nov 25–Dec 31, 2025</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">$325</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl p-3 shadow-sm text-center">
                  <p className="text-sm font-semibold text-orange-800">Regular</p>
                  <p className="text-xs text-gray-700">Jan 1–31, 2026</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">$450</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-lime-50 border border-emerald-100 rounded-xl p-3 shadow-sm text-center">
                  <p className="text-sm font-semibold text-emerald-800">Late</p>
                  <p className="text-xs text-gray-700">Feb 1–28, 2026</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">$500</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Why play?</span>
              <span>Inclusive tournament by Aloha State Softball & Aikane Ohana</span>
              <span className="text-gray-500">•</span>
              <span>Pool play into brackets</span>
              <span className="text-gray-500">•</span>
              <span>Champions, standout player, and sportsmanship awards</span>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-base md:text-lg px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #ec4899 0%, #f97316 50%, #eab308 100%)",
              }}
            >
              <span>✨</span>
              <span>Register on TeamSideline</span>
              <span>✨</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-3 text-sm mt-4">
            <span className="text-lg">🏳️‍🌈</span>
            <span className="font-semibold text-gray-700">All levels welcome</span>
            <span className="text-gray-600">•</span>
            <span className="text-lg">🥎</span>
            <span className="text-gray-700">Spring 2026 kick-off weekend</span>
          </div>
        </div>
      </div>
    </div>
  );
}
