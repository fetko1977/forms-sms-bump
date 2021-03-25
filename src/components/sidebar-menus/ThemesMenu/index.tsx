import './ThemesMenu.scss';
import ThemeOne from '../../../themes/ThemeOne';
import ThemeTwo from '../../../themes/ThemeTwo';
import ThemeThree from '../../../themes/ThemeThree';
import ThemeFour from '../../../themes/ThemeFour';
import ThemeFive from '../../../themes/ThemeFive';
import ThemeSix from '../../../themes/ThemeSix';
import ThemeSeven from '../../../themes/ThemeSeven';
import ThemeEight from '../../../themes/ThemeEight';
import ThemesMenuItem from '../ThemesMenuItem';
import { useFormState, useFormDispatch } from '../../../context';

const ThemesMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTheme, selectedTool } = selectedForm;
    const dispatch = useFormDispatch();

    const handleThemeClick = (themeName: string) => {
        if(themeName === selectedTheme) {
            return;
        }

        // We update the selected theme and we close menu
        dispatch({ type: 'UPDATE_SELECTED_THEME', payload: themeName });
    }

    return (
        <div className={ selectedTool === 'theme' ? 'toolbar-menu toolbar-menu--visible themes-menu' : 'toolbar-menu themes-menu'}>
            <ThemesMenuItem name="ThemeOne" isSelected={selectedTheme === 'ThemeOne'} ThemeComponent={ThemeOne()} steps={2} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeTwo" isSelected={selectedTheme === 'ThemeTwo'} ThemeComponent={ThemeTwo()} steps={3} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeThree" isSelected={selectedTheme === 'ThemeThree'} ThemeComponent={ThemeThree()} steps={2} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeFour" isSelected={selectedTheme === 'ThemeFour'} ThemeComponent={ThemeFour()} steps={4} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeFive" isSelected={selectedTheme === 'ThemeFive'} ThemeComponent={ThemeFive()} steps={2} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeSix" isSelected={selectedTheme === 'ThemeSix'} ThemeComponent={ThemeSix()} steps={3} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeSeven" isSelected={selectedTheme === 'ThemeSeven'} ThemeComponent={ThemeSeven()} steps={3} onThemeClick={handleThemeClick} />
            <ThemesMenuItem name="ThemeEight" isSelected={selectedTheme === 'ThemeEight'} ThemeComponent={ThemeEight()} steps={4} onThemeClick={handleThemeClick} />
        </div>
    )
}

export default ThemesMenu;