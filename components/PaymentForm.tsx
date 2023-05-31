'use client';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react';
const stripePromise = loadStripe(process.env.PUBLIC_KEY as string);

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    try {
      setProcessing(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setError(error.message ?? 'Error');
        setProcessing(false);
        setSucceeded(false);
      } else {
        // Payment successful
        setProcessing(false);
        setSucceeded(true);
        // Send the payment method object to your server for further processing
        sendPaymentMethodToServer(paymentMethod);
      }
    } catch (error) {
      setError('An error occurred during payment processing.');
      setProcessing(false);
      setSucceeded(false);
    }
  };

  const sendPaymentMethodToServer = (paymentMethod: any) => {
    // Send the payment method object to your server via an API call
    // You can use Axios, fetch, or any other library for making the API request
    console.log(paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="card-element" className="block font-medium mb-1">
          Card Details
        </label>
        <div id="card-element" className="border p-2 rounded">
          <CardElement />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
      >
        {processing ? 'Processing...' : 'Pay'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {succeeded && <p className="text-green-500 mt-2">Payment successful!</p>}
    </form>
  );
};

const PaymentFormWrapper: React.FC = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentForm;
