import {ReCAPTCHA} from "react-google-recaptcha";

const Captcha = (props) => (
  <div>
    <ReCAPTCHA
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={props.input.onChange}
    />
    </div>
);

export default Captcha;