import React from 'react';

import ScrollToTop from 'react-scroll-up';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function ScrollToTopButton(props) {
    return (
        <div>
            <ScrollToTop showUnder={50} style={{ right: '10vw' }}>
              <ArrowUpwardIcon
                style={{
                  fontSize: 50,
                  backgroundColor: '#17A2B8',
                  borderRadius: '50%',
                }}
              />
            </ScrollToTop>
        </div>
    );
}

export default ScrollToTopButton;