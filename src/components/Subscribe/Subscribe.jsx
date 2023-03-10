import React from "react";
import { useForm } from "react-hook-form";

import Btn from "../UI/Button.jsx";

import "./Subscribe.css";

function Subscribe(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    isValid,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    props.setAlertActive(true);
    reset();
  };

  return (
    <section className="subscribe" id="subscribe">
      <div className="subscribe__inner">
        <div className="subscribe__titles">
          <p className="subscribe__subtitle">Email Newsletter</p>
          <h2 className="subscribe__title">Subscribe for updates</h2>
        </div>
        <form className="subscribe__forms" onSubmit={handleSubmit(onSubmit)}>
          <div className="subscribe__input-wrapper">
            <input
              className="subscribe__input"
              type="text"
              placeholder="Name"
              {...register("userName", {
                required: "The field is required",
                pattern: {
                  value: /^[A-Za-zА-яа-я-]+$/i,
                  message: "Enter correct name",
                },
                maxLength: {
                  value: 15,
                  message: "Too many characters",
                },
              })}
            />
            <span className="subscribe__input-errors">
              {errors?.userName && (
                <p>{errors?.userName.message || "Error!"}</p>
              )}
            </span>
          </div>

          <div className="subscribe__input-wrapper">
            <input
              className="subscribe__input"
              inputMode="email"
              placeholder="Email"
              {...register("userEmail", {
                required: "The field is required",
                pattern: {
                  value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]/,
                  message: "Enter correct email",
                },
                maxLength: {
                  value: 30,
                  message: "Too many characters",
                },
              })}
            />
            <span className="subscribe__input-errors">
              {errors?.userEmail && (
                <p>{errors?.userEmail.message || "Error!"}</p>
              )}
            </span>
          </div>

          <Btn
            type="submit"
            classname="subscribe__btn"
            text="Submit"
            disabled={!isValid}
          />
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
