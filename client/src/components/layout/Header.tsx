import { Button } from "@/components/ui/button";
import { Camera, Droplets, Leaf, User, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const [, setLocation] = useLocation();
  const handleSignOut = () => {
    // Handle sign out logic here
    setLocation('/auth');
  };
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2 text-primary">
            <Flower className="h-6 w-6" />
            <span className="font-semibold text-lg">Plantoo</span>
          </a>
        </Link>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Add Plant
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocation('/profile')}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}