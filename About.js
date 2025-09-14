import React from 'react';
import { siteData } from '../data/mockData';

const About = () => {
  return (
    <div className="page-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">About Our Project</h1>
          <p className="body-large">
            Understanding the mission, objectives, and impact of environmental awareness through social media advocacy
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="heading-2">Project Mission</h2>
              <p className="body-large">{siteData.aboutProject.mission}</p>
              
              <p className="body-medium" style={{ marginTop: '1.5rem' }}>
                This capstone project demonstrates how digital media can be both informational and empowering, 
                helping unite individual environmental action with larger sustainability goals. Through strategic 
                use of social media platforms, we aim to create measurable impact in environmental awareness and behavior change.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1528122819723-9dca3a31295d" 
                alt="Person showing green leaf representing environmental awareness"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Our Strategic Objectives
          </h2>
          
          <div className="grid">
            {siteData.aboutProject.objectives.map((objective, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: 'var(--gradient-button)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: '600',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </span>
                  <p className="body-medium">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Factor Impact */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Dual-Impact Approach
          </h2>
          
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  📚
                </div>
                <h3 className="heading-3">Educational Awareness</h3>
              </div>
              
              <p className="body-medium" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                The project conducts awareness through distribution of easy-to-read and visual materials about 
                recycling, climate change, and sustainable living.
              </p>
              
              <div>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem', fontSize: '1.1rem' }}>Key Strategies:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Instagram Stories with environmental tips</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ TikTok educational content creation</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Infographics on sustainability practices</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Targeting younger, digitally-native audiences</li>
                </ul>
              </div>
            </div>
            
            <div className="card" style={{ padding: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--gradient-button)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🤝
                </div>
                <h3 className="heading-3">Community Engagement</h3>
              </div>
              
              <p className="body-medium" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                The project engages users in interactive programs like challenges, live-action, and online 
                communities to motivate sustainable behavior and policy change.
              </p>
              
              <div>
                <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem', fontSize: '1.1rem' }}>Key Strategies:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Interactive environmental challenges</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Live Q&A sessions with experts</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Online community building</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ Collective action coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Video */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Understanding Digital Environmental Advocacy
          </h2>
          
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/yiw6_JakZFc"
              title="How Social Media Can Help Save the Environment"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="body-medium" style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
            This video explores how social media platforms can be leveraged for environmental education and activism
          </p>
        </div>
      </section>

      {/* Project Impact */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1603145733146-ae562a55031e" 
                alt="Smartphone with social media apps"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            
            <div>
              <h2 className="heading-2">Expected Social Impact</h2>
              <p className="body-large">{siteData.aboutProject.impact}</p>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 className="heading-3">Measurable Outcomes</h3>
                <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div className="stat-card">
                    <span className="stat-number">500K+</span>
                    <span className="stat-label">Target Reach</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">25%</span>
                    <span className="stat-label">Behavior Change Goal</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Platform Integration</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Educational Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Context */}
      <section className="section" style={{ background: 'var(--accent-wash)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-2">Academic Foundation</h2>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            This capstone project integrates concepts from digital media studies, environmental science, 
            and social psychology to create evidence-based strategies for environmental advocacy through digital channels.
          </p>
          
          <div className="grid" style={{ marginTop: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Digital Media Theory</h4>
              <p className="body-medium">Understanding platform algorithms, content virality, and audience engagement patterns</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Environmental Communication</h4>
              <p className="body-medium">Effective messaging strategies for complex environmental topics and behavior change</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}>Social Movement Theory</h4>
              <p className="body-medium">Leveraging collective action and community organizing through digital platforms</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
