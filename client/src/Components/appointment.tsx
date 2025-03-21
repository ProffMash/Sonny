import React, { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import { createAppointment } from '../Api/appointmentsApi';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    date: '',
    time: '',
    service: 'general-checkup'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAppointment({
        name: formData.fullName,
        contact: formData.contact,
        date: formData.date,
        time: formData.time
      });
      alert('Your appointment has been scheduled successfully!');
      setFormData({ fullName: '', contact: '', date: '', time: '', service: 'general-checkup' }); // Reset form
    } catch (error) {
      alert('Failed to schedule your appointment. Please try again later.');
      console.error('Error scheduling appointment:', error);
    }
  };

  return (
    <section id="appointments" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our experienced healthcare professionals. We're here to provide you with the best medical care.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;