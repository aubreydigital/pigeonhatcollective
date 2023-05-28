import Link from "next/link";

export const metadata: object = {
  title: 'contact | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}
const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 py-10 text-center" style={{height: '500px'}}>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="sm:text-base lg:text-xl font-semibold mb-2">General Inquiries</h2>
          <p>Email: <Link className="hover:text-white" href="mailto:questions@phcollective.com">questions@phcollective.com</Link></p>
          <p>89103 Las Vegas, NV</p>
          
        </div>
        <div>
          <h2 className="sm:text-base lg:text-xl font-semibold mb-2">Support</h2>
          <p>Email: <Link className="hover:text-white" href="mailto:questions@phcollective.com">support@phcollective.com</Link></p>
          <p>89141 Las Vegas, NV</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;