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
        for(let el of arrRef) {
            gsap.to(el.current, {
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top top',
                    markers: true,
                    pinSpacing: false,
                    pin: true,
                }, 
            });
        }
        //  const sOne = gsap.to(el.current, {
        //     scrollTrigger: {
        //         trigger: el.current,
        //         start: 'top top',
        //         markers: true,
        //         pinSpacing: false,
        //         pin: true,
        //     }, 

        // });

        // const sTwo = gsap.to(em.current, {
        //     scrollTrigger: {
        //         trigger: em.current,
        //         start: 'top top',
        //         markers: true,
        //         pinSpacing: false,
        //         pin: true,
        //     }, 

        // });

        // const panel = gsap.to(q('.panel'), {
        //     opacity: '0.35'
        // });

        return () => {
            // sOne.kill();
            // sTwo.kill();
            // panel.kill();
        }
    }, []);
    return (
        <main ref={mainRef}>
            <section className={`${styles.section} ${styles.grayOne} panel`} ref={aRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    A is for Apple
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    1. A first section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayTwo} panel`} ref={bRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    B is for Button
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    2. A second section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayThree} panel`} ref={cRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    C is for Crayons
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    3. A third section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section  className={`${styles.section} ${styles.grayFour} panel`} ref={dRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    D is for Doggos
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    4. A fourth section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.grayFive} panel`} ref={eRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    E is for Elephants
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    5. A fifth section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.graySix} panel`} ref={fRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    F is for Fungi
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    6. A sixth section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
            <section className={`${styles.section} ${styles.graySeven} panel`} ref={gRef}>
                <Typography variant='h2' component='div' gutterBottom>
                    G is for Ghosts and Ghouls
                </Typography>
                <Typography variant='h3' component='div' gutterBottom>
                    7. A seventh section
                </Typography>
                <Button variant='contained'>
                    Press the goobery button
                </Button>
                <Typography variant='body1' gutterBottom>
                    and this is a story all about how <span> my life got flipped and turned upside down.</span>
                </Typography>
            </section>
        </main>
    );
}

export default Home;