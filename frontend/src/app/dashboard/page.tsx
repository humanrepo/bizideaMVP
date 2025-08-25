export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tableau de bord
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Gérez vos idées, suivez vos analyses et consultez vos statistiques
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Dashboard personnel en préparation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Votre espace personnel pour suivre l'évolution de vos idées business.
              Accédez à vos analyses, statistiques de performance, et historiques
              de génération d'idées.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
              <p className="text-indigo-800 dark:text-indigo-200 text-sm">
                📈 Fonctionnalités à venir : Historique des idées, statistiques de performance,
                scores d'analyse, favoris, et export de données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
