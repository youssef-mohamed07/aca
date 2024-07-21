import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
const ContactRegister = ({ className = "" }) => {
  const navigate = useNavigate();
  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border max-w-full mq825:box-border ${className}`}
    >
      <header className="flex-1 [background:linear-gradient(90deg,_#283349,_#910a2d)] flex flex-row items-center justify-content-between py-[12.5px] px-2 box-border gap-[323.2px] top-[0] z-[99] sticky max-w-full text-center text-lg text-blanc font-abel mq450:gap-[40px] mq825:gap-[81px] mq1425:gap-[162px]">
        <div className=" flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border d-flex flex-row align-items-center">
          {localStorage.getItem('id') ?
            <div className="mx-3 fw-bold fs-6" 
            style={{cursor:'pointer'}}
            onClick={() => {

              localStorage.removeItem('id')
              navigate('/login')
            }
            }> تسجيل الخروج </div>

            :
            <Link to={'/login'} className="text-white">
              <div className="mx-3 fw-bold">تسجيل </div>

            </Link>
          }

          <div className="sm:flex hidden self-stretch flex-row items-start justify-start gap-[15.7px]">
            <div className="h-8 w-8 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
              <img
                className="absolute h-[38.44%] w-[17.81%] top-[30.63%] right-[41.25%] bottom-[30.94%] left-[40.94%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/shape.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[7.2px] pb-[6.8px] pr-[7px] pl-2 relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
              <div className="w-[16.1px] relative leading-[18px] flex items-center justify-center shrink-0 min-w-[16.1px] whitespace-nowrap z-[1]">
                
              </div>
            </div>
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="lazy"
              alt=""
              src="/linkedin-icon.svg"
            />
            <div className="h-8 w-8 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
              <img
                className="absolute top-[9px] left-[9.9px] w-[13.1px] h-[14.8px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/instagram-logo.svg"
              />
            </div>
            <div className="h-8 w-8 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
              <img
                className="absolute h-[28.13%] w-[33.44%] top-[35.94%] right-[33.12%] bottom-[35.94%] left-[33.44%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <nav className="m-0  flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border max-w-full mq825:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-blanc font-ibm-plex-sans-arabic align-items-center">
            {/* <Link
              to={"/players/youth"}
              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]"
            >
              اللاعبين
            </Link> */}
            {/* <Dropdown>
              <Dropdown.Toggle className="bg-transparent border-0" id="dropdown-basic">
                اللاعبين
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/players/pro"> لاعبي المحترفين </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/players/youth"> لاعبي الناشئين </Link>

                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Link to="/players/pro"              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]"
            > لاعبي المحترفين </Link>

            <Link to="/players/youth"              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]"
            > لاعبي الناشئين </Link>

            <Link
              to={"/training"}
              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]"
            >
              الحصص التدريبية
            </Link>
            <Link
              to={"/"}
              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]"
            >
          الرئيسية
            </Link>
          </nav>
        </nav>
        <a
          className="[text-decoration:none] relative text-5xl font-knewave text-[inherit] text-left inline-block min-w-[1px] whitespace-nowrap cursor-pointer"
          onClick={onLogoTextClick}
          style={{width:'10%'}}
        >
          <img src='/logo.png' alt="logo"className="w-50" />
        </a>
      </header>
    </section>
  );
};

ContactRegister.propTypes = {
  className: PropTypes.string,
};

export default ContactRegister;
