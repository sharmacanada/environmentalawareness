import React from 'react';
import { siteData } from '../data/mockData';

const CaseStudies = () => {
  return (
    <div className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Real-World Case Studies</h1>
          <p className="body-large">
            Examining successful environmental social media campaigns and their measurable impact on awareness and behavior change
          </p>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="heading-2">Proven Digital Environmental Impact</h2>
            <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              These case studies demonstrate the transformative power of strategic social media use in environmental advocacy, 
              showing real metrics and outcomes from successful campaigns.
            </p>
          </div>
          
          {siteData.caseStudies.map((study, index) => (
            <div key={index} style={{ marginBottom: '5rem' }}>
              <div className="card" style={{ padding: '3rem' }}>
                <div className="grid" style={{ 
                  gridTemplateColumns: '1fr 1fr', 
                  alignItems: 'center', 
                  gap: '4rem' 
                }}>
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <div style={{ marginBottom: '2rem' }}>
                          <span style={{ 
                            background: 'var(--gradient-button)', 
                            color: 'white', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '20px', 
                            fontSize: '0.875rem',
                            fontWeight: '600'
                          }}>
                            Case Study {index + 1}
                          </span>
                        </div>
                        
                        <h2 className="heading-2">{study.title}</h2>
                        
                        <div style={{ 
                          display: 'flex', 
                          gap: '2rem', 
                          marginBottom: '1.5rem',
                          flexWrap: 'wrap'
                        }}>
                          <div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Platform:</span>
                            <p style={{ color: 'var(--accent-text)', fontWeight: '600', margin: '0.25rem 0 0 0' }}>
                              {study.platform}
                            </p>
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Reach:</span>
                            <p style={{ color: 'var(--accent-text)', fontWeight: '600', margin: '0.25rem 0 0 0' }}>
                              {study.reach}
                            </p>
                          </div>
                        </div>
                        
                        <p className="body-large">{study.description}</p>
                        
                        <div style={{ 
                          background: 'var(--accent-wash)', 
                          padding: '1.5rem', 
                          borderRadius: '12px',
                          marginTop: '2rem'
                        }}>
                          <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Key Impact:</h4>
                          <p style={{ 
                            fontSize: '1.5rem', 
                            fontWeight: '600', 
                            color: 'var(--text-primary)',
                            margin: 0
                          }}>
                            {study.impact}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                        />
                      </div>
                      
                      <div>
                        <div style={{ marginBottom: '2rem' }}>
                          <span style={{ 
                            background: 'var(--gradient-button)', 
                            color: 'white', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '20px', 
                            fontSize: '0.875rem',
                            fontWeight: '600'
                          }}>
                            Case Study {index + 1}
                          </span>
                        </div>
                        
                        <h2 className="heading-2">{study.title}</h2>
                        
                        <div style={{ 
                          display: 'flex', 
                          gap: '2rem', 
                          marginBottom: '1.5rem',
                          flexWrap: 'wrap'
                        }}>
                          <div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Platform:</span>
                            <p style={{ color: 'var(--accent-text)', fontWeight: '600', margin: '0.25rem 0 0 0' }}>
                              {study.platform}
                            </p>
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Reach:</span>
                            <p style={{ color: 'var(--accent-text)', fontWeight: '600', margin: '0.25rem 0 0 0' }}>
                              {study.reach}
                            </p>
                          </div>
                        </div>
                        
                        <p className="body-large">{study.description}</p>
                        
                        <div style={{ 
                          background: 'var(--accent-wash)', 
                          padding: '1.5rem', 
                          borderRadius: '12px',
                          marginTop: '2rem'
                        }}>
                          <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Key Impact:</h4>
                          <p style={{ 
                            fontSize: '1.5rem', 
                            fontWeight: '600', 
                            color: 'var(--text-primary)',
                            margin: 0
                          }}>
                            {study.impact}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Detailed Analysis */}
                <div style={{ marginTop: '3rem' }}>
                  <div className="grid">
                    <div>
                      <h3 className="heading-3" style={{ color: 'var(--accent-text)' }}>Strategic Tactics</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {study.keyTactics.map((tactic, tacticIndex) => (
                          <li key={tacticIndex} style={{ 
                            marginBottom: '0.75rem', 
                            display: 'flex', 
                            alignItems: 'flex-start',
                            padding: '0.75rem',
                            background: 'var(--bg-section)',
                            borderRadius: '8px'
                          }}>
                            <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem', fontSize: '1.1rem' }}>
                              🎯
                            </span>
                            <span className="body-medium">{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="heading-3" style={{ color: 'var(--accent-text)' }}>Measurable Results</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} style={{ 
                            marginBottom: '0.75rem', 
                            display: 'flex', 
                            alignItems: 'flex-start',
                            padding: '0.75rem',
                            background: 'var(--bg-section)',
                            borderRadius: '8px'
                          }}>
                            <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem', fontSize: '1.1rem' }}>
                              📊
                            </span>
                            <span className="body-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Factors Analysis */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Common Success Factors
          </h2>
          
          <div className="grid">
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  🎯
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Authentic Messaging</h3>
              <p className="body-medium" style={{ textAlign: 'center' }}>
                Successful campaigns maintain genuine, consistent messaging that resonates with target audiences 
                and builds trust through transparency and authenticity.
              </p>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  🤝
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Community Building</h3>
              <p className="body-medium" style={{ textAlign: 'center' }}>
                Creating spaces for meaningful interaction and collective action, fostering long-term engagement 
                beyond individual posts or campaigns.
              </p>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  📊
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Data-Driven Strategy</h3>
              <p className="body-medium" style={{ textAlign: 'center' }}>
                Using analytics and feedback to continuously optimize content, timing, and approach for 
                maximum reach and impact across different platforms.
              </p>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  🔄
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Cross-Platform Integration</h3>
              <p className="body-medium" style={{ textAlign: 'center' }}>
                Coordinating campaigns across multiple social media platforms while adapting content 
                to each platform's unique features and audience expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Video */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Learn from Successful Environmental Campaigns
          </h2>
          
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/fkX-4pUbK24"
              title="Successful Environmental Social Media Campaigns"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="body-medium" style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
            Analysis of breakthrough environmental campaigns and their digital strategies
          </p>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section" style={{ background: 'var(--accent-wash)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-2">Key Takeaways for Environmental Advocates</h2>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            These case studies reveal actionable insights that can be applied to new environmental awareness campaigns
          </p>
          
          <div className="grid">
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem', textAlign: 'center' }}>Content Strategy</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ Visual content performs 65% better than text-only</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ User-generated content increases authenticity</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Educational content builds long-term engagement</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Hashtag strategy can amplify reach by 12.6x</li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem', textAlign: 'center' }}>Engagement Tactics</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ Challenges and competitions drive participation</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Influencer partnerships expand audience reach</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Real-time interaction builds community</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Clear calls-to-action increase conversion rates</li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem', textAlign: 'center' }}>Impact Measurement</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ Track engagement beyond likes and shares</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Monitor behavior change indicators</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Measure policy discussion mentions</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Document real-world action outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
