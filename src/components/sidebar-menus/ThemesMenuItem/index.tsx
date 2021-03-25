import { IThemeMenuItem } from '../../../interfaces';
import './ThemesMenuItem.scss';

const ThemesMenuItem = ({ name, isSelected, ThemeComponent, steps, onThemeClick}: IThemeMenuItem) => {
    return (
        <div className="themes-menu__item" onClick={() => onThemeClick(name)}>
            { isSelected ? <div className="themes-menu__item-selected-label">Selected</div> : null}
            { ThemeComponent }
            <div className="themes-menu__item-steps-copy">
                This form has <span className="steps-count">{ steps }</span> steps.
            </div>
        </div>
    )
}

export default ThemesMenuItem;