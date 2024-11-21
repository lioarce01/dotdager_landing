"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Instagram,
  Twitch,
  Twitter,
  Youtube,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Lumberjack from "@/components/Lumberjack";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-black text-zinc-900 dark:text-zinc-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAyNWE1IDUgMCAwIDEgMCAxMCA1IDUgMCAwIDEgMC0xMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20 dark:opacity-5" />
      <main className="container mx-auto px-4 py-16 relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-gray-300/50 hover:bg-white/20 transition-colors duration-200"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative group size-48 md:size-64 overflow-hidden rounded-full border-8 border-gray-400 dark:border-neutral-800 shadow-2xl transform transition-transform duration-1000">
            {/* Imagen inicial (la que se muestra normalmente) */}
            <Image
              alt="Dot Dager Profile"
              className="object-cover w-full h-full transition-all duration-300 ease-in-out"
              height={256}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dagger-perfil-mas-resolucion.jpg-uv0VS0zxG7vUpEQz4JW4pOXLDQDbi8.jpeg"
              width={256}
            />

            {/* Imagen que aparece al hacer hover */}
            <Image
              alt="Dot Dager Profile Hover"
              className="object-cover absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              height={256}
              src="/profile2.png"
              width={256}
            />
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Mariano Villa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Dot Dager "Cucumber Master"
            </p>
          </div>
          <div className="max-w-2xl text-center space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              👋 Hey there! I'm the guy who accidentally became a cucumber
              expert while trying to debug my "code". When I'm not pickling or
              coding, I'm probably trying to write a philosophy paper about why
              pickles are the meaning of life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-4">
              {[
                { emoji: "🥒", text: "Cucum coding ", class: "animate-bounce" },
                { emoji: "🧑‍💻", text: "Debugging (with cucumbers)" },
                { emoji: "🐱", text: "Cat-assisted Programming" },
                { emoji: "🎸", text: "Rockstar (in my shower)" },
                { emoji: "🤔", text: "Professional Overthinker" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/10 dark:bg-neutral-900 backdrop-blur-sm p-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <span className={`text-2xl ${item.class || ""}`}>
                    {item.emoji}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                href: "https://www.youtube.com/@DotDager",
                icon: Youtube,
                text: "Watch me pickle",
              },
              {
                href: "https://www.instagram.com/dager.32/",
                icon: Instagram,
                text: "Picklegram",
              },
              {
                href: "https://github.com/MarianoVilla",
                icon: Github,
                text: "PickleHub",
              },
              {
                href: "https://www.twitch.tv/dagerxiv",
                icon: Twitch,
                text: "PickeTV",
              },
              {
                href: "https://x.com/Dager_32",
                icon: Twitter,
                text: "Pickle Tweets",
              },
            ].map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <Button
                  variant="outline"
                  className="bg-white/10 dark:bg-neutral-900 backdrop-blur-sm border-gray-300 dark:border-neutral-700 hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <link.icon className="mr-2 size-4" />
                  {link.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400 italic">
          "Dicen que el tamaño no importa, pero cuando se trata de pepinos...
          siempre termino eligiendo el que llena más la ensalada." - Dot Dager
          in a fever dream
        </div>
        <div className="fixed bottom-4 right-4">
          <button
            onClick={openModal}
            className="text-6xl animate-bounce"
            role="img"
            aria-label="Pickle"
          >
            🥒
          </button>
        </div>

        <Lumberjack isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </div>
  );
}
