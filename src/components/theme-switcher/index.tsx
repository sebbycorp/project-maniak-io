import { useTheme } from 'next-themes';
import { Switch } from '../ui/switch';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Switch
      defaultValue={theme}
      checked={theme === 'dark' || theme === 'system'}
      onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}
