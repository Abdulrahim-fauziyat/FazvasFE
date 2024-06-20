import React from 'react';
import { Particles as ReactParticles } from 'react-particles';
import ParticlesConfig from '../../config/Particles-config';

const ParticlesBg = ({ children }) => {
  return (
    <div className="particles-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <ReactParticles options={ParticlesConfig} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default ParticlesBg;
