import React from 'react';
import Styles from './letsTalk.module.css';

const LetsTalk = () => (
    <div id='letsTalk' className={Styles.grid}>
        <h3>Let's Talk.</h3>

        <form>
            <input name='name' type='text' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' />
            <textarea name="message" placeholder='Type your message here...'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
);

export default LetsTalk;