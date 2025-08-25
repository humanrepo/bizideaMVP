export default function CommunautePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Communauté Bizidea
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Partagez vos idées, obtenez des feedbacks et collaborez avec d'autres entrepreneurs
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Forum communautaire en construction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Rejoignez bientôt notre communauté dynamique d'entrepreneurs et d'innovateurs.
              Partagez vos idées, obtenez des retours constructifs, et trouvez des partenaires
              pour concrétiser vos projets.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <p className="text-purple-800 dark:text-purple-200 text-sm">
                👥 Fonctionnalités à venir : Threads de discussion, système de votes,
                commentaires, profils utilisateurs, et notifications en temps réel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
