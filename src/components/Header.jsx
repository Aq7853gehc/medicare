import React from "react";
import style from "./Header.module.scss";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>MediCare</div>
      <div className={style.search_container}>
        <MagnifyingGlassIcon className={style.search_icon} />
        <input type="text" placeholder="Search" />
      </div>

      <div className={style.login_wrapper}>
        <UserIcon className={style.login_icon} />
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
