import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-success mb-2 ms-3 text-2xl'>Q1) 1.How will you improve the performance of react application?</h3>
            <div className='question-2 ms-3'>
                Five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                <ul>
                    <li>* Keeping component state local where necessary</li>
                    <li>* Memorizing React components to prevent unnecessary re-renders</li>
                    <li>* Code-splitting in React using dynamic import()</li>
                    <li>* Windowing or list virtualization in React</li>
                    <li>* Lazy loading images in React</li>
                </ul>
            </div>
            <h3 className='text-success mb-2 ms-3 text-2xl'>Q2) 2.What are the different ways to manage a state in a react application?</h3>
            <div className='question-2'>
                <div className='ms-3'>
                    <p>There are four main types of state one need to properly manage in your React apps:
                        <ul>
                            <li>* Local state</li>
                            <li>* Global state</li>
                            <li>* Server state</li>
                            <li>* URL state</li>
                        </ul>
                        Let's cover each of these in detail:
                        Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.
                        Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>

            </div >
            <h3 className='text-success mb-2 ms-3 text-2xl'>Q3) How does prototypical inheritance work?</h3>
            <div className='question-2 ms-3'>
                The Prototypal Inheritance is a feature in JavaScript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
            </div>
            <h3 className='text-success mb-2 ms-3 text-2xl'>Q4) What is a unit test? why should write unit tests?</h3>
            <div className='question-2 ms-3'>
                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. Tests are not unit tests when they rely on external systems: if it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </div>
        </div >
    );
};

export default Blogs;