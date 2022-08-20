import React from 'react';

export default function Link({ link, title }) {
    return (
        <a href={link}>
            <button id="link">{title}</button>
        </a>
    );
};