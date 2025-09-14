import React from 'react';
import { siteData } from '../data/mockData';

const Strategies = () => {
  return (
    <div className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Environmental Awareness Strategies</h1>
          <p className="body-large">
            Comprehensive approaches to leveraging social media platforms for maximum environmental impact and engagement
          </p>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="section">
        <div className="container">
          {siteData.strategies.map((strategy, index) => (
            <div key={index} style={{ marginBottom: '4rem' }}>
              <div className="grid" style={{ 
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', 
                alignItems: 'center', 
                gap: '4rem' 
              }}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h2 className="heading-2">{strategy.title}</h2>
                      <p className="body-large">{strategy.description}</p>
                      
                      <div style={{ marginTop: '2rem' }}>
                        <h3 className="heading-3">Implementation Tactics</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {strategy.tactics.map((tactic, tacticIndex) => (
                            <li key={tacticIndex} style={{ 
                              marginBottom: '0.75rem', 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              padding: '0.75rem',
                              background: 'var(--accent-wash)',
                              borderRadius: '8px',
                              marginBottom: '0.5rem'
                            }}>
                              <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem', fontSize: '1.2rem' }}>
                                ✅
                              </span>
                              <span className="body-medium">{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <img 
                        src={strategy.image} 
                        alt={strategy.title}
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <img 
                        src={strategy.image} 
                        alt={strategy.title}
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                      />
                    </div>
                    <div>
                      <h2 className="heading-2">{strategy.title}</h2>
                      <p className="body-large">{strategy.description}</p>
                      
                      <div style={{ marginTop: '2rem' }}>
                        <h3 className="heading-3">Implementation Tactics</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {strategy.tactics.map((tactic, tacticIndex) => (
                            <li key={tacticIndex} style={{ 
                              marginBottom: '0.75rem', 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              padding: '0.75rem',
                              background: 'var(--accent-wash)',
                              borderRadius: '8px',
                              marginBottom: '0.5rem'
                            }}>
                              <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem', fontSize: '1.2rem' }}>
                                ✅
                              </span>
                              <span className="body-medium">{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform-Specific Strategies */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Platform-Specific Approaches
          </h2>
          
          <div className="grid">
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F56040)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  IG
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Instagram Strategy</h3>
              <p className="body-medium" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                Visual storytelling through photos, stories, and reels to engage environmentally conscious audiences
              </p>
              
              <div>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Content Types:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>📸 Before/after environmental transformations</li>
                  <li style={{ marginBottom: '0.5rem' }}>📊 Data visualization infographics</li>
                  <li style={{ marginBottom: '0.5rem' }}>🎬 Behind-the-scenes sustainable living</li>
                  <li style={{ marginBottom: '0.5rem' }}>💬 User-generated content campaigns</li>
                </ul>
                
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--accent-wash)', borderRadius: '8px' }}>
                  <strong>Target Engagement:</strong> 2.35B monthly users, 71% of young adults active
                </div>
              </div>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #FF0050, #00F2EA)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  TT
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>TikTok Strategy</h3>
              <p className="body-medium" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                Short-form educational content and challenges that make environmental topics accessible and engaging
              </p>
              
              <div>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Content Types:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>⚡ Quick environmental facts (15-30 seconds)</li>
                  <li style={{ marginBottom: '0.5rem' }}>🏆 Sustainability challenge videos</li>
                  <li style={{ marginBottom: '0.5rem' }}>🎭 Educational skits and storytelling</li>
                  <li style={{ marginBottom: '0.5rem' }}>🔄 Trend-jacking with environmental messages</li>
                </ul>
                
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--accent-wash)', borderRadius: '8px' }}>
                  <strong>Target Engagement:</strong> 1.05B users, 87% of Gen Z uses daily
                </div>
              </div>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #1DA1F2, #0D7EC0)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  X
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Twitter/X Strategy</h3>
              <p className="body-medium" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                Real-time environmental news, policy discussions, and direct engagement with activists and organizations
              </p>
              
              <div>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Content Types:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>📰 Breaking environmental news commentary</li>
                  <li style={{ marginBottom: '0.5rem' }}>🧵 Educational thread series</li>
                  <li style={{ marginBottom: '0.5rem' }}>🗳️ Policy analysis and advocacy</li>
                  <li style={{ marginBottom: '0.5rem' }}>💬 Live-tweeting environmental events</li>
                </ul>
                
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--accent-wash)', borderRadius: '8px' }}>
                  <strong>Target Engagement:</strong> 450M users, real-time conversation leaders
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Framework */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Content Creation Framework
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h3 className="heading-3">The IMPACT Method</h3>
              <div style={{ marginTop: '2rem' }}>
                {[
                  { letter: 'I', word: 'Inspire', description: 'Create emotionally compelling content that motivates action' },
                  { letter: 'M', word: 'Motivate', description: 'Provide clear, actionable steps for environmental change' },
                  { letter: 'P', word: 'Personalize', description: 'Connect global issues to individual daily experiences' },
                  { letter: 'A', word: 'Amplify', description: 'Use hashtags and trends to maximize reach and engagement' },
                  { letter: 'C', word: 'Community', description: 'Foster discussions and build supportive networks' },
                  { letter: 'T', word: 'Track', description: 'Measure impact and adjust strategies based on data' }
                ].map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: index % 2 === 0 ? 'var(--accent-wash)' : 'transparent',
                    borderRadius: '8px'
                  }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: 'var(--gradient-button)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'white',
                      fontWeight: '600',
                      marginRight: '1rem',
                      flexShrink: 0
                    }}>
                      {item.letter}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--accent-text)', marginBottom: '0.5rem' }}>{item.word}</h4>
                      <p className="body-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg" 
                alt="Plant in hands representing environmental stewardship"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              />
              
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Content Performance Metrics</h4>
                <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="stat-card">
                    <span className="stat-number">65%</span>
                    <span className="stat-label">Higher engagement with visuals</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">40%</span>
                    <span className="stat-label">More shares with calls-to-action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement & Analytics */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Success Measurement
          </h2>
          
          <div className="grid">
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)' }}>Engagement Metrics</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>📊 Reach and impressions across platforms</li>
                <li style={{ marginBottom: '0.5rem' }}>💬 Comments and meaningful interactions</li>
                <li style={{ marginBottom: '0.5rem' }}>🔄 Shares and user-generated content</li>
                <li style={{ marginBottom: '0.5rem' }}>📈 Follower growth and retention rates</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)' }}>Behavioral Impact</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>🎯 Click-through rates to resources</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Challenge participation rates</li>
                <li style={{ marginBottom: '0.5rem' }}>🌱 Reported behavior changes</li>
                <li style={{ marginBottom: '0.5rem' }}>📝 Survey responses and feedback</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)' }}>Long-term Outcomes</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>🏛️ Policy discussion references</li>
                <li style={{ marginBottom: '0.5rem' }}>📰 Media coverage generated</li>
                <li style={{ marginBottom: '0.5rem' }}>🤝 Partnership and collaboration requests</li>
                <li style={{ marginBottom: '0.5rem' }}>🌍 Community action initiatives started</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategies;
