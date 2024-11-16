import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
           
            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
             <button onClick={() => setMarkdown(markdown.split(' ').reverse().map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' '))}>
                Reverse Sentence
            </button>
        </div>
    );
};

export default MarkdownEditor;