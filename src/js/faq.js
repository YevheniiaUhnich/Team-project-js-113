// @ts-ignore
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css"; 
document.addEventListener("DOMContentLoaded", () => {
    const allAccordionContent = document.querySelectorAll('.accordion-content');
    allAccordionContent.forEach(panel => {
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
        panel.style.overflow = "hidden";
    });

new Accordion(".accordion", {
    duration: 400,  
    showMultiple: true,
    elementClass: "accordion-item",
    triggerClass: "accordion-button",
    panelClass: "accordion-content",
    onOpen: (currElement) => {
        let panel = currElement.querySelector(".accordion-content");
        let icon = currElement.querySelector(".accordion-button use");
        if (panel) {
            panel.style.maxHeight = panel.scrollHeight + "px"; 
            panel.style.opacity = "1";
            panel.style.overflow = "visible";
        }
        
    },

    onClose: (currElement) => {
        let panel = currElement.querySelector(".accordion-content");
        let icon = currElement.querySelector(".accordion-button use");
        if (panel) {
            panel.style.maxHeight = "0px"; 
            panel.style.opacity = "0";
            panel.style.overflow = "hidden";
        }
        
    },
});
});





