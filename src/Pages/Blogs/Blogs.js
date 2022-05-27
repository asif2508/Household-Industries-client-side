import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 mb-16'>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className='text-xl font-bold'>14.1 How will you improve the performance of a React Application?</h1>
                    <p  className='mt-3'><span className='font-bold'>Ans:</span> There is many ways to improve the performance of a react application. such as, I can memoize React components to prevent unnecessary re-renders. I can optimize photos. I can split the code using different components etc. </p>
                </div>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className='text-xl font-bold'>14.2 What are the different ways to manage a state in a React application?</h1>
                    <p className='mt-3'><span className='font-bold'>Ans:</span> Managing state is really the hardest part of an application. That's why there are so many state management libraries available and more coming around every day. We can use context api, props drilling, redux etc for state management.</p>
                </div>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className='text-xl font-bold'>14.3 How does prototypical inheritance work?</h1>
                    <p className='mt-3'><span className='font-bold'>Ans:</span> JavaScript is a prototype-based, Object Oriented programming language. JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>
                </div>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className=' font-bold'>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className='mt-3'><span className='font-bold'>Ans:</span> State is something which gets change by time for some functionality of the webpage. It's hard to change state manually all the time. So react has its built-in states as special features which make managing and setting states easily. So, I don't set the state directly in react.</p>
                </div>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className=' font-bold'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='mt-3'><span className='font-bold'>Ans:</span> If I have an array of products. Each product has a name, price, description etc. I will implement a search box and get the value of search query from there. then I will decare a function which will fillter the products by their name which includes the search query.</p>
                </div>
                <div className='bg-primary p-5 rounded-md text-left'>
                    <h1 className=' font-bold'>14.6 What is a unit test? Why should write unit tests?</h1>
                    <p className='mt-3'><span className='font-bold'>Ans:</span> Unit testing is a type of software testing. In unit testing, individual units or software components are tested. It is a way to check that the software is working correctly. </p>
                    <p>Unit tests save time and money. Because If I release a software without unit test, I would have to keep fixing issues raised by your potential users. fixing bugs without running tests could also introduce new bugs into the software.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;