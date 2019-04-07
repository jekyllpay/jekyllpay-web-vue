import axios from 'axios'

// scheme 'http' or "https" is required in BASE_URL
let BASE_URL = process.env.NODE_ENV === "production" ? "" : 'http://localhost:8080';

async function sendTokenToServer(token, payment) {
    try {
        let url = BASE_URL + '/gateway/stripe';
        let resp = axios({
            url: url,
            method: "post",
            data: {
                stripe_token: token.id,
                first_name: payment.first_name,
                last_name: payment.last_name,
                email: payment.email,
                amount: payment.amount * 100,
                phone: payment.phone
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
    sendTokenToServer
}
