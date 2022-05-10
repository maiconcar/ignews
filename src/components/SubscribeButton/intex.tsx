import { signIn, useSession } from 'next-auth/react';
import { api } from '../../pages/services/api';
import { getStripeJS } from '../../pages/services/stripe.js';
import styles from './styles.module.scss';


interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton ({priceId}: SubscribeButtonProps ) {
    const session = useSession();

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

       try {    
           const response = await api.post('/subscribe')

           const {sessionId } = response.data;
            const stripe = await getStripeJS()
            await stripe.redirectToCheckout( {sessionId} ) // alterar para objeto
       } catch (err) {
           alert(err.message);
       }
    }
    return (
        <button
        type="button"
        className={styles.SubscribeButton}
        onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
        );

}

