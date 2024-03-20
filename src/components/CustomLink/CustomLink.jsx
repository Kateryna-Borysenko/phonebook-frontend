import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, className, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--accent-secondary)' : 'var(--white)',
        textTransform: 'uppercase',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
