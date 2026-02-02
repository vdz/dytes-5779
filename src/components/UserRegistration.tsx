/**
 * UserRegistration component - mailing list signup
 * Uses React for form state and submission
 */
import { useState, useRef } from 'react';
import { DISPLAY_MODES } from '../lib/ui-display-modes';
import { addEntry } from '../lib/contentful-management';

export default function UserRegistration() {
    const [mode, setMode] = useState(DISPLAY_MODES.normal);
    const [message, setMessage] = useState('');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const getMessage = () => {
        if (mode === DISPLAY_MODES.normal) return null;
        return <div className="message">{message}</div>;
    };

    const register = async () => {
        setMode(DISPLAY_MODES.normal);

        if (!nameRef.current?.value) {
            setMode(DISPLAY_MODES.error);
            setMessage('אנא מלא את שמך המלא לצורך התקשרות');
            return;
        }

        if (!emailRef.current?.value) {
            setMode(DISPLAY_MODES.error);
            setMessage('אנא מלא את כתובת הדואל האלקטרוני שלך לצורך התקשרות');
            return;
        }

        setMode(DISPLAY_MODES.processing);
        setMessage('שומר נתונים');

        try {
            await addEntry('user', {
                name: nameRef.current.value,
                email: emailRef.current.value,
            });

            setMode(DISPLAY_MODES.done);
            setMessage('תודה. שמרתנו ...');

            if (nameRef.current) nameRef.current.value = '';
            if (emailRef.current) emailRef.current.value = '';

            setTimeout(() => {
                setMode(DISPLAY_MODES.normal);
                setMessage('');
            }, 3000);
        } catch (error) {
            setMode(DISPLAY_MODES.error);
            setMessage('שגיאה בשמירה');
        }
    };

    return (
        <div className={`Registration Content mode-${mode}`}>
            <h3 className="title">הרשמה לרשימת הדיוור</h3>
            {getMessage()}
            <label>שם מלא (פרטי ומשפחה)</label>
            <input type="text" defaultValue="" ref={nameRef} />
            <label>כתובת דואר אלקטרוני</label>
            <input type="email" defaultValue="" ref={emailRef} />
            <div className="footer">
                <button className="register outline" onClick={register}>
                    הרשמה
                </button>
            </div>
        </div>
    );
}
