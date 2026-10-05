import Title from "../_components/Title";

function Header({ title, description }) {
  return (
    <div className="col-start-2 col-end-6">
      <Title>{title}</Title>
      <p className="text-t-weak">{description}</p>
    </div>
  );
}

export default Header;
