
import React from 'react';

import { CityLogo} from '../ui/icons';
const Footer = () => {
    return (
        <Footer className="bck_blue">
            <div className="footer_logo">
            
                <CityLogo
                    link={true}
                    linkTo='/'
                    width='70px'
                    height='70px'
                />
            </div>
            <div className="footer_disci">
                Manchester city 2018. All rights reserved.
            </div>
        </Footer>
    );
};

export default Footer;