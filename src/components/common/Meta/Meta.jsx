import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To PhoneBook',
  description:
    'A React-based app with registration that allows users to create their own PhoneBook and simplifies contact searching by filtering through entered names. The application also supports both light and dark themes and is available in three languages.',
  keywords: 'contacts, favorite contacts, manage contacts',
};

export default Meta;
