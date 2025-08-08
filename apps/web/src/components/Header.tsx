'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import {
  LogOut,
  Moon,
  Settings as SettingsIcon,
  Sun,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-app-theme/use-theme';
import { signOut } from '@/actions/auth';

import MountainIcon from '@/components/icons/MountainIcon';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <div className="flex items-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center gap-2">
                <SettingsIcon className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault();
              toggleTheme();
            }}
          >
            {theme === 'light' ? (
              <>
                <Moon className="h-4 w-4" />
                <span>Enable Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4" />
                <span>Enable Light Mode</span>
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form action={signOut}>
            <DropdownMenuItem asChild>
              <button type="submit" className="flex w-full items-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
