import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71',
      alt: 'Veterinarian examining pet',
    },
    {
      url: 'https://images.unsplash.com/photo-1770836037275-38b44e4b101f',
      alt: 'Professional pet care',
    },
    {
      url: 'https://images.pexels.com/photos/6234607/pexels-photo-6234607.jpeg',
      alt: 'Modern clinic interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1770836037949-c5e8db65aa86',
      alt: 'Dental examination',
    },
    {
      url: 'https://images.unsplash.com/photo-1763718598528-21e3f75b2836',
      alt: 'Happy healthy dogs',
    },
    {
      url: 'https://images.unsplash.com/photo-1767457107942-4a7c5dd99cf8',
      alt: 'Adorable puppies',
    },
  ];

  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>Our Clinic Gallery</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            See our modern facilities and the happy pets we care for
          </p>
        </div>

        <div style={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} style={styles.imageCard}>
              <img src={image.url} alt={image.alt} style={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 1.5rem',
    background: '#FFFFFF',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    color: 'rgb(131, 146, 140)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  imageCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    display: 'block',
  },
};

export default Gallery;
