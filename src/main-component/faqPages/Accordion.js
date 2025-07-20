import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: "What types of cases does your consoel firm handle?.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: " Before hiring a consoel, what kind of questions should I ask?.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: "Should I meet with multiple Consultancy and shop around before hiring one?.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: "In addition to billable hours, what other costs canconsoel's charge for?.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        }
    ];

    return (
        <div className="accordion" id="accordionExample">
            {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h3 className="accordion-header">
                        <button
                            className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                        </button>
                    </h3>
                    <div className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}>
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
