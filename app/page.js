import Header from '@/components/Navigation/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to EcomUI</h2>
          <p className="text-gray-600">
            Start exploring our products using the search bar above or navigate through
            the menu.
          </p>
        </div>
      </div>
    </main>
  );
}
