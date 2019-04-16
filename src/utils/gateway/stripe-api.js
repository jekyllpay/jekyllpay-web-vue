import axios from 'axios'

// scheme 'http' or "https" is required in BASE_URL
let BASE_URL = process.env.NODE_ENV === "production" ? "" : 'http://localhost:8080';

async function charge(token, payment) {
    try {
        let url = BASE_URL + '/gateway/stripe/charge';
        let resp = axios({
            url: url,
            method: "post",
            data: {
                stripe_token_id: token.id,
                order_id: payment.order_id,
                first_name: payment.first_name,
                last_name: payment.last_name,
                email: payment.email,
                amount: parseInt(payment.amount * 100, 10),
                currency: payment.currency,
                pay_method: payment.pay_method,
                phone: payment.phone,
                message: payment.message
            }
        });
        return resp;
    }
    catch (error) {
        return {
            code: '400',
            status: "failed",
            message: "Something is wrong",
            data: error
        }
    }

}

export {
    charge
}
