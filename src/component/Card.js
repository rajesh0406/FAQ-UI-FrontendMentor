import React from 'react'
import './index.css'
import dpattern from '../Image/bg-pattern-desktop.svg' ;
import WomenIllustration from '../Image/illustration-woman-online-desktop.svg';
import box from '../Image/illustration-box-desktop.svg'
import ListTile from './ListTile';
export default function Card() {
    return (
        <div className="faq-card">
            <div className="faq-card-container-1">
                <img
                src={dpattern}
                />
                <div className="faq-woman-illustration">
                <img
                src={WomenIllustration}
                />
                 <img
                src={box}
                className="faq-box-illustration"
                />
                </div>
               
            </div>
            <div className="faq-card-container-2">
                <h2>FAQ</h2>
                <ListTile
                question ="How many team members can I invite ?"
                answer="No answer"/>
                <ListTile
                question="What is the maximum file upload size ?"
                answer="No more than 2GB.All files in your account must fit your allotted storage space"
                />
                <ListTile
                question="How do I reset my password ?"
                answer="No answer"
                />
                <ListTile
                question="Can I cancel my subscription ?"
                answer="No answer"
                />
                <ListTile
                question="Do you provide additional support ?"
                answer="No answer"
                />

            </div>
        </div>
    )
}
