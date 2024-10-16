import PropTypes from 'prop-types';
import AccountInfo from '../AccountInfo/AccountInfo';
import AddressInfo from '../AccountInfo/AddressInfo';

const MainContent = ({ activeSection }) => {
    return (
    <div className="w-3/4 p-4">
        {activeSection === 'accountInfo' && (
        <>
            <AccountInfo />
            <AddressInfo />
        </>
        )}
        {activeSection === 'myOrders' && <div>My Orders Content</div>}
        {activeSection === 'myRestaurants' && <div>My Restaurants Content</div>}
    </div>
    );
};

MainContent.propTypes = {
    activeSection: PropTypes.oneOf(['accountInfo', 'myOrders', 'myRestaurants']).isRequired,
};

export default MainContent;
