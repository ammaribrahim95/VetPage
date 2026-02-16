import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Tiffany T',
      rating: 5,
      text: 'Dr. Jeanne is very gentle and attentive. She handled my pet with great care and patience. Highly recommended.',
    },
    {
      name: 'Fazlina Ihzan',
      rating: 5,
      text: 'Very grateful for the doctors. Very friendly and welcoming. Dr Jeanne identified my cat\'s illness quickly.',
    },
    {
      name: 'Jin Li Boey',
      rating: 5,
      text: 'The clinic is spotless with a comfortable atmosphere. Professional tools and high-quality instruments.',
    },
    {
      name: 'J W',
      badge: 'Local Guide',
      rating: 5,
      text: 'Dr Jeanne and Dr Boey are wonderful. I appreciate their modern perspective on pet nutrition.',
    },
    {
      name: 'Hungyen Lee',
      rating: 5,
      text: 'Literally saved my puppy! Very experienced, knowledgeable, and full of passion.',
    },
    {
      name: 'Els Irhamy',
      rating: 5,
      text: 'This is the first vet where my cat stayed calm during bloodwork. Truly gentle handling.',
    },
    {
      name: 'Boon L Ng',
      rating: 5,
      text: 'Run by skilled and compassionate veterinarians who also care for stray animals.',
    },
    {
      name: 'Luna Chan',
      rating: 5,
      text: 'Everyone is very kind, affordable pricing, and excellent service.',
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div style={styles.starWrapper}>
        {[...Array(rating)].map((_, index) => (
          <Star key={index} size={16} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>What Our Clients Say</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            Trusted by pet owners across TTDI and Kuala Lumpur
          </p>
        </div>

        <div style={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <StarRating rating={review.rating} />
              <p className="body-medium" style={styles.reviewText}>{review.text}</p>
              <div style={styles.reviewer}>
                <div style={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <p style={styles.reviewerName}>{review.name}</p>
                  {review.badge && <span style={styles.badge}>{review.badge}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.statsSection}>
          <div style={styles.stat}>
            <h3 className="heading-2" style={styles.statNumber}>5.0</h3>
            <p className="body-medium" style={styles.statLabel}>Average Rating</p>
            <div style={styles.starWrapper}>
              <Star size={20} fill="#FFD700" color="#FFD700" />
              <Star size={20} fill="#FFD700" color="#FFD700" />
              <Star size={20} fill="#FFD700" color="#FFD700" />
              <Star size={20} fill="#FFD700" color="#FFD700" />
              <Star size={20} fill="#FFD700" color="#FFD700" />
            </div>
          </div>
          <div style={styles.stat}>
            <h3 className="heading-2" style={styles.statNumber}>500+</h3>
            <p className="body-medium" style={styles.statLabel}>Happy Pet Owners</p>
          </div>
          <div style={styles.stat}>
            <h3 className="heading-2" style={styles.statNumber}>10+</h3>
            <p className="body-medium" style={styles.statLabel}>Years of Experience</p>
          </div>
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
  reviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  reviewCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  starWrapper: {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '1rem',
  },
  reviewText: {
    color: 'rgb(131, 146, 140)',
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
  reviewer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '1.125rem',
  },
  reviewerName: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: 'rgb(0, 55, 32)',
    margin: 0,
  },
  badge: {
    fontSize: '0.75rem',
    color: 'rgb(131, 146, 140)',
    fontWeight: 500,
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    padding: '3rem',
    background: 'rgba(148, 242, 127, 0.1)',
    borderRadius: '12px',
    textAlign: 'center',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  statNumber: {
    color: 'rgb(13, 121, 22)',
    marginBottom: '0.25rem',
  },
  statLabel: {
    color: 'rgb(131, 146, 140)',
  },
};

export default Reviews;
