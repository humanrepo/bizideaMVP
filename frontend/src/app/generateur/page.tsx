export default function GenerateurPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Générateur d'idées business
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Utilisez l'IA pour générer des idées innovantes adaptées à vos compétences
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Fonctionnalité en développement
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Le générateur d'idées utilisant l'IA GPT-4 sera bientôt disponible.
              Cette fonctionnalité vous permettra de générer des concepts business innovants
              basés sur vos compétences, intérêts et le marché actuel.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                🚧 Cette page est en cours de développement. Revenez bientôt pour découvrir
                cette fonctionnalité révolutionnaire !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
