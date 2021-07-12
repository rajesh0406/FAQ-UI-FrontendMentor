import React,{useState} from 'react'
import arrow from '../Image/icon-arrow-down.svg'
export default function ListTile(props) {
    const [state, setstate] = useState()
    const [ar,setAr]=useState("down-arrow")
    const [hide,setHide]=useState(false)
    const [Style,setStyle]=useState("faq-listtile-question")
    const [active,setActive]=useState(true)
    const handleClick=()=>{
        setstate(!state)
        setAr(ar === "down-arrow"?"up-arrow":"down-arrow")
        setHide(!hide)
        setStyle("faq-listtile-question-selected")
        setActive(!active)
    }
    return (
        <div className="faq-listtile">
            <div className={active?"faq-listtile-question":"faq-listtile-question active"}    onClick={()=>handleClick()}>
            <p >{props.question}</p>
            <img
            className={ar}
            src={arrow}
         
            />
            </div>

            {hide && <div className="faq-answer">
                <p>{props.answer}</p>
            </div>}
        </div>
    )
}
