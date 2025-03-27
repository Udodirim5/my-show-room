export const personalInfo = {
  name: "Udodirim Nnodimele",
  email: "udodirimwisdom@gmail.com",
  location: "Owerri, Imo State, Nigeria",
  phone: "+2349033951020",

  title: "Frontend Developer",
  bio: "Passionate about creating beautiful, user-friendly interfaces with React and TypeScript.",
  website: "https://devmemior.com",
  password: "",
  newPassword: "",

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/udodirim-nnodimele-814b5a287/",
    },
    {
      name: "Github",
      url: "https://github.com/Udodirim5",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Udodirim101",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/udodirim101/",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCp9_p3W7m3F883s2Q_j46Wg",
    },
  ],
};

export const blogPosts = [
  {
    id: 1,
    title: "Mastering Modern JavaScript: Tips and Tricks",
    createdAt: "2021",
    content: `
      <h1>Mastering Modern JavaScript: Tips and Tricks</h1>
      <img src="https://placehold.co/600x400" alt="JavaScript Code" />
      <p>JavaScript is one of the most popular programming languages in the world. Whether you're building web applications, mobile apps, or even server-side applications, JavaScript is a versatile tool that every developer should master. In this post, we'll explore some tips and tricks to level up your JavaScript skills.</p>
  
      <h2>1. Use Arrow Functions</h2>
      <p>Arrow functions are a concise way to write functions in JavaScript. They also have a lexical <code>this</code>, which means they inherit the <code>this</code> value from the surrounding scope.</p>
      <pre><code>const add = (a, b) => a + b;
  console.log(add(2, 3)); // Output: 5</code></pre>
  
      <h2>2. Destructuring Assignment</h2>
      <p>Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. It's a great way to write cleaner and more readable code.</p>
      <pre><code>const user = { name: "John", age: 30 };
  const { name, age } = user;
  console.log(name); // Output: John
  console.log(age); // Output: 30</code></pre>
  
      <h2>3. Template Literals</h2>
      <p>Template literals make it easy to create strings with embedded expressions. They also support multi-line strings without the need for escape characters.</p>
      <pre><code>const name = "Alice";
  const greeting = \`Hello, \${name}!
  Welcome to our blog.\`;
  console.log(greeting);</code></pre>
  
      <h2>4. Promises and Async/Await</h2>
      <p>JavaScript's asynchronous programming model can be tricky, but Promises and <code>async/await</code> make it much easier to handle asynchronous operations.</p>
      <pre><code>const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  };
  fetchData();</code></pre>
  
      <h2>5. Useful JavaScript Libraries</h2>
      <p>Here are some popular JavaScript libraries that can help you build amazing applications:</p>
      <ul>
        <li><strong>React</strong>: A library for building user interfaces.</li>
        <li><strong>Lodash</strong>: A utility library for simplifying common tasks.</li>
        <li><strong>Axios</strong>: A promise-based HTTP client for making API requests.</li>
      </ul>
  
      <h3>Conclusion</h3>
      <p>JavaScript is a powerful language with a rich ecosystem. By mastering these tips and tricks, you'll be well on your way to becoming a JavaScript pro. Happy coding!</p>
    `,
    excerpt:
      "Learn essential tips and tricks to master modern JavaScript, including arrow functions, destructuring, template literals, and async/await.",
    coverImage: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Blog Post 2",
    createdAt: "2021",
    content: `This is a blog post`,
    excerpt: `This is a blog post excerpt`,
    coverImage: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Blog Post 3",
    createdAt: "2021",
    content: `This is a blog post`,
    excerpt: `This is a blog post excerpt`,
    coverImage: "https://placehold.co/600x400",
  },
];
