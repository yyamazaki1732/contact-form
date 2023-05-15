import classes from "./Form.module.scss";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

export const Form = () => {
  //   const title = ["個人", "メディア", "バイヤー"];
  const desc = [
    "お問い合わせは、下記メールフォームからお問い合わせください。弊社カスタマーセンターよりご返信させていただきます。",
    "取材申し込み、プレスリリース等に関するお問い合わせの際は、下記フォームからお問い合わせください。",
    "＊＊＊＊＊＊＊＊等に関するお問い合わせの際は、下記フォームからお問い合わせください。",
  ];
  const [selectTitle, setSelectTitle] = useState("個人");
  const [selectDesc, setSelectDesc] = useState(desc[0]);
  const [display, setSisplay] = useState(false);

  const handleChange = (e) => {
    setSelectTitle(e.target.value);
  };

  useEffect(() => {
    setSelectDesc(updateDesc(selectTitle));
    setSisplay((prevState) => !prevState);
    // setInput(display);
  }, [selectTitle]);

  const updateDesc = (text) => {
    if (text === "個人") {
      return desc[0];
    } else if (text === "メディア") {
      return desc[1];
    } else {
      return desc[2];
    }
  };

  const setInput = (flg) =>
    css`
      display: ${flg ? "block" : "none"};
    `;
  return (
    <div className={classes.container}>
      <select
        value={selectTitle}
        onChange={(e) => handleChange(e)}
        className={classes.select}
      >
        <option value={"個人"} className={classes.select__item}>
          個人
        </option>
        <option value={"メディア"} className={classes.select__item}>
          メディア
        </option>
        <option value={"バイヤー"} className={classes.select__item}>
          バイヤー
        </option>
      </select>

      <form id={classes.contact} action="" method="post">
        <h3 className={classes.desc}>
          {selectDesc}
          <br />
          <span>＜営業時間10:00-19:00＞</span>
        </h3>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabIndex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            id="test"
            css={[setInput(display)]}
            placeholder="テスト"
            type="tel"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            tabIndex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
        <p className={classes.copyright}>
          Designed by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            title="Colorlib"
            rel="noreferrer"
          >
            Colorlib
          </a>
        </p>
      </form>
    </div>
  );
};
