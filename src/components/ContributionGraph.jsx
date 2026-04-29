import { GitHubCalendar } from 'react-github-calendar';

export default function ContributionGraph(){
  return(
    <div className="contribution-section">
      <h3 className="contribution-title" style={{ marginBottom: '16px' }}>
        GitHub Contributions
      </h3>
      <div className="contribution-graph-wrapper">
        <GitHubCalendar 
          username="aaryan-codes56" 
          colorScheme="dark"
          blockSize={11}
          blockMargin={3}
          fontSize={12}
        />
      </div>
    </div>
  )
}
