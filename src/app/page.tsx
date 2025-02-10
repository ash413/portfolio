'use client'

import Hero from '@/components/Hero'
import SkillsGrid from "@/components/SkillsGrid"
import DarkModeToggle from "@/components/DarkModeToggle"
import Projects from "@/components/Projects"
import ContactCard from '@/components/ContactCard'

import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      <Hero />
      <SkillsGrid />
      <Projects />
      <ContactCard />
      < Toaster />
    </main>
  )
}