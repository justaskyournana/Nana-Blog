import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Error submitting form. Please try again.'));
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>Your message has been sent. Nana will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Nana</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" type="text" required className="w-full border border-stone-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" required className="w-full border border-stone-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" required rows={5} className="w-full border border-stone-300 rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
