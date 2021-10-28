import Register from '../../components/Register';
import { wrapper } from './RegisterPage.module.scss';

export default function RegisterPage() {
  return (
    <section className={wrapper}>
      <div className="container">
        <Register />
      </div>
    </section>
  );
}
