import React from 'react';
import './Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import SidebarOption from '../SidebarOption/SidebarOption.js';

import {useDataLayerValue} from '../../DataLayer.js';

function Sidebar(){

    const [{playlists}] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className='sidebar__logo'/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar;