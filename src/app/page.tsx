"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800/50">
          <a href="#livre" className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
            Le livre
          </a>
          <a href="/auteur" className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
            L'auteur
          </a>
          <a href="#map" className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
            Map
          </a>
        </div>
      </nav>

      {/* Quote Section */}
      <section className="pt-24 pb-8 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg lg:text-xl italic leading-relaxed">
            "Paraît qu'chacun est roi dans son royaume. Pourtant, sur toi, ils veulent tous régner. J'vois des clowns posés sur des trônes. On prie des saints, mais silicones. La connerie crève la couche d'ozone, <span className="text-orange-500">les imbéciles rêvent de se cloner</span>..."
          </p>
        </div>
      </section>

      {/* Hero Section with Video and Text */}
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[80vh]">
            {/* Vidéo Antoni Doumbia à gauche */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Glow effect background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Video container */}
                <div className="relative">
                  {/* Effet d'éclairage subtil */}
                  <div className="absolute inset-0 z-40 pointer-events-none">
                    {/* Lignes d'ombre légères */}
                    <div className="absolute inset-0 rounded-xl"
                         style={{
                           background: `repeating-linear-gradient(
                             0deg,
                             transparent 0px,
                             transparent 12px,
                             rgba(0,0,0,0.2) 12px,
                             rgba(0,0,0,0.2) 14px
                           )`
                         }}>
                    </div>
                    
                    {/* Vignette douce */}
                    <div className="absolute inset-0 rounded-xl"
                         style={{
                           background: `radial-gradient(
                             ellipse at center,
                             transparent 40%,
                             rgba(0,0,0,0.1) 80%,
                             rgba(0,0,0,0.3) 100%
                           )`
                         }}>
                    </div>
                  </div>
                  
                  {/* Texte "D'après une histoire vraie" en haut */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 text-center pointer-events-none">
                    <p className="text-lg lg:text-xl font-medium text-white uppercase tracking-wide">
                      D'APRÈS UNE HISTOIRE VRAIE
                    </p>
                  </div>
                  
                  {/* "PUTAIN DE MALÉDICTION" au milieu */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center pointer-events-none">
                    <h1 className="text-4xl lg:text-6xl font-black leading-none tracking-tight uppercase text-white" style={{fontFamily: 'Arial Black, sans-serif', fontWeight: '900', letterSpacing: '-0.05em'}}>
                      PUTAIN<br/>DE MALÉDICTION
                    </h1>
                  </div>
                  
                  {/* Nom et prénom en bas sur une ligne */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-center pointer-events-none">
                    <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tight" style={{fontFamily: 'Arial Black, sans-serif', fontWeight: '900'}}>
                      ANTONI DOUMBIA
                    </h2>
                  </div>
                  <video 
                    id="heroVideo"
                    className="w-[600px] h-[900px] rounded-xl border-2 border-orange-500/50 object-cover mx-auto shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-500"
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onPlay={() => {
                      const otherVideo = document.getElementById('horizontalVideo') as HTMLVideoElement;
                      if (otherVideo && !otherVideo.paused) {
                        otherVideo.pause();
                      }
                    }}
                  >
                    <source src="/video presentation .webm" type="video/webm" />
                    Votre navigateur ne supporte pas la vidéo HTML5.
                  </video>
                  
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-orange-400 rounded-tl-lg"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-orange-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-orange-400 rounded-br-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Texte à droite */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-black mb-8">
                <span className="text-white">Plongez au cœur d'une </span>
                <span className="text-orange-500">histoire authentique</span>
                <span className="text-white"> et </span>
                <span className="text-orange-500">percutante</span>
              </h2>
              
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Dans la nuit frénétique des rues parisiennes résonne encore l'histoire saisissante d'une vie, d'une <span className="text-orange-400 font-semibold">malédiction familiale venue d'Afrique</span>. Plongez au cœur de l'intimité de cet auteur, son parcours atypique, ses rencontres déterminantes, ses choix de vie et ses secrets à peine voilés, portés par la voix percutante de celui-ci.
                </p>
                
                <p>
                  Entre humour et drame, cet anti-héros nous livre à travers ce récit hypnotique <span className="text-orange-400 font-semibold">l'histoire de sa vie, ses succès et ses échecs dans le monde de la musique puis des nuits parisiennes</span>. Explorez les racines de son mal et les élans passionnés qui rythmèrent ce récit puissant et autobiographique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Video Section */}
      <section className="py-16 px-4 bg-black relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-orange-400 rotate-45"></div>
          <div className="absolute top-1/2 left-20 w-2 h-20 bg-gradient-to-b from-orange-500 to-transparent"></div>
          <div className="absolute top-20 right-32 w-16 h-2 bg-gradient-to-r from-orange-500 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Glow effect container */}
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Corner decorations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-orange-500 rounded-tl-lg z-10"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-orange-500 rounded-tr-lg z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-orange-500 rounded-bl-lg z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-orange-500 rounded-br-lg z-10"></div>
            
            {/* Side accent bars */}
            <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent -translate-x-4"></div>
            <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent translate-x-4"></div>
            
            <div className="relative w-full">
              <video 
                id="horizontalVideo"
                className="w-full h-[600px] lg:h-[800px] object-cover"
                controls
                preload="metadata"
                poster="/photo video .png"
                onPlay={() => {
                  const otherVideo = document.getElementById('heroVideo') as HTMLVideoElement;
                  if (otherVideo && !otherVideo.paused) {
                    otherVideo.pause();
                  }
                }}
              >
                <source src="/video presentation 2.webm" type="video/webm" />
                Votre navigateur ne supporte pas la vidéo HTML5.
              </video>
              
              {/* Custom Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group" onClick={(e) => {
                const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                if (video.paused) {
                  video.play();
                  e.currentTarget.style.display = 'none';
                }
              }}>
                <div className="bg-orange-500 rounded-full p-6 lg:p-8 shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Titre à gauche */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl lg:text-5xl font-black">
                <span className="text-orange-500">À qui</span>
                <span className="text-white"> s'adresse </span>
                <span className="text-orange-500">ce livre</span>
                <span className="text-white"> ?</span>
              </h2>
            </div>
            
            {/* Texte à droite */}
            <div className="w-full lg:w-2/3">
              <div className="text-gray-300 text-lg leading-relaxed">
                <p>
                  "Aux amateurs de biographies, aux nostalgiques des années 80, aux fans de musique et de rap français des années 90. Aux passionnés de culture et d'identité, en quête de spiritualité, ceux qui ont le cœur à la bonne place ou qui cherchent la leur. Aux noctambules et papillons des nuits parisiennes. À la communauté bretonne, à la jeunesse africaine, aux personnes touchées par <span className="text-orange-400 font-semibold">la sorcellerie</span> et les défis personnels, à la jeune génération, aux femmes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section id="map" className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-12">
            <h3 className="text-3xl lg:text-4xl font-black">
              <span className="text-white">Explorez la capitale pour découvrir les </span>
              <span className="text-orange-500">saisons captivantes</span>
              <span className="text-white"> de ce récit bouleversant</span>
            </h3>
          </div>
          
          {/* Interactive Metro Map */}
          <div className="w-full h-[600px] bg-black relative overflow-hidden">
            {/* Paris Metro Map Background */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Metro Line 1 - Yellow */}
                <path d="M50 300 L750 300" stroke="#FFCD00" strokeWidth="4" />
                
                {/* Metro Line 2 - Blue */}
                <path d="M100 100 Q200 120 300 150 Q400 180 500 220 Q600 260 650 300" stroke="#0055C8" strokeWidth="4" fill="none" />
                
                {/* Metro Line 3 - Olive Green */}
                <path d="M150 500 Q250 450 350 400 Q450 350 550 300 Q650 250 700 200" stroke="#837902" strokeWidth="4" fill="none" />
                
                {/* Metro Line 4 - Purple */}
                <path d="M400 50 L400 550" stroke="#CF009E" strokeWidth="4" />
                
                {/* Metro Line 5 - Orange */}
                <path d="M700 350 Q600 340 500 330 Q400 320 300 310 Q200 300 100 290" stroke="#FF5F00" strokeWidth="4" fill="none" />
                
                {/* Metro Line 6 - Light Green */}
                <path d="M100 400 Q200 380 300 360 Q400 340 500 360 Q600 380 700 400" stroke="#6ECA97" strokeWidth="4" fill="none" />
                
                {/* Metro Line 7 - Pink */}
                <path d="M350 100 Q360 200 370 300 Q380 400 390 500" stroke="#FA9ABA" strokeWidth="4" fill="none" />
                
                {/* Metro Line 8 - Light Blue */}
                <path d="M200 150 Q300 180 400 210 Q500 240 600 270" stroke="#E19BDF" strokeWidth="4" fill="none" />
                
                {/* Metro Line 9 - Gold */}
                <path d="M120 250 L680 350" stroke="#B6BD00" strokeWidth="4" />
                
                {/* Metro Line 10 - Brown */}
                <path d="M300 450 Q400 440 500 430 Q600 420 650 410" stroke="#C9910D" strokeWidth="4" fill="none" />
                
                {/* Metro Line 11 - Dark Brown */}
                <path d="M450 250 L550 200" stroke="#704B1C" strokeWidth="4" />
                
                {/* Metro Line 12 - Green */}
                <path d="M300 80 Q310 180 320 280 Q330 380 340 480" stroke="#00814F" strokeWidth="4" fill="none" />
                
                {/* Metro Line 13 - Light Blue */}
                <path d="M250 100 Q270 200 290 300 Q310 400 330 500" stroke="#62CDD9" strokeWidth="4" fill="none" />
                
                {/* Metro Line 14 - Dark Purple */}
                <path d="M180 350 L620 250" stroke="#62259D" strokeWidth="4" />
                
                {/* Seine River */}
                <path d="M0 380 Q200 360 400 370 Q600 380 800 370" stroke="#4A90E2" strokeWidth="6" fill="none" opacity="0.8" />
                
                {/* Major Stations */}
                <circle cx="400" cy="300" r="6" fill="white" stroke="#333" strokeWidth="2" />
                <text x="410" y="305" fill="white" fontSize="10" fontWeight="bold">Châtelet</text>
                
                <circle cx="350" cy="250" r="5" fill="white" stroke="#333" strokeWidth="2" />
                <text x="360" y="255" fill="white" fontSize="9">Opéra</text>
                
                <circle cx="450" cy="350" r="5" fill="white" stroke="#333" strokeWidth="2" />
                <text x="460" y="355" fill="white" fontSize="9">Bastille</text>
                
                <circle cx="300" cy="200" r="5" fill="white" stroke="#333" strokeWidth="2" />
                <text x="310" y="205" fill="white" fontSize="9">Pigalle</text>
                
                <circle cx="500" cy="280" r="5" fill="white" stroke="#333" strokeWidth="2" />
                <text x="510" y="285" fill="white" fontSize="9">République</text>
                
                {/* Arrondissement circles */}
                <circle cx="400" cy="300" r="150" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                <circle cx="400" cy="300" r="100" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                
                {/* Grid pattern */}
                <defs>
                  <pattern id="metroGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#333" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#metroGrid)" />
              </svg>
            </div>
            
            {/* Episode Locations */}
            <div className="absolute inset-0 p-8">
              {/* Clignancourt Area - Top Left */}
              <div className="absolute top-16 left-20">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-black font-black text-lg">1</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-white font-bold">Clignancourt</p>
                    <p className="text-orange-400 text-sm font-semibold">Gratuit</p>
                  </div>
                </div>
              </div>

              {/* Strasbourg St-Denis - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform opacity-50">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-400">
                    <span className="text-gray-300 font-bold text-lg">2</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-gray-300 font-semibold">Strasbourg St-Denis</p>
                    <p className="text-gray-500 text-sm">€9.99</p>
                  </div>
                </div>
              </div>

              {/* République - Right */}
              <div className="absolute top-32 right-24">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform opacity-50">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-400">
                    <span className="text-gray-300 font-bold text-lg">3</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-gray-300 font-semibold">République</p>
                    <p className="text-gray-500 text-sm">€9.99</p>
                  </div>
                </div>
              </div>

              {/* Additional Episodes */}
              <div className="absolute bottom-32 left-32">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform opacity-30">
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-500">
                    <span className="text-gray-400 font-bold">4</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-gray-400 text-sm font-semibold">Episode 4</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-24 right-48">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform opacity-30">
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-500">
                    <span className="text-gray-400 font-bold">5</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-gray-400 text-sm font-semibold">Episode 5</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 right-32">
                <div className="group cursor-pointer transform hover:scale-110 transition-transform opacity-30">
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-500">
                    <span className="text-gray-400 font-bold">6</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-gray-400 text-sm font-semibold">Episode 6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metro Legend */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
              <h4 className="text-white font-bold mb-2">Légende</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-400 font-semibold">Disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-400 font-semibold">Verrouillé</span>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
              <div className="text-white text-sm">
                <p className="font-bold">Progression</p>
                <p className="text-orange-400 font-bold">1/10 épisodes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Floating Bubbles */}
      <section className="py-4 px-4 bg-black relative overflow-hidden min-h-[250px] flex items-center">
        {/* Floating Bubbles Container */}
        <div className="absolute inset-0 overflow-hidden flex items-center">
          {/* Bubble 1 */}
          <div className="absolute animate-bounce-float-1 opacity-0" 
               style={{
                 left: '10%',
                 top: '40%',
                 animation: 'floatBubble1 8s infinite ease-in-out'
               }}>
            <div className="bg-black/80 border border-orange-500/50 rounded-full p-4 max-w-xs backdrop-blur-sm shadow-lg">
              <p className="text-gray-300 text-base text-center">"WoW j'adore Le récit la tonalité..."</p>
              <p className="text-orange-400 text-sm text-center mt-2 font-bold">- Sonia</p>
            </div>
          </div>
          
          {/* Bubble 2 */}
          <div className="absolute animate-bounce-float-2 opacity-0"
               style={{
                 right: '15%',
                 top: '50%',
                 animation: 'floatBubble2 10s infinite ease-in-out 2s'
               }}>
            <div className="bg-black/80 border border-orange-500/50 rounded-full p-4 max-w-xs backdrop-blur-sm shadow-lg">
              <p className="text-gray-300 text-base text-center">"J'ai adoré le rythme le son..."</p>
              <p className="text-orange-400 text-sm text-center mt-2 font-bold">- Souleyman</p>
            </div>
          </div>
          
          {/* Bubble 3 */}
          <div className="absolute animate-bounce-float-3 opacity-0"
               style={{
                 left: '20%',
                 bottom: '40%',
                 animation: 'floatBubble3 12s infinite ease-in-out 4s'
               }}>
            <div className="bg-black/80 border border-orange-500/50 rounded-full p-4 max-w-xs backdrop-blur-sm shadow-lg">
              <p className="text-gray-300 text-base text-center">"La pression est palpable..."</p>
              <p className="text-orange-400 text-sm text-center mt-2 font-bold">- Rivka</p>
            </div>
          </div>
          
          {/* Bubble 4 */}
          <div className="absolute animate-bounce-float-4 opacity-0"
               style={{
                 right: '25%',
                 bottom: '50%',
                 animation: 'floatBubble4 9s infinite ease-in-out 6s'
               }}>
            <div className="bg-black/80 border border-orange-500/50 rounded-full p-4 max-w-xs backdrop-blur-sm shadow-lg">
              <p className="text-gray-300 text-base text-center">"C'est du grand art..."</p>
              <p className="text-orange-400 text-sm text-center mt-2 font-bold">- Nadège</p>
            </div>
          </div>
          
          {/* Bubble 5 */}
          <div className="absolute animate-bounce-float-5 opacity-0"
               style={{
                 left: '50%',
                 top: '30%',
                 animation: 'floatBubble5 11s infinite ease-in-out 8s'
               }}>
            <div className="bg-black/80 border border-orange-500/50 rounded-full p-4 max-w-xs backdrop-blur-sm shadow-lg">
              <p className="text-gray-300 text-base text-center">"Je suis complètement conquise..."</p>
              <p className="text-orange-400 text-sm text-center mt-2 font-bold">- Fatou</p>
            </div>
          </div>
        </div>
        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes floatBubble1 {
            0%, 100% { opacity: 0; transform: translateY(20px) scale(0.8); }
            20%, 80% { opacity: 1; transform: translateY(-10px) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          
          @keyframes floatBubble2 {
            0%, 100% { opacity: 0; transform: translateY(30px) scale(0.8) rotate(0deg); }
            25%, 75% { opacity: 1; transform: translateY(-15px) scale(1) rotate(5deg); }
            50% { transform: translateY(-25px) scale(1.05) rotate(-5deg); }
          }
          
          @keyframes floatBubble3 {
            0%, 100% { opacity: 0; transform: translateY(-20px) scale(0.8); }
            30%, 70% { opacity: 1; transform: translateY(10px) scale(1); }
            50% { transform: translateY(20px) scale(1.05); }
          }
          
          @keyframes floatBubble4 {
            0%, 100% { opacity: 0; transform: translateX(20px) scale(0.8); }
            25%, 75% { opacity: 1; transform: translateX(-10px) scale(1); }
            50% { transform: translateX(-20px) scale(1.05); }
          }
          
          @keyframes floatBubble5 {
            0%, 100% { opacity: 0; transform: translateY(25px) translateX(-15px) scale(0.8); }
            30%, 70% { opacity: 1; transform: translateY(-15px) translateX(10px) scale(1); }
            50% { transform: translateY(-30px) translateX(15px) scale(1.05); }
          }
        `}</style>
      </section>

      {/* Scrolling Banner */}
      <div className="w-full bg-orange-500 py-3 overflow-hidden relative mb-8">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex space-x-12 font-black text-black text-4xl lg:text-6xl uppercase tracking-tight min-w-max">
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
          </div>
          <div className="flex space-x-12 font-black text-black text-4xl lg:text-6xl uppercase tracking-tight min-w-max">
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
            <span>PUTAIN DE MALÉDICTION</span>
          </div>
        </div>
      </div>


    </div>
  );
}
