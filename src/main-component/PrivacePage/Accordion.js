import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: "Modern Equipment We Use and support from our experts.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: "Planning can help alleviate workplace stress and increase productivity.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: "Those who experiment the most, are able to innovate the best.",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            title: "Understand Your Problem, You must understand the issue.",
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
