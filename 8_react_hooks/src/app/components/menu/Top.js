import React from 'react';

import '../../styles/nav.less';

const Top = props => {
    const currentPage = props.currentPage;

    const linkElems = props.links.map((item, index) => {
        const isHome = item.link === '#';
        const isActive = !currentPage && isHome || currentPage === item.link;
        const className = 'topmenu__item' + (isActive ? ' active' : '');
        return <a className={className} onClick={item.onClick} key={index} href={item.link}>{item.title}</a>
    });

    return (<div className="topmenu">
        <div className="topmenu__item topmenu__item_logo">React blog</div>
        {linkElems}
    </div>);
};

export default Top;