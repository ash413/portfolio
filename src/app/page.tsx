'use client'

import { motion } from "framer-motion"
import Hero from '@/components/Hero'
import SkillsGrid from "@/components/SkillsGrid"
import DarkModeToggle from "@/components/DarkModeToggle"


export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      <Hero />
      <SkillsGrid />

    </main>
  )
}