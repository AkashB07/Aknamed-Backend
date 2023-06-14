const User = require('../modles/users');

//Using SendInBlue for mail operation
const Sib = require('sib-api-v3-sdk');

//POST request for Storing user details in database and sending mail
const postDetails = async (req, res) => {
    try {
        const { name, email, dob, age, phone } = req.body;
        const date = new Date();

        //Validating the phone number
        if (isNaN(phone)) {
            return res.status(400).json({ message: "Phone Number should contain only numbers" });
        }
        if (phone.length != 10) {
            return res.status(400).json({ message: "Phone Number should contain 10 digits" });
        }

        //Storing the User details in the Database
        await User.create({
            name: name,
            dob: dob,
            age: age,
            email: email,
            phone: phone,
            createdAt: date,
        });

        //Sending email using SendInBlue
        const client = Sib.ApiClient.instance;
        const apiKey = client.authentications['api-key'];
        apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;
        const tranEmailApi = new Sib.TransactionalEmailsApi()
        const sender = {
            email: 'akashbadhi7@gmail.com',
            name: 'Akash B',
        }
        const receivers = [
            {
                email: email,
            }
        ]
        await tranEmailApi
            .sendTransacEmail({
                sender,
                to: receivers,
                subject: 'User Details',
                textContent: 'Details',
                htmlContent: `
                   <h1>User Details</h1>
                   <h3>Name - ${name}</h3>
                   <h3>Email - ${email}</h3>
                   <h3>Date of Birth - ${dob}</h3>
                   <h3>Age - ${age}</h3>
                   <h3>Phone Number - ${phone}</h3>
                `,
            })

        return res.status(200).json({ message: 'Successfully verified the user details and mail is sent.', succese: true });

    }
    catch (error) {
        res.status(500).json({ message: error, success: false });
    }
}

//GET request for getting all the user details
const getDetails = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        return res.status(200).json({ message: 'Successfully found all the users.', users: users, succese: true });
    }
    catch (error) {
        res.status(500).json({ message: error, success: false });
    }
}

module.exports = {
    postDetails,
    getDetails
}