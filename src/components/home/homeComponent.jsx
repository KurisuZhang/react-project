const HomeComponent = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Good Evening</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Quick Links</span>
          <button className="material-icons">notifications</button>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-6">
        {/* Example of cards */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <p>A man who dares to waste one hour...</p>
          <p className="mt-4">- CHARLES DARWIN</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-lg font-semibold">Review</h2>
          <p>Hurrah! You've nothing to review.</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-lg font-semibold">3 September 2024</h2>
          <p className="mb-2">Tuesday | 06:35 PM to 03:35 AM</p>
          <button className="text-blue-600">View Swipes</button>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
