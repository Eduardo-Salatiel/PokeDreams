import "./style.scss";

const SocialIcon = ({type, url, component:Component}) => {

  return (
      <li className={`social-icon ${type}`}>
        <a href={url} target="_blank" rel="noreferrer">
          {Component}
        </a>
      </li>
  );
};

export default SocialIcon;
