import React from 'react';
import { Syringe, Stethoscope, Microscope, PillBottle, HeartPulse, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Health Check-ups',
      description: 'Comprehensive physical examinations to monitor your pet\'s overall health and detect any early signs of illness.',
    },
    {
      icon: Syringe,
      title: 'Vaccinations',
      description: 'Essential immunizations to protect your pets from common diseases and keep them healthy throughout their lives.',
    },
    {
      icon: HeartPulse,
      title: 'Diagnosis & Treatment',
      description: 'Accurate diagnosis and effective treatment plans for various pet health conditions with modern veterinary techniques.',
    },
    {
      icon: Microscope,
      title: 'Bloodwork & Lab Tests',
      description: 'Advanced laboratory services for detailed health analysis and diagnostic testing to ensure proper care.',
    },
    {
      icon: PillBottle,
      title: 'Pet Nutrition Advice',
      description: 'Modern, evidence-based guidance on pet nutrition to help your furry friends maintain optimal health and vitality.',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive health maintenance strategies to prevent diseases and ensure your pets live longer, healthier lives.',
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>Our Services</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            Comprehensive veterinary care for your beloved pets
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.iconWrapper}>
                  <IconComponent size={32} color="rgb(13, 121, 22)" strokeWidth={1.5} />
                </div>
                <h3 className="heading-3" style={styles.serviceTitle}>{service.title}</h3>
                <p className="body-medium" style={styles.serviceDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>

        <div style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h3 className="heading-3" style={styles.ctaTitle}>
              Not sure what your pet needs?
            </h3>
            <p className="body-medium" style={styles.ctaText}>
              Contact us today and our experienced veterinarians will guide you on the best care for your pet.
            </p>
            <button 
              className="btn-primary" 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1767457107942-4a7c5dd99cf8" 
            alt="Happy puppies" 
            style={styles.ctaImage}
          />
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  serviceCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    transition: 'all 0.2s ease',
    cursor: 'default',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    background: 'rgba(148, 242, 127, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  serviceTitle: {
    marginBottom: '0.75rem',
  },
  serviceDescription: {
    color: 'rgb(131, 146, 140)',
  },
  ctaSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  ctaContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  ctaTitle: {
    marginBottom: '0.5rem',
  },
  ctaText: {
    color: 'rgb(131, 146, 140)',
  },
  ctaImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
};

export default Services;
