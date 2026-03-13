import { NextPage } from 'next';

const MembershipPage: NextPage = () => {
  return (
    <div>
      <h1>Membership Plans</h1>
      <p>
        At GymHub, we offer a variety of membership plans to suit your needs and
        budget.
      </p>
      <h2>Basic Membership</h2>
      <p>
        Includes access to our gym during regular business hours, group fitness
        classes, and personal training sessions.
      </p>
      <h2>Premium Membership</h2>
      <p>
        Includes all the benefits of the Basic Membership, plus access to our
        sauna and steam room.
      </p>
      <h2>Elite Membership</h2>
      <p>
        Includes all the benefits of the Premium Membership, plus a free
        personal training session each month.
      </p>
    </div>
  );
};

export default MembershipPage;