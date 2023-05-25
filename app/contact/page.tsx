import React from 'react';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 py-10" style={{height: '500px'}}>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="sm:text-base lg:text-xl font-semibold mb-2">General Inquiries</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div>
          <h2 className="sm:text-base lg:text-xl font-semibold mb-2">Support</h2>
          <p>Email: support@example.com</p>
          <p>Phone: 987-654-3210</p>
          <p>Address: 456 Elm St, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;