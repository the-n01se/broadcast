import "./PopupAlert.css";

function PopupAlert(props) {
  const alertActive = props.alertActive;
  const setAlertActive = props.setAlertActive;

  return (
    <div
      className={alertActive ? "popup_alert active" : "popup_alert"}
      onClick={() => setAlertActive(false)}
    >
        <div
          className={
            alertActive ? "popup_alert__content active" : "popup_alert__content"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popup_alert__titles">
            <h4 className="popup_alert__title">This button doesn't work</h4>
            <p className="popup_alert__text">
              because this is just a training landing page. If you have any
              questions about the layout, you can write to {""}
              <a
                className="popup_alert__link"
                href="mailto:the-n01se@mail.ru"
              >
                the_n01se@mail.ru
              </a>
            </p>
            <p className="popup_alert__text">
              Website made by {""}
              <a
                className="popup_alert__link"
                href="https://github.com/the-n01se"
              >
                the-n01se
              </a>
            </p>
          </div>
          <button
            aria-label="close"
            className="popup_alert__btn"
            onClick={() => setAlertActive(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
                  fill="#000000"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53035 18.5303C6.23745 18.8232 5.76258 18.8232 5.46969 18.5303C5.17679 18.2374 5.17679 17.7626 5.46968 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </div>
    </div>
  );
}

export default PopupAlert;
