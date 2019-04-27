import axios from 'axios'

// scheme 'http' or "https" is required in BASE_URL
let BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL : 'http://localhost:8080';

async function charge(token, payment) {
    let url = BASE_URL + '/gateway/stripe/charge';
    try {
        let resp = await axios.request({
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
        return error.response;
    }

}

export {
    charge
}
