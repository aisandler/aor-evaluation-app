interface Area {
  id: string;
  title: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const mainAreas: Area[] = [
  {
    id: 'implementation',
    title: 'Implementation',
    theme: {
      primary: 'amber-600',
      secondary: 'amber-100',
      accent: 'amber-900'
    }
  }
]; 