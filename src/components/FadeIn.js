import React, { useEffect, useRef } from 'react';
import "./FadeIn.css";

const FadeInGrid = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const gridItems = Array.from(gridRef.current.querySelectorAll('.grid-item'));
        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        gridItems.forEach((item, index) => {
            observer.observe(item);
            item.style.transitionDelay = `${index * 0.1}s`; // Set an increasing delay for each item
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="grid-container" ref={gridRef}>
            <div className="grid-item"><img src="../../images/exp1.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp2.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp3.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp4.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp5.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp6.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp7.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp8.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp9.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp10.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp11.jpg" alt="experience" className="experienceImg"/></div>
            <div className="grid-item"><img src="../../images/exp12.jpg" alt="experience" className="experienceImg"/></div>

        </div>
    );
};



export default FadeInGrid;

