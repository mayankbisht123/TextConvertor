import React, { useRef, useState } from "react";
import '../componentsCSS/TextArea.css';

const TextArea=(props)=>{
    const [text,setText] = useState('');
    const textRef = useRef(null);

    const handleCopy = () =>{
        navigator.clipboard.writeText(textRef.current.value);
        props.alert("Text have been successfully copied to clipboard","success");
    }
    const handleAlter= () =>{
        const words=text.split(' ');
        let alterWords=[];

        for(let i=0;i<words.length;i++)
        {
            const word=words[i];
            let changedWord="";
            for(let j=0;j<word.length;j++)
            {
                const charCode=word[j].charCodeAt(0);
                if(charCode<=122 && charCode>=97)
                {
                    changedWord=changedWord+String.fromCharCode(charCode-32);
                }
                else if(charCode<=90 && charCode>=65)
                {
                    changedWord=changedWord+String.fromCharCode(charCode+32);
                }
                else{
                    changedWord=changedWord+word[j];
                }

            }
            alterWords.push(changedWord);
        }
        setText(alterWords.join(' '));
        props.alert("Text have been successfully altered","success");
    }

    const handleClear=()=>{
        setText("");
        props.alert("Text have been successfully cleared","success");
    }

    const handleConvert=(event)=>{

        if(text!==""){
        const words=text.split('.');
        const captialWords= [];
        
        for(let i=0;i<words.length;i++)
        {
            let word=words[i].trim();

            if(word.length>0){
            let captialWord=word[0].toUpperCase()+word.slice(1).toLowerCase();
            captialWords.push(captialWord);
            }

            

        }
        setText(captialWords.join('. ')+'.');
    }
    props.alert("Text have been successfully converted","success");
    }


    const handleOnChange=(event)=>{
        let a=event.target.value;
        setText(a);
    }
return(
    <>
        <div className={`container ${props.mode}`}>
            <label htmlFor='textarea'>{props.label}</label>
            <textarea ref={textRef} id="textarea" className="inputTextArea" onChange={handleOnChange} rows={15} placeholder="Enter your text here" value={text}/>
            <p>Characters:{text.length} Words:{text.length===0? 0:text.trim().split(/\s+/).length}</p>
            <div className="buttons">
                <button className="convertButton" onClick={handleConvert}>Convert</button>
                <button className="clearButton" onClick={handleClear}>Clear</button>
                <button className="AlterButton" onClick={handleAlter}>Alter</button>
                <button className="ClipboardButton" onClick={handleCopy}>Copy</button>
            </div>
        </div>
    </>
);
};

export default TextArea;