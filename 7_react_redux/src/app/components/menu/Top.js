import React from 'react';
import {Link} from 'react-router';

import '../../styles/nav.less';

class Top extends React.Component {
    render() {
        const links = [
            {link: '/', title: 'Главная'},
            {link: '/posts', title: 'Посты'},
            {link: '/comments', title: 'Комментарии'},
            {link: '/users', title: 'Пользователи'},
            {link: '/about', title: 'О нас'},
        ];

        const linkElems = links.map((item, index) => {
            let className = 'topmenu__item';
            className += window.location.pathname === item.link ? ' active' : '';
            return <Link className={className} to={item.link} key={index}>{item.title}</Link>
        });

        return (<div className="topmenu">
            <div className="topmenu__item topmenu__item_logo">React blog</div>
            {linkElems}
        </div>);
    }
}

export default Top;