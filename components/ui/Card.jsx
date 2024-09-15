// components/ui/Card.js
export function Card({ children, className = "" }) {
    return (
      <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  