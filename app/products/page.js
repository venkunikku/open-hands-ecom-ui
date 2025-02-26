import BurgerMenu from '@/components/Navigation/BurgerMenu';
import SearchBar from '@/components/Search/SearchBar';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">EcomUI</h1>
              </div>
              <div className="hidden md:block flex-1 mx-10">
                <SearchBar />
              </div>
              <div className="md:hidden">
                <BurgerMenu />
              </div>
            </div>
          </div>
          <div className="md:hidden py-4">
            <SearchBar />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product cards will be populated here */}
            <div className="border rounded-lg p-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4">
                {/* Product image placeholder */}
                <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium">Sample Product</h3>
              <p className="text-gray-500 text-sm">Category A</p>
              <p className="text-indigo-600 font-medium mt-2">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}