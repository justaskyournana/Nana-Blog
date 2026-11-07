import { useState, type FormEvent } from 'react';

export default function Newsletter() {
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
        <h1 className="text-2xl font-bold mb-4">You’re in!</h1>
        <p>Thanks for subscribing. Watch your inbox for Nana’s tips and recipes.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Get Nana's Weekly Note</h1>
      <p className="text-stone-600 mb-6">One short letter a week: whatever I've been cooking, a tip that saved me some trouble, and the new post. No noise, and you can leave any time you like.</p>
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" required className="w-full border border-stone-300 rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">
          Subscribe
        </button>
      </form>
    </div>
  );
}
