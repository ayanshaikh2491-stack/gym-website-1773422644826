import { NextPage } from 'next';
import Image from 'next/image';

const ServicesPage: NextPage = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>
        At GymHub, we offer a wide range of services to help you achieve your
        fitness goals.
      </p>
      <h2>Personal Training</h2>
      <p>
        Our expert trainers will work with you to create a customized fitness
        plan that suits your needs and goals.
      </p>
      <h2>Group Fitness Classes</h2>
      <p>
        Join one of our high-energy group fitness classes, led by our certified
        instructors.
      </p>
      <h2>State-of-the-Art Equipment</h2>
      <p>
        Our gym is equipped with the latest state-of-the-art equipment to help
        you reach your fitness goals.
      </p>
      <Image
        src="/images/gym-equipment.png"
        alt="Gym Equipment"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ServicesPage;