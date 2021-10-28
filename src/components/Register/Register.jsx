import { useState, useCallback } from 'react';
import { ReactComponent as IconCaduceus } from './svg/caduceus.svg';
import { ReactComponent as IconMaleGender } from './svg/male.svg';
import { ReactComponent as IconFemaleGender } from './svg/female.svg';
import { ReactComponent as IconOtherGender } from './svg/other.svg';
import styles from './Register.module.scss';

export default function Register() {
  const [user, setUser] = useState({
    gender: '',
    email: '',
    password: '',
    comparedPassword: '',
  });

  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (user.password.toString() === user.comparedPassword.toString()) {
        setUser({
          gender: '',
          email: '',
          password: '',
          comparedPassword: '',
        });
        alert(
          `Gender: ${user.gender}, Email: ${user.email}, Password: ${user.password}`,
        );
        return;
      }

      alert('Пароли не совпадают!');
    },
    [user],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.svgWrapper}>
        <IconCaduceus className={styles.svgIcon} />
      </div>

      <h1 className={styles.title}>Sign Up with email</h1>

      <span className={styles.genderTitle}>Gender</span>
      <div className={styles.genderItemWrapper}>
        {/* male */}
        <input
          className="visually-hidden"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleChange}
          required
        />
        <label
          className={`${styles.genderItem}
          ${user.gender === 'Male' && styles.genderItemActive}`}
          htmlFor="male"
        >
          <IconMaleGender className={styles.genderIcon} />
          <span className={styles.genderText}>Male</span>
        </label>

        {/* female */}
        <input
          className="visually-hidden"
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleChange}
          required
        />
        <label
          className={`${styles.genderItem}
          ${user.gender === 'Female' && styles.genderItemActive}`}
          htmlFor="female"
        >
          <IconFemaleGender className={styles.genderIcon} />
          <span className={styles.genderText}>Female</span>
        </label>

        {/* other */}
        <input
          className="visually-hidden"
          type="radio"
          name="gender"
          id="other"
          value="Other"
          onChange={handleChange}
          required
        />
        <label
          className={`${styles.genderItem}
          ${user.gender === 'Other' && styles.genderItemActive}`}
          htmlFor="other"
        >
          <IconOtherGender className={styles.genderIcon} />
          <span className={styles.genderText}>Other</span>
        </label>
      </div>

      {/* email */}
      <label className={styles.dataWrapper}>
        <p className={styles.dataTitle}>Email</p>
        <input
          className={styles.dataInput}
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </label>

      {/* password */}
      <label className={styles.dataWrapper}>
        <p className={styles.dataTitle}>Create Password</p>
        <input
          className={styles.dataInput}
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your password"
          minLength="6"
          required
        />
      </label>

      {/* confirm password */}
      <label className={styles.dataWrapper}>
        <p className={styles.dataTitle}>Confirm Password</p>
        <input
          className={styles.dataInput}
          type="password"
          name="comparedPassword"
          value={user.comparedPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          minLength="6"
          required
        />
      </label>

      {/* sign up  */}
      <button className={styles.button} type="submit">
        Sign Up
      </button>

      <p className={styles.accountText}>
        Already have an account?{' '}
        <a href="./" className={styles.accountTextLink}>
          Log In
        </a>
      </p>
      <p className={styles.privacyText}>
        Review privacy and disclosures{' '}
        <a href="./" className={styles.privacyTextLink}>
          here
        </a>
      </p>
    </form>
  );
}
