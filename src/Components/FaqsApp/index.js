import { useState } from "react";

import { v4 as uuidV4 } from "uuid";

import FaqsItem from "../FaqsItem";

import "./index.css";

const FaqsAppList = [
  {
    id: uuidV4(),
    question: "What is React?",
    answer:
      "is a JavaScript library created by Facebook for building user interfaces, especially single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes the code easier to read and write, and it gets transformed into JavaScript calls under the hood.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM. React maintains this Virtual DOM to improve performance. When the state of an object changes, React updates only the Virtual DOM, calculates the difference with the real DOM, and updates only the changed elements.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What are components?",
    answer:
      "Components are the building blocks of a React application. They can be functional or class-based, and they encapsulate parts of the user interface. Components can be reused across the application, making code more modular and maintainable..",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is state in React?",
    answer:
      "State can be managed using the useState hook in functional components or the this.state object in class components. State represents dynamic data in a component and can be passed down as props to child components.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is props in React?",
    answer:
      "Props are read-only data that are passed from parent to child components. They allow you to customize a component by passing data to it. Props are immutable and are used to render dynamic data in a component.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is Redux?",
    answer:
      "Redux is a state management library for JavaScript applications. It helps you manage the state of your application in a predictable way. Redux stores the state of your application in a single object called the store, which can only be changed by dispatching actions.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is React Router?",
    answer:
      "React Router is a library that allows you to handle routing in a React application. It enables you to create different routes for different components and helps you navigate between them. React Router keeps your UI in sync with the URL.",
    show: false,
  },
  {
    id: uuidV4(),
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components are components that store their state in the parent component, while uncontrolled components store their state in the DOM. Controlled components are more common in React applications because they provide a single source of truth for the data.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. They allow you to use state and other React features without writing a class. What are React Hooks? Hooks are functions introduced in React 16.8 that allow you to use state and other React features in functional components. Common hooks include useState for state management, useEffect for side effects, and useContext for accessing context.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "What is React Router?",
    answer:
      "React Router is a library that allows you to handle routing in a React application. It enables you to create different routes for different components and helps you navigate between them. React Router keeps your UI in sync with the URL.  React Router is a library used for managing navigation and routing in React applications. It allows you to define routes and navigate between different views of your application seamlessly. React Router is a popular choice for single-page applications built with React.",
    show: false,
  },
  {
    id: uuidV4(),
    question: "How do you deploy a React app?",
    answer:
      "React apps can be deployed using platforms like Netlify, Vercel, or GitHub Pages. Build the application using npm run build to create an optimized production build. Follow the specific deployment instructions provided by the chosen platform.",
    show: false,
  },
];

const FaqsApp = () => {
  const [faqsList, setFaqsList] = useState(FaqsAppList);

  const toggleShow = (id) => {
    const updatedFaqsList = faqsList.map((faq) => {
      if (faq.id === id) {
        return { ...faq, show: !faq.show };
      }
      return faq;
    });

    setFaqsList(updatedFaqsList);
  };

  return (
    <div className="faqsAppMainContainer">
      <div className="faqsAppCard">
        <h1 className="mainHeading">React FAQs</h1>
        <div>
          <ul>
            {faqsList.map((faq) => (
              <li
                key={faq.id}
                onClick={() => toggleShow(faq.id)}
                style={{
                  cursor: "pointer",
                }}
              >
                <FaqsItem faq={faq} toggleShow={toggleShow} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqsApp;
