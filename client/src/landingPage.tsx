import { Heart, Users, Award, ArrowRight, Stethoscope, Brain, ChevronFirst as FirstAid, Activity } from 'lucide-react';
import Navigation from './Components/navigation';
import Appointment from './Components/appointment';
import Contact from './Components/contacts';
import Footer from './Components/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Your Health Is Our Priority</h1>
            <p className="text-xl mb-8">Experience exceptional healthcare with our team of dedicated medical professionals. We're committed to providing personalized care for you and your family.</p>
            <a
              href="#appointments"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Clinic</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 25 years of experience in healthcare, we provide comprehensive medical services
              using state-of-the-art technology and evidence-based practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Care</h3>
              <p className="text-gray-600">Our experienced medical professionals provide comprehensive healthcare services.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Medicine</h3>
              <p className="text-gray-600">Comprehensive care for all ages, from pediatrics to geriatrics.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accredited Facility</h3>
              <p className="text-gray-600">State-of-the-art medical facility with the latest technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet all your healthcare needs.
              Our team of specialists ensures you receive the best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'General Medicine', icon: Stethoscope },
              { name: 'Neurology', icon: Brain },
              { name: 'Emergency Care', icon: FirstAid },
              { name: 'Cardiology', icon: Activity },
              { name: 'Pediatrics', icon: Heart },
              { name: 'Orthopedics', icon: Activity },
              { name: 'Dental Care', icon: Award },
              { name: 'Laboratory', icon: FirstAid }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600">Professional care and treatment for your health needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced and dedicated healthcare professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                specialty: "Cardiologist",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Dr. Michael Chen",
                specialty: "Neurologist",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Dr. Emily Williams",
                specialty: "Pediatrician",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              }
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <Appointment />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;