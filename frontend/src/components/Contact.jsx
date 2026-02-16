import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const Contact = () => {
  const [showMapDialog, setShowMapDialog] = useState(false);
  const clinicAddress = '23, Lorong Datuk Sulaiman 7, Taman Tun Dr Ismail, 60000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur';
  
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    petType: '',
    petAge: '',
    visitType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: '',
  });

  const visitTypes = [
    'General Check-up',
    'Vaccination',
    'Health Issue / Diagnosis',
    'Bloodwork / Lab Tests',
    'Nutrition Consultation',
    'Follow-up Visit',
    'Emergency',
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const sendWhatsAppMessage = () => {
    const { ownerName, petName, petType, petAge, visitType, preferredDate, preferredTime, additionalNotes } = formData;
    
    // Validation
    if (!ownerName || !petType || !visitType) {
      alert('Please fill in at least your name, pet type, and visit type');
      return;
    }

    const message = `Hello! I would like to book an appointment at Klinik Haiwan TTDI Vet.

*Owner Name:* ${ownerName}
${petName ? `*Pet Name:* ${petName}` : ''}
*Pet Type:* ${petType}
${petAge ? `*Pet Age:* ${petAge}` : ''}
*Visit Type:* ${visitType}
${preferredDate ? `*Preferred Date:* ${preferredDate}` : ''}
${preferredTime ? `*Preferred Time:* ${preferredTime}` : ''}
${additionalNotes ? `*Additional Notes:* ${additionalNotes}` : ''}

Looking forward to your confirmation. Thank you!`;

    const whatsappNumber = '60106691139';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
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
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="heading-2" style={styles.sectionTitle}>Book an Appointment</h2>
          <p className="body-large" style={styles.sectionSubtitle}>
            Fill in the form below and send us a WhatsApp message
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <div style={styles.formCard}>
            <h3 className="heading-3" style={styles.formTitle}>Appointment Details</h3>
            
            <div style={styles.formGroup}>
              <Label htmlFor="ownerName">Your Name *</Label>
              <Input
                id="ownerName"
                placeholder="Enter your name"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
              />
            </div>

            <div style={styles.formGroup}>
              <Label htmlFor="petName">Pet Name (Optional)</Label>
              <Input
                id="petName"
                placeholder="Enter your pet's name"
                value={formData.petName}
                onChange={(e) => handleInputChange('petName', e.target.value)}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <Label htmlFor="petType">Pet Type *</Label>
                <Input
                  id="petType"
                  placeholder="e.g., Cat, Dog"
                  value={formData.petType}
                  onChange={(e) => handleInputChange('petType', e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <Label htmlFor="petAge">Age Category</Label>
                <Select onValueChange={(value) => handleInputChange('petAge', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Puppy/Kitten">Puppy/Kitten</SelectItem>
                    <SelectItem value="Adult">Adult</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <Label htmlFor="visitType">Visit Type *</Label>
              <Select onValueChange={(value) => handleInputChange('visitType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select visit type" />
                </SelectTrigger>
                <SelectContent>
                  {visitTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input
                  id="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any specific concerns or information we should know?"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={4}
              />
            </div>

            <button className="btn-primary" onClick={sendWhatsAppMessage} style={styles.submitButton}>
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>
          </div>

          {/* Contact Info & Map */}
          <div style={styles.infoSection}>
            <div style={styles.infoCard}>
              <h3 className="heading-3" style={styles.infoTitle}>Contact Information</h3>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <Phone size={20} color="rgb(13, 121, 22)" />
                </div>
                <div>
                  <p style={styles.infoLabel}>Phone</p>
                  <a href="tel:+60106691139" style={styles.infoValue}>+6010-669 1139</a>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <MessageCircle size={20} color="rgb(13, 121, 22)" />
                </div>
                <div>
                  <p style={styles.infoLabel}>WhatsApp</p>
                  <a href="https://wa.me/60106691139" target="_blank" rel="noopener noreferrer" style={styles.infoValue}>
                    +6010-669 1139
                  </a>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <Clock size={20} color="rgb(13, 121, 22)" />
                </div>
                <div>
                  <p style={styles.infoLabel}>Operating Hours</p>
                  <p style={styles.infoValue}>10:00 AM - 7:00 PM</p>
                  <p style={styles.infoSubValue}>Daily</p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <MapPin size={20} color="rgb(13, 121, 22)" />
                </div>
                <div>
                  <p style={styles.infoLabel}>Address</p>
                  <p style={styles.infoValue}>
                    23, Lorong Datuk Sulaiman 7<br />
                    Taman Tun Dr Ismail<br />
                    60000 Kuala Lumpur<br />
                    Wilayah Persekutuan Kuala Lumpur
                  </p>
                </div>
              </div>

              <button className="btn-secondary" onClick={openDirections} style={styles.directionsButton}>
                <MapPin size={18} />
                Get Directions
              </button>
            </div>

            <div style={styles.mapCard}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.840777!2d101.6271!3d3.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s23%2C%20Lorong%20Datuk%20Sulaiman%207%2C%20Taman%20Tun%20Dr%20Ismail%2C%2060000%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%"
                height="300"
                style={styles.map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
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
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: '2rem',
  },
  formCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  submitButton: {
    width: '100%',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  infoTitle: {
    marginBottom: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  infoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: 'rgba(148, 242, 127, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '0.875rem',
    color: 'rgb(131, 146, 140)',
    marginBottom: '0.25rem',
  },
  infoValue: {
    fontSize: '1rem',
    fontWeight: 500,
    color: 'rgb(0, 55, 32)',
    textDecoration: 'none',
  },
  infoSubValue: {
    fontSize: '0.875rem',
    color: 'rgb(131, 146, 140)',
    marginTop: '0.25rem',
  },
  directionsButton: {
    width: '100%',
  },
  mapCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  map: {
    border: 0,
    display: 'block',
  },
};

export default Contact;
