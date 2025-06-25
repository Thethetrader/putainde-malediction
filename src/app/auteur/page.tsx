"use client";

export default function Auteur() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800/50">
          <a href="/#livre" className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
            Le livre
          </a>
          <a href="/auteur" className="text-orange-400 text-sm font-medium">
            L'auteur
          </a>
          <a href="/#map" className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
            Map
          </a>
        </div>
      </nav>

      {/* Author Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-4">
              <span className="text-white">ANTONI</span>
              <span className="text-orange-500"> DOUMBIA</span>
            </h1>
            <p className="text-gray-400 text-xl">L'auteur</p>
          </div>

          {/* Author Story - Brief */}
          <div className="mb-8">
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed text-center">
              Originaire du 18ème arrondissement, Antoni Doumbia nous livre son parcours atypique entre musique, nuit parisienne et <span className="text-orange-500">malédiction familiale</span>.
            </p>
          </div>

          {/* Author Story - Full */}
          <div className="bg-gray-900/50 rounded-lg p-8 lg:p-12 border border-gray-800/50">
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
              Je m'appelle Antoni Doumbia et voici mon histoire. J'ai grandi dans le 18ème arrondissement de Paris. Je suis <span className="text-orange-500">le fruit de l'union d'une métisse bretonne antillaise et d'un père malien</span>. Après avoir été touché par une malédiction familiale venue d'Afrique, je vous conte à travers ce récit mon parcours atypique, mes frasques dans le monde de la nuit, mes succès dans l'univers de la musique avec mon groupe, dont certains n'ignorent peut-être pas quelques classiques. Ce livre ne repose pas sur cet aspect, mais sur cette <span className="text-orange-500">quête de vérité, de réponse et de délivrance</span>. J'ai aussi composé la musique pour une immersion la plus totale.
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 