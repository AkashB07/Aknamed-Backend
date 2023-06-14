
# aknamed-backend

The userform asks the user for his details (name, date of birth, email, phone number). The user fills in the form and presses submit.The form is saved andemail is sent to the form submitter.After the form is submitted the user is redirect to a page where all the submitted forms are displayed

The backed is done by using NodeJs Framework Express.js, Database used is MongoDB and the Mail Provider used is SendInBlue(Brevo).


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_DETAILS` - MongoDB Database credentials.

`SEND_IN_BLUE_API_KEY` - Mail Provider credentials.



## Run Locally

Clone the project

```bash
  git clone https://github.com/AkashB07/aknamed-backend.git
```

Go to the project directory

```bash
  cd aknamed-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Installation

Install project with npm

```bash
  npm install
```
    

## Deployment

To deploy this project run

```bash
  npm start
```
