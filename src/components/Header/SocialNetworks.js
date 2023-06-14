import "./SocialNetworks.css";

export default function SocialNetworks() {
  return (
    <div className="Menu">
      <a className="link" href="#">
        <i className="link-icon fa-brands fa-instagram"></i>
        <span className="link-title-long"> Instagram </span>
      </a>

      <a className="link" href="#">
        <i className="link-icon fa-brands fa-twitter"></i>
        <span className="link-title-short"> Twitter </span>
      </a>

      <a className="link" href="#">
        <i className="link-icon fa-brands fa-facebook-f"></i>
        <span className="link-title-short"> Facebook </span>
      </a>

      <a className="link" href="#">
        <i className="link-icon fa-brands fa-whatsapp"></i>
        <span className="link-title-long"> Whatsapp </span>
      </a>
    </div>
  );
}
