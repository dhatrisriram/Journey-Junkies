import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    overallRating: '',
    recommend: '',
    source: 'social_media',
    chatroomRating: '',
    chatHelp: '',
    chatComments: '',
    essentialsRating: '',
    essentialsSuggestions: '',
    attractionRating: '',
    visitedAttractions: '',
    attractionComments: '',
    improvements: '',
    additionalComments: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can handle form submission logic (e.g., send to API)
  };

  return (
    <div className="container mt-5">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email (Optional)</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Additional fields */}
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
