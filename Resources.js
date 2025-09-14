import React from 'react';
import { siteData } from '../data/mockData';

const Resources = () => {
  return (
    <div className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Environmental Resources Hub</h1>
          <p className="body-large">
            Curated collection of tools, research, and educational materials to support your environmental awareness campaigns
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section">
        <div className="container">
          {siteData.resources.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '4rem' }}>
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '3rem',
                padding: '2rem',
                background: categoryIndex % 2 === 0 ? 'var(--bg-section)' : 'transparent',
                borderRadius: '12px'
              }}>
                <h2 className="heading-2" style={{ color: 'var(--accent-text)' }}>
                  {category.category}
                </h2>
                <p className="body-medium" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {category.category === 'Research & Data' && 'Academic research, statistics, and data-driven insights for evidence-based campaigns'}
                  {category.category === 'Tools & Platforms' && 'Digital tools and platforms to create, manage, and optimize your environmental content'}
                  {category.category === 'Educational Content' && 'Ready-to-use educational materials and learning resources for all audiences'}
                </p>
              </div>
              
              <div className="grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="card" style={{ position: 'relative' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <span style={{ 
                        background: 'var(--gradient-button)', 
                        color: 'white', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="heading-3">{item.title}</h3>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '1rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{ marginRight: '0.5rem' }}>🏛️</span>
                      <span>{item.source}</span>
                    </div>
                    
                    <p className="body-medium">{item.description}</p>
                    
                    <div style={{ 
                      marginTop: '1.5rem',
                      padding: '1rem',
                      background: 'var(--accent-wash)',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <a href="#" className="btn-secondary" style={{ textDecoration: 'none' }}>
                        Access Resource
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Essential Digital Tools for Environmental Advocacy
          </h2>
          
          <div className="grid">
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  🎨
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Content Creation</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🖼️</span>
                    <span className="body-medium">Canva - Environmental infographic templates</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🎬</span>
                    <span className="body-medium">Adobe Premiere Rush - Video editing</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>📊</span>
                    <span className="body-medium">Piktochart - Data visualization</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🎙️</span>
                    <span className="body-medium">Anchor - Podcast creation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  📅
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Campaign Management</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>📱</span>
                    <span className="body-medium">Hootsuite - Multi-platform scheduling</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>📈</span>
                    <span className="body-medium">Buffer - Analytics and insights</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🔍</span>
                    <span className="body-medium">Sprout Social - Social listening</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>📊</span>
                    <span className="body-medium">Google Analytics - Website tracking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(45deg, #11998e, #38ef7d)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto',
                  fontSize: '1.5rem'
                }}>
                  🌍
                </div>
              </div>
              
              <h3 className="heading-3" style={{ textAlign: 'center' }}>Environmental Data</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🌡️</span>
                    <span className="body-medium">NASA Climate - Real-time data</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>💨</span>
                    <span className="body-medium">EPA Air Quality - Pollution data</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>🧮</span>
                    <span className="body-medium">Carbon Trust - Footprint calculator</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-text)', marginRight: '0.5rem' }}>📊</span>
                    <span className="body-medium">Our World in Data - Statistics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Data Dashboard */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Current Environmental Data
          </h2>
          
          <div className="grid">
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)', textAlign: 'center' }}>Climate Indicators</h3>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="body-medium">Global Temperature Increase</span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-text)' }}>+1.1°C</span>
                  </div>
                  <div style={{ background: 'var(--bg-section)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ background: 'var(--gradient-button)', width: '55%', height: '100%' }}></div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="body-medium">CO2 Concentration</span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-text)' }}>421 ppm</span>
                  </div>
                  <div style={{ background: 'var(--bg-section)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ background: 'var(--gradient-button)', width: '85%', height: '100%' }}></div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="body-medium">Sea Level Rise</span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-text)' }}>3.4mm/year</span>
                  </div>
                  <div style={{ background: 'var(--bg-section)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ background: 'var(--gradient-button)', width: '34%', height: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)', textAlign: 'center' }}>Social Media Reach</h3>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>2.35B</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Instagram Users</div>
                </div>
                
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎵</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>1.05B</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>TikTok Users</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📺</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>2.7B</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>YouTube Users</div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="heading-3" style={{ color: 'var(--accent-text)', textAlign: 'center' }}>Youth Engagement</h3>
              <div style={{ marginTop: '2rem' }}>
                <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="stat-card">
                    <span className="stat-number" style={{ fontSize: '1.5rem' }}>83%</span>
                    <span className="stat-label">Worried about climate</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number" style={{ fontSize: '1.5rem' }}>71%</span>
                    <span className="stat-label">Get news from social</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number" style={{ fontSize: '1.5rem' }}>73%</span>
                    <span className="stat-label">Pay more for sustainable</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number" style={{ fontSize: '1.5rem' }}>32%</span>
                    <span className="stat-label">Join online campaigns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Video */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Digital Tools for Environmental Education
          </h2>
          
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/6BIYN0sLZwc"
              title="Digital Tools for Environmental Education and Awareness"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="body-medium" style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
            Overview of digital tools and platforms for creating effective environmental awareness content
          </p>
        </div>
      </section>

      {/* Resource Download CTA */}
      <section className="section" style={{ background: 'var(--accent-wash)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-2">Start Your Environmental Campaign Today</h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Download our comprehensive toolkit with templates, guides, and resources to launch your 
            environmental awareness campaign on social media.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary" style={{ textDecoration: 'none' }}>
              Download Toolkit
            </a>
            <a href="#" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View Templates
            </a>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Join thousands of environmental advocates using these resources
            </p>
            
            <div className="stats-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="stat-card">
                <span className="stat-number" style={{ fontSize: '1.5rem' }}>10K+</span>
                <span className="stat-label">Downloads</span>
              </div>
              <div className="stat-card">
                <span className="stat-number" style={{ fontSize: '1.5rem' }}>500+</span>
                <span className="stat-label">Active Campaigns</span>
              </div>
              <div className="stat-card">
                <span className="stat-number" style={{ fontSize: '1.5rem' }}>50M+</span>
                <span className="stat-label">People Reached</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
