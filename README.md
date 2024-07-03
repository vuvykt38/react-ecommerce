# MetaConnect

## Overview

MetaConnect is a pivotal project aimed at refreshing and advancing my knowledge of Meta's solutions within a React application. This project demonstrates my proficiency in implementing Meta's solution to enhance user engagement and tracking capabilities. Through detailed examples and use cases, MetaConnect highlights my expertise in harnessing Meta's Business Tools to deliver impactful solutions tailored to digital advertising and technology sectors.

MetaConnect is not just a technical showcase but also a testament to my ongoing preparation for an interview with Meta in the future. It reflects my proactive approach to staying updated with Meta's ecosystem and ensures that I am well-equipped to discuss and implement Meta's solutions effectively. I strongly believe in the adage "Luck Is What Happens When Preparation Meets Opportunity," and MetaConnect exemplifies my readiness to seize the opportunity of joining Meta's dynamic team.

## Live Demo

https://react-ecommerce-six-sage.vercel.app/


## Features
E-commerce Application: Developed using React, featuring essential components such as Home Page, Product Details, Cart Management, Checkout Page, and Order Placement.

To understand tools, concepts and processes related to Facebook family of apps, I have integrated Facebook Business tools including:
- Facebook SDK for JavaScript: Enables to use Facebook Login to lower the barrier for people to sign up on your site.
- Facebook Login: Implemented Facebook Login for seamless user authentication, enhancing user convenience and security.
- Meta Pixel: Integrated Meta Pixel to accurately track user interactions and measure conversions across the application.
- App event: Customized event integration to monitor pivotal user actions like view product, add to cart, purchases, and other critical interactions, providing comprehensive analytics. Utilized App Events to create targeted custom audiences for improved ad targeting.
- Webhook: Enables to receive real-time HTTP notifications for Messenger
- Messenger (WIP): Leveraged Messenger to offer real-time customer support within the application, fostering immediate interaction and improved user engagement.


## Technologies Used
- Frontend: React.js, HTML/CSS
- Meta Solutions: Facebook SDK for JS, Facebook Login, Graph API, Meta Pixel, App Events, Webhooks, Messenger
## Usage
### Facebook Login
The Facebook Login feature in our application provides a seamless and secure way for users to authenticate and access our services, enhancing user convenience and security.

- **Initiating Login:** When users want to log in to our application, they click the "Login with Facebook" button. This action triggers the Facebook Login process.
- **Client-Side Request:** Upon clicking the button, our client application requests an access token from Facebook. The user is then presented with a Facebook dialog to grant the application permission to access their Facebook data
- **Handling Permissions:** If the user grants permission, the client application receives a Facebook access token. This token allows us to access basic user information such as their public profile and email.
- **Backend Verification:** The client application sends the Facebook access token to our backend server for verification
- **Server-Side Validation:** The backend server sends a request to Facebook to verify the access token:**
- **User Data Processing:** If the token is valid, Facebook returns the user data to our backend. The backend server then updates the user profile in our database and establishes a session for the user.
- **Logging Out:** When the user clicks the "Logout" button, the logout method is executed, removing the token from the browser’s local storage and ending the session:**

![enter image description here](https://i.ibb.co/QCfkKZv/Xnapper-2024-07-03-23-25-06.png)

By integrating Facebook Login, we provide a streamlined and secure authentication process, enhancing user experience by reducing friction during login and ensuring robust security measures are in place.


### App Events
When users interact with our application, specific actions trigger Facebook App Events, which allow us to monitor and analyze user behavior for better targeting and optimization.
- **Event Triggering:** When a user performs key actions such as viewing a product, adding an item to the cart, or completing a purchase, our application triggers custom Facebook App Events. These events capture detailed information about the user interaction.
- **Client-Side Integration:** Upon the occurrence of these actions, our client application calls the fbq function provided by Facebook's Pixel to log the event

 ![enter image description here](https://i.ibb.co/Qc5t0ND/Xnapper-2024-07-03-23-32-15.png)
 
- **Data Transmission:** The event data, including specific details about the action (e.g., product ID, total cart value, currency), is sent to Facebook servers for processing. This data helps in creating a comprehensive view of user interactions with the application.

 ![enter image description here](https://i.ibb.co/vX4LcFd/Xnapper-2024-07-03-23-43-43.png)
 
- **Custom Audiences and Targeting:** The collected event data enables the creation of custom audiences for targeted advertising. By analyzing these events, we can identify user segments based on their actions within the application, such as frequent buyers or users who abandoned their carts. This facilitates more effective and personalized marketing strategies.

#### Common User Segments for E-commerce Events

##### 1. Engaged Shoppers
- **Criteria:** Users who have performed "View Content" and "Add to Cart" actions but have not completed a purchase.
- **Use Case:** Create a retargeting campaign with dynamic ads showcasing the products they viewed or added to their cart. Offer a limited-time discount to encourage them to complete their purchase.

##### 2. High Intent Buyers
- **Criteria:** Users who have viewed the cart or initiated checkout but did not complete the purchase.
- **Use Case:** Set up a retargeting ad with a carousel format highlighting the items left in their cart. Include a sense of urgency by mentioning low stock levels or limited-time offers.

##### 3. Recent Buyers
- **Criteria:** Users who have completed a purchase within the last 30 days.
- **Use Case:** Run a "Thank You" campaign with personalized ads suggesting complementary products based on their recent purchase. Include special offers for repeat purchases.

##### 4. Repeat Customers
- **Criteria:** Users who have made more than one purchase.
- **Use Case:** Create a loyalty campaign targeting these users with exclusive discounts, early access to new products, and VIP sales.


##### 5. First-Time Visitors
- **Criteria:** Users who haven't signed up yet.
- **Use Case:** Use retargeting ads to encourage account creation by offering a first-time visitor discount or highlighting the benefits of signing up, such as exclusive deals and faster checkout.

##### 6. Cart Abandoners
- **Criteria:** Users who added items to their cart but did not proceed to checkout.
- **Use Case:** Run a retargeting campaign with dynamic product ads showing the items they left in their cart. Offer a discount or free shipping to incentivize them to complete the purchase.

##### 7. VIP Customers
- **Criteria:** Users who have a high purchase value and frequent purchases.
- **Use Case:** Create an exclusive campaign for VIP customers, offering them special access to new products, higher discounts, and personalized thank-you messages.

##### Create a Custom Audience on Ads Manager

![enter image description here](https://i.ibb.co/rf92SnZ/Xnapper-2024-07-04-00-40-23.png)
![enter image description here](https://i.ibb.co/bHVMgdG/Xnapper-2024-07-04-00-46-56.png)

By leveraging Facebook App Events, we gain valuable insights into user behavior, which helps in enhancing user engagement and optimizing the marketing efforts.

### Messenger (WIP)
The Messenger integration within our application provides seamless, real-time customer support, enhancing user engagement and satisfaction.

- **Initiating a Conversation:** When users need assistance, they can click the "Contact Support" button in the application. This action opens a Messenger chat window where users can start a conversation with our support team directly.
- **Client-Side Integration:** The client application utilizes Facebook’s Messenger SDK to embed the chat functionality. The integration process involves initializing the Messenger plugin with our Facebook Page ID
- **Real-Time Support:** Users can send messages, ask questions, and receive responses in real-time. The Messenger integration supports multimedia messages, enabling users to share images, videos, and other files with the support team.
- **Backend Communication:** The application backend can also interact with users through Messenger. For instance, automated messages can be sent to users for order confirmations, shipping updates, and other notifications. This is achieved through Facebook’s Graph API
- **Enhanced User Engagement:** The integration fosters immediate interaction, allowing users to resolve their issues promptly. This real-time communication improves the overall user experience and builds trust and loyalty.
- **Analytics and Insights:** By leveraging Facebook's analytics tools, we can gain insights into the performance of our customer support interactions. Metrics such as response time, user satisfaction, and conversation history help us refine our support strategies and improve service quality.

## Resources
Resources used for integrating Meta's solutions:

- [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/)
- [Facebook Login](https://developers.facebook.com/docs/facebook-login/)
- [Messenger Platform](https://developers.facebook.com/docs/messenger-platform/)
