import Wrapper from '../assets/wrappers/StripeCheckout'
import { useEffect, useState } from 'react'
import {loadStripe} from '@stripe/stripe-js'

import {
    CardElement,
    useStripe,
    Elements,
    useElements,
} from  '@stripe/react-stripe-js'
import axios from 'axios'
import { useCartContext } from '../context/cartContext'
import { useUserContext } from '../context/userContext'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'


const promise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)

const CheckoutForm = () => {
    const {cart, total_amount, shipping_fee, clearCart} = useCartContext()
    const {myUser} = useUserContext()
    const navigate = useNavigate()
    //STRIPE

    const [done, setDone] = useState(false)
    const [error, setError] =useState(null)
    const [processing, setProcessing] = useState('')
    const [ disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()

    const cardStyle = {
        style: {
          base: {
            color: '#32325d',
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
              color: '#32325d',
            },
          },
          invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
          },
        },
      }
      const createPaymentIntent = async () => {
        try {
          const {data} = await axios.post(
          '/.netlify/functions/create-payment-intent',
          JSON.stringify({cart, shipping_fee,  total_amount})
          )

          setClientSecret(data.clientSecret)
        } catch (error) {
          
        }
      }
      useEffect(()=> {
        createPaymentIntent()
      }, [])

      const handleChange = async (event) => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
      }


      const handleSubmit = async (ev) => {
        ev.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(`${clientSecret}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          
        },
    })
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`)
        setProcessing(false)
      } else {
        setError(null)
        setProcessing(false)
        setDone(true)
        setTimeout(() => {
          clearCart()
          navigate.push('/')
        }, 10000)
      }
      }

    return <div>
       {done ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement 
          id='card-element' 
          options={cardStyle} 
          onChange={handleChange}
        />
        <button disabled={processing || disabled || done} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinnier'></div>: 'Pay'}
          </span>
        </button>
        {/* error that happens when proccessing the payment */}
        {error && <div className='card-error' role='alert'>{error}</div>}

        {/* success message upon completion */}
        <p className={done ? 'result-message' : 'result-message hidden'}>
          Payment succedded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`} >
            Stripe dashboard
          </a>
          Refresh the page to pay again
        </p>


      </form>
    </div>
}


const StripeCheckout = () => {
    return (
        <Wrapper>
            <Elements stripe={promise}>
                <CheckoutForm/>
            </Elements>
        </Wrapper>
    )
}

export default StripeCheckout