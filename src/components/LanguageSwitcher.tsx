'use client';

import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';

const LanguageSwitcher = () => {
  const { t } = useTranslation(); // Still use t for potential labels if needed
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'sr', label: 'Serbian' },
  ];

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="secondary" 
          size="default" 
          className="rounded-full shadow-md flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Languages className="h-4 w-4" />
          <span>{language === 'en' ? 'English' : 'Serbian'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={5}>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)} // Set language via Zustand
            className={lang.code === language ? "bg-muted font-medium" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher; 