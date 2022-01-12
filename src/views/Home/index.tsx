import React, { useRef, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import styles from './Home.module.css';
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const aRef = useRef();
    const bRef = useRef();
    const cRef = useRef();
    const dRef = useRef();
    const eRef = useRef();
    const fRef = useRef();
    const gRef = useRef();
    const mainRef = useRef();
    // const q = gsap.utils.selector(mainRef);
    useEffect(() => {
        let arrRef = [aRef, bRef, cRef, dRef, eRef, fRef, gRef];
        let killRefArr = [];
        for(let el of arrRef) {
            let killRef = gsap.to(el.current, {
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top top',
                    pinSpacing: false,
                    pin: true,
                }, 
            });
            killRefArr.push(killRef);
        }

        return () => {
            // clearn up phase
            for(let k of killRefArr) {
                k.kill();
            }
        }
    }, []);
    return (
        <main ref={mainRef}>
            <section className={`${styles.section} ${styles.grayOne} panel`} ref={aRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    A is for Apple
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayTwo} panel`} ref={bRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    B is for Button
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayThree} panel`} ref={cRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    C is for Crayons
                </Typography>
            </section>
            <section  className={`${styles.section} ${styles.grayFour} panel`} ref={dRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    D is for Doggos
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayFive} panel`} ref={eRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    E is for Elephants
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.graySix} panel`} ref={fRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    F is for Fungi
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.graySeven} panel`} ref={gRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    G is for Ghosts and Ghouls
                </Typography>
            </section>
        </main>
    );
}

export default Home;