import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main>
            <section className={`${styles.section} ${styles.grayOne}`}>
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
            <section className={`${styles.section} ${styles.grayTwo}`}>
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
            <section className={`${styles.section} ${styles.grayThree}`}>
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
            <section  className={`${styles.section} ${styles.grayFour}`}>
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
            <section className={`${styles.section} ${styles.grayFive}`}>
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
            <section className={`${styles.section} ${styles.graySix}`}>
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
            <section className={`${styles.section} ${styles.graySeven}`}>
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