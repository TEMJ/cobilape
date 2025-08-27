import { useState } from 'react';
import Reveal from '../components/Reveal';
import SimplePage from '../components/SimplePage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SimplePage
      title="Contact"
      subtitle="Nous sommes là pour répondre à vos questions"
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    >
      <div className="grid gap-12 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Votre nom complet" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="votre.email@exemple.com" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Votre message..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-md bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">Envoyer le message</button>
              </div>
            </form>
          </div>
        </Reveal>
        <Reveal>
          <aside className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Adresse</h3>
                <p>BP : 765, Mvolyé, Yaoundé - Cameroun</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Téléphone</h3>
                <p>(+237) 6 74 67 32 92</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Email</h3>
                <p>contact@cblaperle.org</p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </SimplePage>
  );
};

export default Contact; 