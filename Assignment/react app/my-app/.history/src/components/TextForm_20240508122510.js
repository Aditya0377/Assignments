import React from 'react'

function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="3"></textarea>
            </div>
        </div>
    )
}

export default TextForm
