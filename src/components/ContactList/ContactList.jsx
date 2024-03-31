import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';
import {
  getAllContacts,
  getCurrentPage,
  getTotalPages,
  getPageSize,
  getTotalContacts,
  getLoading,
} from '../../redux/contacts/contactsSelectors';
import { sortAndGroupContacts } from '../../helpers/sortAndGroupContacts';
import ContactItem from './ContactItem/ContactItem';
import Spinner from '../common/Spinner/Spinner';
import ButtonGroup from '../../uikit/ButtonGroup/ButtonGroup';
import s from './ContactList.module.css';
import Pagination from '../../components/Pagination/Pagination';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getAllContacts);
  const totalPages = useSelector(getTotalPages);
  const pageSize = useSelector(getPageSize);
  const totalContacts = useSelector(getTotalContacts);
  const loading = useSelector(getLoading);

  const [currentPage, setCurrentPage] = useState(useSelector(getCurrentPage));
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeButton, setActiveButton] = useState('All');

  useEffect(() => {
    if (showFavorites) {
      dispatch(getContacts({ favorite: showFavorites, page: currentPage }));
    } else {
      dispatch(getContacts({ page: currentPage }));
    }
  }, [dispatch, showFavorites, currentPage, activeButton]);

  const sortedAndGroupedContacts = useMemo(() => {
    return sortAndGroupContacts(contacts);
  }, [contacts]);

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setCurrentPage(1);
    setActiveButton('Favorites');
  };

  const handleShowAll = () => {
    setShowFavorites(null);
    setCurrentPage(1);
    setActiveButton('All');
  };

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getContacts({ favorite: showFavorites, page: currentPage }));
  }, [dispatch, showFavorites, currentPage]);

  return (
    <>
      {loading ? (
        <div className={s.spinner_container}>
          <h1 className="Title">Contact List :</h1>
          <Spinner color="#d4fd02" size="10px" className={s.spinner} />
        </div>
      ) : (
        <div className={s.container}>
          <h1 className="Title">Contact List :</h1>
          <ButtonGroup
            activeButton={activeButton}
            onFavoritesClick={handleShowFavorites}
            onAllClick={handleShowAll}
          />
          {Object.keys(sortedAndGroupedContacts).length !== 0 ? (
            <>
              {Object.entries(sortedAndGroupedContacts).map(
                ([letter, contacts]) => (
                  <div key={letter}>
                    <div className={s.groupLetter}>{letter}</div>
                    <table className={s.table}>
                      <tbody>
                        {contacts.map(contact => (
                          <ContactItem key={contact._id} item={contact} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              )}
              <span className={s.pageInfo}>
                {currentPage} of {totalPages}
              </span>
              <Pagination
                totalRecords={totalContacts}
                pageLimit={pageSize}
                currentPage={currentPage}
                onPageChange={handleChangePage}
              />
            </>
          ) : (
            <p className={s.message}>
              {showFavorites
                ? 'No favorite contacts found.'
                : 'No contacts found. Please add new contacts to your list.'}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ContactList;
