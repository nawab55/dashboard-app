function Dashboard() {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700">Total Sales</h3>
            <p className="text-3xl font-bold text-blue-900 mt-2">$24,780</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-green-700">Active Users</h3>
            <p className="text-3xl font-bold text-green-900 mt-2">1,429</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-purple-700">New Orders</h3>
            <p className="text-3xl font-bold text-purple-900 mt-2">89</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;