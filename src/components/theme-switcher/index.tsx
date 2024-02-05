import { useTheme } from 'next-themes';
import React from 'react';

import { Switch } from '@/components/ui/switch';

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}
