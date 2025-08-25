export default function AnalysePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Analyse de marché
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Analysez la viabilité de vos idées avec des données marché et un scoring intelligent
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Module d'analyse en développement
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre système d'analyse de marché utilisant l'IA sera bientôt opérationnel.
              Il vous fournira des insights précieux sur la concurrence, la taille du marché,
              et un scoring de viabilité (0-100) pour chaque idée business.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                📊 Fonctionnalités à venir : Analyse de concurrence, données marché en temps réel,
                scoring intelligent, et recommandations personnalisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
