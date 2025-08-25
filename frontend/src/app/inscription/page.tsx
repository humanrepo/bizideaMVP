export default function InscriptionPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Créer un nouveau compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Ou{' '}
          <a href="/connexion" className="font-medium text-primary-600 hover:text-primary-500">
            connectez-vous à votre compte existant
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Formulaire d&apos;inscription à venir...
          </p>
        </div>
      </div>
    </div>
  )
}
