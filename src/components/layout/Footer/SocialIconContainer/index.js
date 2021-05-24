import SocialIcon from "../SocialIcon";
import { socialIcons } from "./../../../../constants/socialIcons";
//----------------------------------------------------------------------------
import "./style.scss";

const SocialIconContainer = () => {
  return (
    <ul className="social-icon-container">
      {socialIcons.map((socialDates, index) => (
        <SocialIcon
          key={index}
          type={socialDates.type}
          url={socialDates.url}
          component={socialDates.component}
        />
      ))}
    </ul>
  );
};

export default SocialIconContainer;
