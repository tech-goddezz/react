function PopUp({question, cancelPopup}) {

    return (
        <div>
            <div className="popup">
                <span>{question} </span>
                <div className="popup_btns">
                    <button className="popup_btn" onClick={cancelPopup}>Confirm</button>
                    <button className="popup_btn popup_btn--cancel" onClick={cancelPopup}>Cancel</button> 
                </div>
            </div>
            <div className="backdrop" onClick={() => cancelPopup()}></div>
        </div>
    );
}

export default PopUp;