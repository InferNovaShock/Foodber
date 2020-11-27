import React from "react";

/*
    xs (for phones - screens less than 768px wide)
    sm (for tablets - screens equal to or greater than 768px wide)
    md (for small laptops - screens equal to or greater than 992px wide)
    lg (for laptops and desktops - screens equal to or greater than 1200px wide)
*/

export default class ResponsiveSize extends React.Component {
    screenSize = () => {
        const { xs, sm, md, lg, children } = this.props;
        const screenSize = window.innerWidth;

        if (xs && screenSize < 768) {
            return children;
        } else if (sm && screenSize >= 768 && screenSize < 992) {
            return children;
        } else if (md && screenSize >= 992 && screenSize < 1200) {
            return children;
        } else if (lg && screenSize >= 1200) {
            return children;
        } else {
            return <></>;
        }
    };

    render = () => {
        this.screenSize();
        return this.screenSize();
    };
}
