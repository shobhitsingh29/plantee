import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockUser } from "@/data/mockData";
import { Flower, Leaf, Camera, Droplets } from "lucide-react";

export function Header() {
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
          <Link href="/identify">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Identify Plant
            </Button>
          </Link>

          <Link href="/water-calculator">
            <Button variant="ghost" className="hidden sm:flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Water Calculator
            </Button>
          </Link>

          <Button variant="ghost" className="hidden sm:flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Add Plant
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}