![Login](https://github.com/user-attachments/assets/48ad7a06-8ab8-4ae5-bfe1-be7549ea8694)

Login Page in React with Zod Validation
In this login page, React is used for building the user interface, and Zod is employed for validating the form inputs. The page consists of a simple form where users input their email and password to log in. Here's an overview of how it works:

Login Page :
   
The login form includes input fields for email and password. Users enter their credentials and submit the form to trigger validation and authentication logic.

Authentication :

![Authentication](https://github.com/user-attachments/assets/aedeaafe-aac1-47f0-a149-0375312bda43)

Zod for Validation :

Zod is used to define a schema that enforces rules on the form inputs. For example, the email must be a valid email address, and the password should meet certain criteria (like minimum length, or specific characters).

Submission :

Once the form passes validation, the login data (email and password) can be sent to an API or authentication service for processing.

You can also handle other actions like redirecting users to a Home page on successful login.

Registration :

![Register](https://github.com/user-attachments/assets/3095d58f-09e0-4b85-bdc6-9374b448735f)

The registration page allows new users to create an account by entering details like username, email, phone number, and password. React is used to build the UI, and the Zod library handles form validation. Once the form is submitted and validated successfully, the user is redirected to the login page.

Home Page :

![Home](https://github.com/user-attachments/assets/90e474d0-0b9e-4b97-b877-78eb74783b17)

Token Based Authentication :

JWT (JSON Web Token) is used to authenticate users after login. Once a user successfully logs in, a JWT is generated and sent to the client. The token contains encoded user data (e.g., user ID) and is used to verify the user’s identity on subsequent requests.

Bcrypt For Password Hashing :

Passwords are not stored in plain text in the database. Instead, bcrypt is used to hash the password securely before saving it. This ensures that even if the database is compromised, attackers cannot easily retrieve user passwords.

Properties List :

![Property List](https://github.com/user-attachments/assets/4e6c220e-bd03-4a2c-ba9c-46d30e187b64)

How They Work Together :

1.	Node.js and Express.js: Handle server-side logic, routing, and API creation.
   
2.	JWT: Integrated with Express middleware to manage authentication securely.
   
3.	MongoDB: Stores user data, ensuring fast, flexible, and scalable data access.
   
4.	bcrypt: Ensures secure password hashing on the backend before storage in MongoDB.


