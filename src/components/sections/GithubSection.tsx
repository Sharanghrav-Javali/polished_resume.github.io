import { GitBranch, Star, GitCommit, GitPullRequest } from 'lucide-react';

export default function GithubSection() {
  // Generate mock contribution grid squares
  const getContributionColor = (val: number) => {
    if (val === 0) return 'bg-[#161b22]'; // zero contributions
    if (val === 1) return 'bg-[#0e4429]'; // low
    if (val === 2) return 'bg-[#006d32]'; // medium
    if (val === 3) return 'bg-[#26a641]'; // high
    return 'bg-[#39d353]'; // very high
  };

  // Generate 52 weeks * 7 days of grid values
  const gridCells = Array.from({ length: 182 }).map((_, idx) => {
    // Generate some interesting looking patterns
    const row = idx % 7;
    const col = Math.floor(idx / 7);
    
    // Simulate weekends having less commits
    if (row === 0 || row === 6) {
      return Math.random() > 0.85 ? Math.floor(Math.random() * 3) : 0;
    }
    // Simulate active streaks in the middle of weeks
    if (col > 10 && col < 18) {
      return Math.floor(Math.random() * 5);
    }
    return Math.random() > 0.4 ? Math.floor(Math.random() * 4) : 0;
  });

  const topRepos = [
    { name: 'coffee-shop.github.io', desc: 'Responsive coffee shop cafe UI page with smooth animation cards and layout features.', language: 'JavaScript', stars: 2, forks: 0 },
    { name: 'aqi-monitoring-system', desc: 'AI-based AQI prediction dashboard, predicting environmental triggers using machine learning models.', language: 'Python', stars: 1, forks: 0 },
    { name: 'aetherdb-raft', desc: 'Java implementation of the Raft consensus protocol for distributed ledger state synchronization.', language: 'Java', stars: 3, forks: 1 },
  ];

  const githubStats = [
    { label: 'Total Commits', value: '412', icon: GitCommit },
    { label: 'PRs Merged', value: '28', icon: GitPullRequest },
    { label: 'Stars Earned', value: '6', icon: Star },
    { label: 'Repositories', value: '14', icon: GitBranch },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-16">
        
        {/* Title */}
        <div className="space-y-3 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">Analytics</h3>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display">
            GitHub Contributions
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto">
            Real-time performance details, language ratios, and developer activity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Contribution Graph (Span 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-5 rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs font-semibold text-neutral-400">Contribution Calendar (Past 6 Months)</span>
                <a 
                  href="https://github.com/Sharanghrav-Javali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-primary-light hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>@Sharanghrav-Javali</span>
                </a>
              </div>

              {/* Grid Box */}
              <div className="overflow-x-auto py-2">
                <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[500px]">
                  {gridCells.map((val, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2.5 w-2.5 rounded-sm ${getContributionColor(val)} transition-all duration-300 hover:scale-125`}
                      title={`${val} commits`}
                    />
                  ))}
                </div>
              </div>

              {/* Graph Legend */}
              <div className="flex items-center gap-1.5 text-[9px] text-neutral-500 pt-1 justify-end select-none">
                <span>Less</span>
                <div className="h-2 w-2 rounded-sm bg-[#161b22]" />
                <div className="h-2 w-2 rounded-sm bg-[#0e4429]" />
                <div className="h-2 w-2 rounded-sm bg-[#006d32]" />
                <div className="h-2 w-2 rounded-sm bg-[#26a641]" />
                <div className="h-2 w-2 rounded-sm bg-[#39d353]" />
                <span>More</span>
              </div>
            </div>

            {/* Repositories */}
            <div className="space-y-4">
              <span className="text-xs font-semibold text-neutral-400 px-1">Top Repositories</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topRepos.map((repo) => (
                  <div key={repo.name} className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col justify-between h-36">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white tracking-tight truncate max-w-[130px] font-display">{repo.name}</h4>
                        <span className="rounded bg-neutral-900 border border-white/5 px-2 py-0.5 text-[8px] text-neutral-400 font-semibold">{repo.language}</span>
                      </div>
                      <p className="text-[10px] text-neutral-500 leading-normal line-clamp-2">{repo.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 pt-2 text-[9px] text-neutral-400 border-t border-white/5 mt-2">
                      <span className="flex items-center gap-0.5"><Star size={10} /> {repo.stars}</span>
                      <span className="flex items-center gap-0.5"><GitBranch size={10} /> {repo.forks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Stats Card Column */}
          <div className="space-y-6">
            <div className="glass-panel p-5 rounded-xl space-y-5">
              <div className="border-b border-white/5 pb-3">
                <h3 className="text-xs font-semibold text-neutral-400">Profile Analytics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {githubStats.map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded-lg bg-neutral-950 border border-white/5 p-3 flex flex-col justify-between h-20">
                      <div className="flex items-center justify-between text-neutral-500">
                        <span className="text-[9px] font-bold uppercase tracking-wider">{stat.label}</span>
                        <StatIcon size={12} />
                      </div>
                      <span className="text-xl font-bold text-white font-display">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Language Breakdown Card */}
            <div className="glass-panel p-5 rounded-xl space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-semibold text-neutral-400">Language Distribution</span>
              </div>
              <div className="space-y-3.5">
                {/* Horizontal distribution bar */}
                <div className="h-2 w-full rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-500" style={{ width: '40%' }} />
                  <div className="h-full bg-yellow-500" style={{ width: '30%' }} />
                  <div className="h-full bg-purple-500" style={{ width: '20%' }} />
                  <div className="h-full bg-[#e34c26]" style={{ width: '10%' }} />
                </div>
                {/* Legend list */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span>Java (40%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span>JavaScript (30%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <span>Python (20%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e34c26]" />
                    <span>HTML/CSS (10%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
