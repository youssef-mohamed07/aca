import { useCallback } from "react";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const onLogoTextClick = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  return (
   <h1>asdas</h1>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
