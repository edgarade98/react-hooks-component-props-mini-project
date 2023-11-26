import React from 'react'

export default function Article({ title, date , preview, minutes }) {
    const defaultDate = "January 1, 1970";
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate} • {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}