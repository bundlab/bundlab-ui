import React, { useEffect, useState } from 'react';

const WelcomeDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://your-server-ip:8000/')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => console.error("bundlab API offline", err));
  }, []);

  if (loading) return <div className="p-10 text-white">Initializing bundlab services...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-mono">
      <header className="border-b border-slate-700 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-blue-400"># bundlab_pulse</h1>
        <p className="text-slate-400">Researching AI, APIs, and DevOps 24/7</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl mb-4 text-green-400">System Status</h2>
          <ul className="space-y-2">
            <li><span className="text-slate-500">OS:</span> {data.environment.os}</li>
            <li><span className="text-slate-500">Runtime:</span> {data.environment.runtime}</li>
            <li><span className="text-slate-500">Uptime:</span> 100% (7 days/week)</li>
          </ul>
        </section>

        <section className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl mb-4 text-purple-400">Active Sectors</h2>
          <div className="flex flex-wrap gap-2">
            {data.environment.active_sectors.map(sector => (
              <span key={sector} className="px-3 py-1 bg-slate-700 rounded-full text-xs">
                {sector}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
// Add a quick fetch function inside your component
const checkStatus = async () => {
  try {
    const response = await fetch('http://localhost:8000/');
    const data = await response.json();
    console.log("Lab Status:", data);
  } catch (error) {
    console.error("Lab offline");
  }
};

export default WelcomeDashboard;