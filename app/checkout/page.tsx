import PaymentForm from '@/components/PaymentForm'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

const CheckoutPage: React.FC = () => {
  const options = {
    clientSecret: '{{CLIENT_SECRET',
  }
  return (
    <Elements stripe={stripePromise} options={options}>
    <PaymentForm />
    </Elements>
  )
}

export default CheckoutPage