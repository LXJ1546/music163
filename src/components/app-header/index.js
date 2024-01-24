import React, { memo } from 'react';
import { Link } from 'react-router-dom';
export default memo(function AppHeader() {
    return (
        <div>
            <h1>AppHeader</h1>
            <nav>
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/friend">朋友</Link>
            </nav>
        </div>
    );
})