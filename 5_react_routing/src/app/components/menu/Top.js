import React from 'react';
import {Link} from 'react-router';

import '../../styles/nav.less';

class Top extends React.Component {
    render() {
        return (<div className="topmenu">
            <div className="topmenu__item topmenu__item_logo">React blog</div>
            <Link className="topmenu__item" to="/">Главная</Link>
            <Link className="topmenu__item" to="/posts">Посты</Link>
            <Link className="topmenu__item" to="/comments">Комментарии</Link>
            <Link className="topmenu__item" to="/comments/1">Комментарии 1</Link>
            <Link className="topmenu__item" to="/users">Пользователи</Link>
            <Link className="topmenu__item" to="/about">О нас</Link>
        </div>);
    }
}

export default Top;