import React from 'react';
import ButtonFieldMenu from '../sidebar-menus/ButtonFieldMenu';
import CheckboxMenu from '../sidebar-menus/CheckboxMenu';
import CloseButtonMenu from '../sidebar-menus/CloseButtonMenu';
import ComplianceMenu from '../sidebar-menus/ComplianceMenu';
import EmailFieldMenu from '../sidebar-menus/EmailFieldMenu';
import FormMenu from '../sidebar-menus/FormMenu';
import NameFieldMenu from '../sidebar-menus/NameFieldMenu';
import PhoneFiledMenu from '../sidebar-menus/PhoneFieldMenu';
import TextMenu from '../sidebar-menus/TextMenu';
import ThemesMenu from '../sidebar-menus/ThemesMenu';
import './SidebarMenu.scss';
const SidebarMenu = () => {
    return (
        <div className="sidebar-menu">
            <ThemesMenu />
            <FormMenu />
            <TextMenu />
            <PhoneFiledMenu />
            <EmailFieldMenu />
            <NameFieldMenu />
            <ButtonFieldMenu />
            <CheckboxMenu />
            <CloseButtonMenu />
            <ComplianceMenu />
        </div>
    )
}

export default SidebarMenu;