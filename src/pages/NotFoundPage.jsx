import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">Go to Home</Link>
      </div>
    </div>
  );
}
