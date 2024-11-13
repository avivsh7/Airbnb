# Airbnb Project
This site allows registered users to log in and new users to sign up.
The site contains the following pages:

LoginPage.jsx: Contains username and password fields for log in, and a link to register page if not signed up already. 
A successful log in redirects to IndexPage.jsx and the user name would be listed in the top right corner of the page indicating that the user is logged in throughout the different pages of the site.

IndexPage.jsx: The site's homepage, displaying a grid of all airbnbs, each has its title, location and price per night.

PlacePage.jsx: If you click on a specific airbnb on IndexPage.jsx, redirects to this page, showing more details about the airbnb including the airbnb's title, location, description, and price per night. If both the check-in and check-out date inputs are filled, another div would appear asking to fill your name and phone number. The price for the dates chosen would be automatically calculated in the button "Book this place ${booking.price}".

ProfilePage.jsx: When clicking the username in the top right corner, you would be redirected to this page. This page contains a navigation menu with three buttons: "My profile", "My bookings" and "My accommodations" (My profile is chosen on default), Displaying the text "Logged in as {user.name} ({user.email})" and a button below to log out.

BookingsPage.jsx: This page displays a list of your ordered airbnbs, each listing has the airbnb title, number of nights, dates of check-in to check-out, the total price, and a photo.

BookingPage.jsx: Clicking on a booking listing from the list in BookingsPage.jsx redirects you here. This page shows all the information from the list plus the first three photos of the airbnb and a button to view the rest of the photos.

PlacesPage.jsx: This page is accessible from the "My accommodations" section of the ProfilePage.jsx navigation menu. On this page you can see a list of all the airbnbs you've created, showing the airbnb title, description and the Airbnb's image. A click on a specific listing redirects to PlacesFormPage.jsx.

PlacesFormPage.jsx: On this page you edit the information about the airbnb listing, including: the title, address, photos (a UI to upload photos using a link, uploading from your computer, deleting a photo, and starring one photo to be the preview photo of the airbnb on the homepage), description, perks (such as Wifi, Radio, Free parking spot, Pets, TV, Private entrance), extra info, check-in and check-out times, number of guests, and price per night. A save button.

Front-end made using React, Vite, TailwindCSS, Axios, and Date-fns.
Back-end made using Mongoose, Express.js, Bcryptjs, Cookie-Parser, JsonWebToken, Multer and Dotenv.
