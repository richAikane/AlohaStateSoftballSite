import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";
import tropicalBg from "../assets/tropical-palm-bg-2.png";
import { useLocation, Link } from "wouter";

export default function SponsorBanner() {
  const [location] = useLocation();
  const isTournamentPage = location === "/anuenue-classic-2026";

  if (isTournamentPage) {
    return (
      <div className="w-full mx-auto px-4 py-3">
        <div
          className="max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden relative border-l-8 border-pink-500"
          style={{
            backgroundImage: `url(${tropicalBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "320px",
          }}
        >
          <div className="absolute inset-0 bg-white/40 z-0"></div>

          <div className="relative z-10 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-xl scale-110"></div>
                <img
                  src={anuenueClassicLogo}
                  alt="Ānuenue Classic 2026 Logo"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white object-cover"
                />
              </div>

              <div className="text-center md:text-left flex-grow">
                <div className="inline-block bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-md uppercase tracking-wider">
                  Tournament Hub
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-2">
                  <span
                    style={{
                      background: "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #f97316 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    }}
                  >
                    ĀNUENUE CLASSIC 2026 HUB
                  </span>
                </h2>
                <p className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                  Registered teams, key info, and details below.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button
                    onClick={() => document.getElementById("registered-teams")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="bg-gray-900 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    Jump to Registered Teams
                  </button>
                  <Link
                    href="/"
                    className="bg-white/90 text-gray-800 font-bold px-6 py-3 rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-105 border border-gray-200"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-3">
      <div
        className="sponsor-section max-w-screen-xl mx-auto bg-cover bg-center rounded-xl px-6 py-3 shadow-md"
        style={{ backgroundImage: "url('https://static.wixstatic.com/media/df1e99_7d482e4975b446269ed7f7f9cb8c2d62~mv2.png')" }}
      >
        <div className="sponsor-section-overlay bg-gradient-to-br from-cyan-100/50 to-pink-100/50 backdrop-blur-md rounded-lg px-4 py-3">

          <div className="flex justify-center mb-4">
            <img
              src="https://static.wixstatic.com/media/df1e99_ad0f0c0a9221428690d41358cd5ad6c9~mv2.png"
              alt="Mahalo to our 2025 Sponsors!"
              className="w-auto max-h-10 md:max-h-12 object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <h2 className="hidden text-xl font-bold text-center text-gray-800">Mahalo to Our Sponsors</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center min-h-[276px]">
            <a href="https://hulas.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_df8e26ec547d49d48546138fe541f8ef~mv2.png" alt="Hula's Bar & Lei Stand" title="Hula's Bar & Lei Stand" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.hawaiigaybar.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_15421420fa1848a8a1ba6509e9bb80ef~mv2.png" alt="Tapas Waikiki" title="Tapas Waikiki" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.boh.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_b39ff2b25c5b492591872cf7fb1b34ee~mv2.png" alt="Bank of Hawai'i" title="Bank of Hawai'i" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.scarlethonolulu.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_d0a44f9755154669a51d7b884a01b91d~mv2.png" alt="Scarlet Honolulu" title="Scarlet Honolulu" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/whippednwhiskedhawaii/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_80cc683f43274a94b66ecd62773e0d97~mv2.png" alt="Whipped & Whisked" title="Whipped & Whisked" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.kelliwithaneyephotography.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_168ba11d5a514d338ece56115d5fe243~mv2.png" alt="Kelli with an Eye Photography" title="Kelli with an Eye Photography" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://ericzmartin.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_5890ac34dd0c48e9bf7d1b059fe1d5c9~mv2.png" alt="Eric Z Martin Photography" title="Eric Z Martin Photography" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.futureofcool.co/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_85f53ed5f46246deb395e8e0f96e22f2~mv2.png" alt="Future of Cool" title="Future of Cool" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://oteamhawaii.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_b7555d6dc77c439f9cb4e7718bcd7148~mv2.png" alt="The O Team" title="The O Team" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.wangchungs.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_6fc56a91f0554b928bcf944fdf4d08b5~mv2.png" alt="Wang Chung's" title="Wang Chung's" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="#" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_c44094fb039e4250ab4c770d4063fc77~mv2.png" alt="Bacchus Waikiki" title="Bacchus Waikiki" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="#" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_56ea612f4d554ad2b98f6b7687725051~mv2.png" alt="Team Mimosa" title="Team Mimosa" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.mylemon.com/hawaii-lemon-law/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_949a605d460e4f0e96855ac5f51d59ed~mv2.png" alt="Hawai'i Lemon Law" title="Hawai'i Lemon Law" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
            <a href="https://www.kaimana.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://static.wixstatic.com/media/df1e99_5f8cc36fa139496b9d35798aa4279ab9~mv2.png" alt="Kaimana Beach Hotel" title="Kaimana Beach Hotel" className="sponsor-bingo h-32 max-w-[180px] object-contain mx-auto" loading="lazy" />
            </a>
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://www.zeffy.com/en-US/fundraising/support-aloha-state-softball-2025-season"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Become a Sponsor</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
