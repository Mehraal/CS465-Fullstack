# CS465-Fullstack
CS-465 Fullstack Development with MEAN

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In my project, Express HTML was used to quickly render server-side pages, which was helpful for basic templates and simple page loads. JavaScript was then added to handle client-side interactions, making the site more dynamic and responsive. Finally, I built a single-page application (SPA) feature, which allowed data to load without refreshing the entire page. While Express HTML was simple and fast to implement, the SPA created a smoother user experience and made the application feel more modern.

Why did the backend use a NoSQL MongoDB database?
The backend used MongoDB because it stores data in flexible JSON-like documents. This worked well with the structure of the application since data from the frontend was already being sent in JSON. MongoDB made it easier to scale and didn’t require a fixed schema, which allowed the application to adapt as new features were added.

⸻

Functionality

How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON looks similar to JavaScript but is only used for storing and exchanging data. It doesn’t include functions—only structured data in key-value pairs. In this project, JSON connected the frontend and backend by acting as the data format sent between them. For example, when a user submitted a form, the information was packaged into JSON, sent to the backend API, and then stored in MongoDB.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
I refactored the project by combining repeated UI elements like navigation menus and buttons into reusable components. This reduced code duplication and made the application easier to maintain. The benefit of reusable UI components is that they improve consistency across the application, save development time, and make it easier to update features in the future.

⸻

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
In a full stack application, endpoints define the specific routes where the frontend can communicate with the backend. Each endpoint typically supports methods such as GET (retrieving data), POST (creating data), PUT (updating data), and DELETE (removing data). When testing APIs, I had to check that each method returned the correct response. Adding security made testing more complex because endpoints required authentication, such as login tokens, before granting access. This reinforced the importance of properly securing admin routes while still allowing smooth functionality for authorized users.

⸻

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course helped me grow as a developer by giving me hands-on experience with full stack development. I learned how to connect the frontend and backend using APIs, work with MongoDB, and secure login authentication for admins. I also developed stronger skills in JavaScript, Express, and single-page applications, which are highly valued in the job market. Overall, I feel more confident in applying for web development roles because I now understand how to build and secure an application from start to finish.
