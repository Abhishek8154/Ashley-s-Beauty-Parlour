import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Sparkles,
  Droplets,
  Heart,
  ShieldCheck,
  Award,
  ChevronRight,
  Send
} from 'lucide-react';

const BUSINESS_NAME = "Ashley's Beauty Parlour And Clinic";
const PHONE_NUMBER = "+91 8291502060";
const WHATSAPP_LINK = "https://wa.me/918291502060";
const ADDRESS = "Shop no 18A, Victory Mansion, Sitladevi Temple Rd, New Girgaonkar Wadi, Mahim West, Mahim, Mumbai, Maharashtra 400016";
const MAP_EMBED_URL = "https://maps.google.com/maps?q=Victory+Mansion,+Sitladevi+Temple+Rd,+Mahim+West,+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-rose-600' : 'text-white'}`}>
              Ashley's
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-rose-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-rose-500 text-white hover:bg-rose-600' 
                  : 'bg-white text-rose-600 hover:bg-rose-50'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-rose-500 hover:bg-rose-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-full text-base font-medium bg-rose-500 text-white hover:bg-rose-600"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-rose-200 font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Welcome to
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          {BUSINESS_NAME}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 font-light mb-10 font-serif italic"
        >
          "Enhancing Your Natural Beauty"
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Book Appointment <ChevronRight size={18} />
          </a>
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
          >
            <Phone size={18} /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" 
                alt="Beauty Parlour Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-50 p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-rose-500 text-white p-3 rounded-full">
                  <Award size={32} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">10+</p>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-rose-500 font-medium tracking-wider uppercase mb-2">About Us</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Discover Your True Radiance
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to <strong>{BUSINESS_NAME}</strong>, your ultimate destination for premium beauty and skincare. We believe that every individual possesses unique beauty, and our mission is to enhance it with professional care and expertise.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our team of experienced beauticians specializes in professional skincare treatments, bridal makeovers, and personalized beauty care. We pride ourselves on maintaining the highest standards of hygiene, using only premium quality beauty products to ensure complete customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Experienced Beauticians",
                "Premium Quality Products",
                "Strict Hygiene Standards",
                "Personalized Treatments"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-rose-100 p-1 rounded-full text-rose-500">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
              Explore Our Services <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Facial Treatments",
      description: "Rejuvenating facials tailored to your skin type for a glowing, youthful complexion.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Bridal Makeup",
      description: "Flawless, long-lasting bridal makeovers to make your special day truly unforgettable.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Party Makeup",
      description: "Glamorous makeup looks perfect for parties, events, and special occasions.",
      image: "https://images.unsplash.com/photo-1512496015851-a1cbf4c560c0?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Skin Care Treatments",
      description: "Advanced clinical treatments targeting acne, pigmentation, and anti-aging.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Hair Styling & Care",
      description: "Expert haircuts, coloring, spa treatments, and styling for healthy, beautiful hair.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Waxing & Threading",
      description: "Gentle and hygienic hair removal services for smooth, flawless skin.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-rose-500 font-medium tracking-wider uppercase mb-2">What We Offer</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg">
            Indulge in our comprehensive range of beauty and clinical treatments designed to pamper you from head to toe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <a href="#contact" className="text-rose-500 font-medium inline-flex items-center gap-1 hover:text-rose-600">
                  Book Now <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Looking for specialized Beauty Clinic Treatments?</p>
          <a href="#contact" className="inline-block px-8 py-3 border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white rounded-full font-medium transition-colors">
            Consult Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Bridal & Makeup', 'Hair & Skin Care', 'Interior'];

  const galleryImages = [
    // Interior
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", category: "Interior" },
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop&crop=edges", category: "Interior" },
    
    // Bridal & Makeup (Gallery 2)
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop", category: "Bridal & Makeup" },
    { src: "https://images.unsplash.com/photo-1512496015851-a1cbf4c560c0?q=80&w=800&auto=format&fit=crop", category: "Bridal & Makeup" },
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", category: "Bridal & Makeup" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop&crop=faces", category: "Bridal & Makeup" },
    
    // Hair & Skin Care (Gallery 3)
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", category: "Hair & Skin Care" },
    { src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop", category: "Hair & Skin Care" },
    { src: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop", category: "Hair & Skin Care" },
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop&crop=entropy", category: "Hair & Skin Care" },
    { src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop&crop=faces", category: "Hair & Skin Care" },
  ];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h4 className="text-rose-500 font-medium tracking-wider uppercase mb-2">Portfolio</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
            Our Gallery
          </h2>
          
          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-rose-50 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div 
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-rose-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                </div>
                <img 
                  src={img.src} 
                  alt={`${img.category} gallery image`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Experienced Beauticians",
      description: "Highly trained professionals dedicated to perfecting your look."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Premium Beauty Products",
      description: "We use only top-tier, skin-safe products for all our treatments."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Hygienic Environment",
      description: "Strict sanitization protocols for your safety and peace of mind."
    },
    {
      icon: <Heart size={32} />,
      title: "Affordable Packages",
      description: "Luxury beauty services tailored to fit your budget."
    },
    {
      icon: <Droplets size={32} />,
      title: "Personalized Care",
      description: "Customized treatments based on your unique skin and hair needs."
    }
  ];

  return (
    <section className="py-20 bg-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-rose-200 max-w-2xl mx-auto text-lg">
            Experience the perfect blend of luxury, expertise, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'lg:col-start-3' : ''}`}
            >
              <div className="text-gold-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-rose-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      text: "Absolutely loved my bridal makeup! The team is so professional and made me feel like a princess on my big day. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Neha Desai",
      text: "Best facial treatment I've ever had. The clinic is extremely clean, and the staff is very polite. My skin feels glowing and refreshed.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      text: "I regularly visit Ashley's for my haircuts and threading. They always understand exactly what I want. Great ambiance and affordable prices.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-rose-500 font-medium tracking-wider uppercase mb-2">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 relative"
            >
              <div className="flex text-gold-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <h4 className="font-bold text-gray-900">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-rose-500 font-medium tracking-wider uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            Book Your Appointment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-rose-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-rose-500 shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600 leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-rose-500 shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-600 hover:text-rose-600 transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-rose-500 shadow-sm shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Mon - Sun: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Send us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  required
                />
              </div>
              <textarea 
                rows={4} 
                placeholder="Message or Service Required" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-md border border-gray-100"
          >
            <iframe 
              src={MAP_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-rose-400 mb-4">Ashley's Beauty Parlour</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your premier destination for luxury beauty treatments, bridal makeovers, and professional skincare in Mahim West, Mumbai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rose-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rose-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-rose-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-rose-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-rose-400 shrink-0 mt-1" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-rose-400 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

