import React from 'react';
import { Stethoscope, Heart } from 'lucide-react';

const Veterinarians = () => {
  const vets = [
    {
      name: 'Dr. Jeanne',
      image: 'https://images.unsplash.com/photo-1770836037275-38b44e4b101f',
      specialties: ['Gentle Handling', 'Accurate Diagnosis', 'Pet Nutrition'],
      description: 'Known for her gentle and patient approach, Dr. Jeanne has a special talent for making even the most anxious pets feel comfortable. Her expertise in quick and accurate diagnosis has helped countless pets receive timely treatment.',
    },
    {
      name: 'Dr. Boey',
      image: 'https://images.pexels.com/photos/7407055/pexels-photo-7407055.jpeg',
      specialties: ['Modern Veterinary Care', 'Preventive Medicine', 'Animal Welfare'],
      description: 'With a modern perspective on veterinary medicine, Dr. Boey combines traditional care with the latest advancements. Passionate about animal welfare, he provides compassionate treatment to all animals, including strays.',
    },
  ];

  return (
    <section id="vets" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>Meet Our Veterinarians</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            Experienced, caring professionals dedicated to your pet's wellbeing
          </p>
        </div>

        <div style={styles.vetGrid}>
          {vets.map((vet, index) => (
            <div key={index} style={styles.vetCard}>
              <div style={styles.imageWrapper}>
                <img src={vet.image} alt={vet.name} style={styles.vetImage} />
                <div style={styles.imageBadge}>
                  <Heart size={20} color="white" fill="white" />
                </div>
              </div>
              <div style={styles.vetContent}>
                <h3 className="heading-3" style={styles.vetName}>{vet.name}</h3>
                <div style={styles.specialties}>
                  {vet.specialties.map((specialty, idx) => (
                    <span key={idx} style={styles.specialty}>
                      <Stethoscope size={14} />
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="body-medium" style={styles.vetDescription}>{vet.description}</p>
              </div>
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
  vetGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  vetCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
  },
  vetImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  vetContent: {
    padding: '2rem',
  },
  vetName: {
    marginBottom: '1rem',
  },
  specialties: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  specialty: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 1rem',
    background: 'rgba(148, 242, 127, 0.1)',
    color: 'rgb(13, 121, 22)',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  vetDescription: {
    color: 'rgb(131, 146, 140)',
  },
};

export default Veterinarians;
