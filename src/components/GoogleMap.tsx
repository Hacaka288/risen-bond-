import React from 'react';

interface MapProps {
  height?: string;
}

const MapComponent = ({ height = '100%' }: MapProps) => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3963.7325157746546!2d3.615422076122893!3d6.459520593434249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d6.4594283!2d3.6186417!4m5!1s0x103bf7a0bddd4de3%3A0x8b59f14d229c4dc0!2sPeace%20Castle%20Estate%2C%20Tonia%20Emmanuel%20Ave%2C%20Lagos%2C%20Nigeria!3m2!1d6.4594783!2d3.6188997!5e0!3m2!1sen!2sus!4v1710771307908!5m2!1sen!2sus";

  const containerStyle = {
    width: '100%',
    height,
    borderRadius: '0.75rem',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Peace Castle Estate Map Location"
      ></iframe>
    </div>
  );
};

export default MapComponent; 