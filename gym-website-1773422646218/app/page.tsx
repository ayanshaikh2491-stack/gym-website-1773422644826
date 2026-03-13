import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>GymHub</span>
        </h1>
        <Image
          src="/images/gym-logo.png"
          alt="Gym Logo"
          width={300}
          height={300}
        />
        <p className={styles.description}>
          Get fit, feel great, and achieve your goals with GymHub!
        </p>
        <div className={styles.grid}>
          <a
            href="/services"
            className={styles.card}
          >
            <h2>Our Services</h2>
            <p>
              State-of-the-art equipment and expert trainers to help you reach
              your fitness goals.
            </p>
          </a>
          <a
            href="/membership"
            className={styles.card}
          >
            <h2>Membership Plans</h2>
            <p>
              Choose from a variety of membership plans to suit your needs and
              budget.
            </p>
          </a>
          <a
            href="/contact"
            className={styles.card}
          >
            <h2>Get in Touch</h2>
            <p>
              Contact us to learn more about our services and find out how we
              can help you achieve your fitness goals.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;