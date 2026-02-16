import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Dedicated to providing gentle, loving care to every pet that walks through our doors.',
    },
    {
      icon: Award,
      title: 'Experienced Veterinarians',
      description: 'Our skilled team brings years of experience in modern veterinary practices.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We care deeply about all animals, including stray cats and dogs in our community.',
    },
    {
      icon: Sparkles,
      title: 'Modern Facilities',
      description: 'Clean, comfortable clinic with professional-grade equipment and instruments.',
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>About Our Clinic</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            A trusted veterinary clinic in TTDI, committed to exceptional pet care
          </p>
        </div>

        <div style={styles.grid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} style={styles.card}>
                <div style={styles.iconWrapper}>
                  <IconComponent size={28} color="rgb(13, 121, 22)" strokeWidth={2} />
                </div>
                <h3 className="heading-3" style={styles.cardTitle}>{feature.title}</h3>
                <p className="body-medium" style={styles.cardDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div style={styles.aboutContent}>
          <div style={styles.imageGrid}>
            <img 
              src="https://images.pexels.com/photos/6234607/pexels-photo-6234607.jpeg" 
              alt="Modern clinic interior" 
              style={styles.aboutImage}
            />
            <img 
              src="https://images.unsplash.com/photo-1763718598528-21e3f75b2836" 
              alt="Happy pets" 
              style={styles.aboutImage}
            />
          </div>
          <div style={styles.aboutText}>
            <h3 className="heading-3" style={styles.aboutHeading}>
              Your Pet's Health is Our Priority
            </h3>
            <p className="body-medium" style={styles.aboutParagraph}>
              At Klinik Haiwan TTDI Vet, we understand that your pets are part of your family. Our clinic is run by dedicated veterinarians who truly care about animal wellbeing, providing compassionate care with a gentle touch.
            </p>
            <p className="body-medium" style={styles.aboutParagraph}>
              We pride ourselves on accurate diagnosis, modern treatment approaches, and personalized care for every pet. From routine check-ups to specialized treatments, we're here to ensure your furry friends live their healthiest, happiest lives.
            </p>
            <p className="body-medium" style={styles.aboutParagraph}>
              Our commitment extends beyond our patients—we also support stray animals in the community, reflecting our deep passion for animal welfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 1.5rem',
    background: 'rgba(0, 0, 0, 0.02)',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    transition: 'all 0.2s ease',
    cursor: 'default',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: 'rgba(148, 242, 127, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  cardTitle: {
    marginBottom: '0.75rem',
  },
  cardDescription: {
    color: 'rgb(131, 146, 140)',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  imageGrid: {
    display: 'grid',
    gap: '1rem',
  },
  aboutImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  aboutText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  aboutHeading: {
    marginBottom: '0.5rem',
  },
  aboutParagraph: {
    color: 'rgb(131, 146, 140)',
  },
};

export default About;
