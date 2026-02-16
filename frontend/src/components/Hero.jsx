import React, { useState } from 'react';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const Hero = () => {
  const [showMapDialog, setShowMapDialog] = useState(false);
  const clinicAddress = '23, Lorong Datuk Sulaiman 7, Taman Tun Dr Ismail, 60000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur';
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(clinicAddress);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    setShowMapDialog(false);
  };

  const openWaze = () => {
    const encodedAddress = encodeURIComponent(clinicAddress);
    window.open(`https://waze.com/ul?q=${encodedAddress}`, '_blank');
    setShowMapDialog(false);
  };

  const openDirections = () => {
    setShowMapDialog(true);
  };

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.textContent}>
          <h1 className="heading-1" style={styles.title}>
            KLINIK HAIWAN TTDI VET
          </h1>
          <p className="body-large" style={styles.subtitle}>
            Gentle Care. Professional Treatment. Pets First.
          </p>
          <p className="body-medium" style={styles.description}>
            Your trusted partner in pet healthcare. Compassionate veterinarians dedicated to providing the best care for your beloved cats and dogs.
          </p>
          <div style={styles.buttonGroup}>
            <button className="btn-primary" onClick={scrollToContact}>
              Book an Appointment
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={openDirections}>
              <MapPin size={18} />
              Visit Our Clinic
            </button>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1770836037793-95bdbf190f71" 
            alt="Veterinarian caring for pet" 
            style={styles.heroImage}
          />
        </div>
      </div>

      {/* Map Selection Dialog */}
      <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
        <DialogContent style={styles.dialog}>
          <DialogHeader>
            <DialogTitle style={styles.dialogTitle}>Choose Your Navigation App</DialogTitle>
            <DialogDescription style={styles.dialogDescription}>
              Select your preferred map application to get directions to our clinic
            </DialogDescription>
          </DialogHeader>
          <div style={styles.mapOptions}>
            <button className="btn-primary" onClick={openGoogleMaps} style={styles.mapButton}>
              <Navigation size={20} />
              Google Maps
            </button>
            <button className="btn-primary" onClick={openWaze} style={styles.mapButton}>
              <Navigation size={20} />
              Waze
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const styles = {
  hero: {
    background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingTop: '5rem',
    paddingBottom: '3rem',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.6)',
    zIndex: 0,
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'rgb(13, 121, 22)',
    fontWeight: 600,
  },
  description: {
    color: 'rgb(131, 146, 140)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  imageContainer: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  dialog: {
    maxWidth: '450px',
  },
  dialogTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'rgb(0, 55, 32)',
    marginBottom: '0.5rem',
  },
  dialogDescription: {
    fontSize: '1rem',
    color: 'rgb(131, 146, 140)',
  },
  mapOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  mapButton: {
    width: '100%',
  },
};

export default Hero;
