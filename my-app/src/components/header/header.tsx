import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import axios, {AxiosResponse} from 'axios';
import {useDispatch} from "react-redux";
import {useUser, useIsAuth, setIsAuthAction, setUserAction} from "../../slices/AuthSlices.ts";
import { useVacancyFromResp} from "../../slices/RespSlices.ts";
const cookies = new Cookies();
import Cookies from "universal-cookie";
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from "framer-motion";
import ProfileWindow from '../ProfileWindow/ProfileWindow.tsx';


const Header: React.FC = () => {
  const dispatch = useDispatch();
    const [isProfileButtonClicked, setIsProfileButtonClicked] = useState(false);
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false)
    const isUserAuth = useIsAuth();
    const vacanciesFromApplications = useVacancyFromResp();
    let user = useUser();

    const handleProfileButtonClick = () => {
        setIsProfileButtonClicked(!isProfileButtonClicked);
    };

    const logout = async () => {
        try {
            console.log(cookies.get('session_id'))
            const response: AxiosResponse = await axios('http://localhost:8000/logout',
            {
                method: "POST",
                withCredentials: true,
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }, 
            })

            cookies.remove("session_id", { path: "/" }); 

            dispatch(setIsAuthAction(false))
            dispatch(setUserAction({
                email: "",
                fullname: "",
                phoneNumber: "",
                isSuperuser: false
            }))
            setIsProfileButtonClicked(false);
            toast.success("Выход выполнен  успешно");
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleSubmit = async () => {
        await logout();
    };

    return (
        <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__img}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
              <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
            </svg>
            mm
          </div>
          <Link to='/vacancies' className={styles.header__logo}>Сервис по поиску вакансий</Link>
          <div className={styles.header__profileWrapper}>
          {isUserAuth && <Link to="/responses" className={styles.header__profile}>Список откликов</Link>}
           <span className={styles.header__spacer}>&nbsp;&nbsp;&nbsp;</span> {/* Увеличенный пробел */}
           {isUserAuth &&  <Link to="/resp" className={styles.header__profile}>Отклик</Link>}
            {/* <Link to="/registration" className={styles.header__profile}>Личный кабинет</Link> */}
            <span className={styles.header__spacer}>&nbsp;&nbsp;&nbsp;</span> {/* Увеличенный пробел */}
            {isUserAuth && (
            <div className={styles.header__profile} onClick={handleSubmit}>
              Выход
            </div>
          )}
            {isUserAuth ? <div className={styles.header__profile} onClick={handleProfileButtonClick}/> : <Link to='/login' className={styles.header__profile}>Вход<div/></Link>}
          </div>
        </div>
      </div>
    )
};

export default Header;