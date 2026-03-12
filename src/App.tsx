/**
 * MP DIÁRIO - Design System Juridico
 * Primeira Versão - 2026-03-12
 * Framework: React + Tailwind (como Lovable)
 */

import { useState } from "react"
import { 
  Scale, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Search, 
  Menu,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Linkedin,
  Instagram,
  Facebook,
  ChevronRight,
  Gavel,
  BookOpen,
  Briefcase,
  X
} from "lucide-react"

// ============================================
// COMPONENTS - Design System
// ============================================

// Button Component
function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  type = "button"
}: { 
  children?: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: "left" | "right"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-josefin font-normal transition-all duration-300 ease cursor-pointer rounded-[4px]"
  
  const variantClasses = {
    primary: "bg-[#c9a227] text-[#1a1c2c] hover:bg-[#b8921f] hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-transparent border-2 border-[#1a1c2c] text-[#1a1c2c] hover:bg-[#1a1c2c] hover:text-white",
    outline: "bg-transparent border border-[#9a8c98] text-[#4a4e69] hover:border-[#1a1c2c] hover:text-[#1a1c2c]",
    ghost: "bg-transparent text-[#4a4e69] hover:text-[#c9a227]",
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4.5 text-base",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </button>
  )
}

// Card Component
function Card({ children, variant = "default", className = "" }: { 
  children: React.ReactNode
  variant?: "default" | "hover"
  className?: string
}) {
  return (
    <div
      className={`
        bg-white rounded-[8px] p-6
        border border-[#e8e4df]
        shadow-[0_2px_8px_rgba(26,28,44,0.06)]
        transition-all duration-300
        ${variant === "hover" ? "hover:shadow-[0_8px_24px_rgba(26,28,44,0.12)] hover:-translate-y-0.5 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Input Component
function Input({ label, placeholder, type = "text", icon: Icon, className = "" }: { 
  label?: string
  placeholder?: string
  type?: string
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="font-josefin font-300 text-sm text-[#4a4e69] tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a8c98]" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3
            font-josefin font-300 text-base
            bg-white
            border border-[#e8e4df] rounded-[4px]
            outline-none
            transition-all duration-200
            ${Icon ? "pl-12" : ""}
            focus:border-[#c9a227]
            focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]
            placeholder:text-[#9a8c98]
          `}
        />
      </div>
    </div>
  )
}

// Section Title Component
function SectionTitle({ subtitle, title, description, align = "center" }: { 
  subtitle?: string
  title?: string
  description?: string
  align?: "left" | "center" | "right"
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }
  
  return (
    <div className={`flex flex-col gap-3 ${alignmentClasses[align]}`}>
      {subtitle && (
        <span className="font-josefin font-300 text-sm text-[#c9a227] tracking-[0.2em] uppercase">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="font-josefin font-600 text-4xl text-[#1a1c2c] leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="font-josefin font-300 text-base text-[#4a4e69] max-w-xl mt-2">
          {description}
        </p>
      )}
      <div className={`w-16 h-0.5 bg-[#c9a227] mt-2 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`} />
    </div>
  )
}

// ============================================
// PAGE SECTIONS
// ============================================

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Design System", href: "#design-system" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ]
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-[0_2px_8px_rgba(26,28,44,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a1c2c] rounded-[4px] flex items-center justify-center">
            <Scale className="w-6 h-6 text-[#c9a227]" />
          </div>
          <div>
            <span className="font-josefin font-600 text-xl text-[#1a1c2c] block leading-none">
              MP DIÁRIO
            </span>
            <span className="font-josefin font-100 text-xs text-[#4a4e69] tracking-widest">
              DESIGN SYSTEM
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-josefin font-300 text-sm text-[#4a4e69] hover:text-[#c9a227] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Fale Conosco
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#1a1c2c]" /> : <Menu className="w-6 h-6 text-[#1a1c2c]" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e4df] px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-josefin font-300 text-base text-[#4a4e69] py-3 border-b border-[#e8e4df]"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" className="w-full mt-4">
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-[#f8f5f0] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 rounded-full">
              <Gavel className="w-4 h-4 text-[#c9a227]" />
              <span className="font-josefin font-300 text-sm text-[#c9a227]">
                Design System v1.0
              </span>
            </div>
            
            <h1 className="font-josefin font-600 text-5xl md:text-6xl text-[#1a1c2c] leading-[1.1]">
              MP Diário
              <span className="text-[#c9a227]"> Design System</span>
            </h1>
            
            <p className="font-josefin font-300 text-lg text-[#4a4e69] max-w-md">
              Primeiro protótipo do novo design system jurídico. 
              Explore os componentes, cores e ícones propostos.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" icon={ArrowRight} iconPosition="right">
                Ver Componentes
              </Button>
              <Button variant="secondary" icon={FileText}>
                Baixar Spec
              </Button>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1c2c] to-[#2d3142] rounded-[16px] p-8 flex items-center justify-center">
              <div className="text-center">
                <Scale className="w-32 h-32 text-[#c9a227] mx-auto mb-6" />
                <h3 className="font-josefin font-400 text-2xl text-white mb-2">
                  Justitia Fiat
                </h3>
                <p className="font-josefin font-100 text-sm text-white/60">
                  "Que a justiça seja feita"
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c9a227]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a1c2c]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Design System Showcase
function DesignSystemShowcase() {
  return (
    <section id="design-system" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle 
            subtitle="DESIGN SYSTEM"
            title="Componentes & Cores"
            description="Primeira versão do design system para o MP Diário."
          />
        </div>
        
        {/* Buttons Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
              Botões - Primários
            </h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" icon={ArrowRight}>Com Ícone</Button>
              <Button variant="primary" icon={ArrowRight} iconPosition="left">Ícone Esquerda</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
              Botões - Secundários
            </h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" icon={ArrowRight}>Com Ícone</Button>
              <Button variant="secondary" icon={ArrowRight} iconPosition="left">Ícone Esquerda</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
              Botões - Outline & Ghost
            </h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button variant="outline" size="sm">Outline SM</Button>
              <Button variant="outline" size="md">Outline MD</Button>
              <Button variant="outline" size="lg">Outline LG</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="ghost" size="sm">Ghost SM</Button>
              <Button variant="ghost" size="md">Ghost MD</Button>
              <Button variant="ghost" size="lg">Ghost LG</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
              Paleta de Cores
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-full h-16 bg-[#1a1c2c] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Midnight</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#2d3142] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Navy</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#c9a227] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Gold</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#f8f5f0] rounded-[8px] mb-2 border border-[#e8e4df]" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Cream</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#4a4e69] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Slate</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#9a8c98] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">Warm Gray</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Typography */}
        <Card className="mb-16">
          <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
            Tipografia - Josefin Sans
          </h3>
          <div className="space-y-6">
            <div>
              <span className="font-josefin font-100 text-sm text-[#9a8c98]">Weight 100 - Thin</span>
              <p className="font-josefin font-100 text-3xl text-[#1a1c2c]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-300 text-sm text-[#9a8c98]">Weight 300 - Light</span>
              <p className="font-josefin font-300 text-3xl text-[#1a1c2c]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-400 text-sm text-[#9a8c98]">Weight 400 - Regular</span>
              <p className="font-josefin font-400 text-3xl text-[#1a1c2c]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-600 text-sm text-[#9a8c98]">Weight 600 - Semi-Bold</span>
              <p className="font-josefin font-600 text-3xl text-[#1a1c2c]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Icons Showcase */}
        <Card>
          <h3 className="font-josefin font-600 text-lg text-[#1a1c2c] mb-6">
            Biblioteca de Ícones - Lucide React
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { Icon: Scale, name: "Scale" },
              { Icon: FileText, name: "FileText" },
              { Icon: Mail, name: "Mail" },
              { Icon: Phone, name: "Phone" },
              { Icon: MapPin, name: "MapPin" },
              { Icon: User, name: "User" },
              { Icon: Search, name: "Search" },
              { Icon: Menu, name: "Menu" },
              { Icon: Calendar, name: "Calendar" },
              { Icon: Clock, name: "Clock" },
              { Icon: CheckCircle, name: "CheckCircle" },
              { Icon: AlertCircle, name: "AlertCircle" },
              { Icon: ArrowRight, name: "ArrowRight" },
              { Icon: ArrowLeft, name: "ArrowLeft" },
              { Icon: ChevronRight, name: "ChevronRight" },
              { Icon: Linkedin, name: "Linkedin" },
              { Icon: Instagram, name: "Instagram" },
              { Icon: Facebook, name: "Facebook" },
              { Icon: Gavel, name: "Gavel" },
              { Icon: BookOpen, name: "BookOpen" },
              { Icon: Briefcase, name: "Briefcase" },
              { Icon: X, name: "X" },
            ].map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 p-4 border border-[#e8e4df] rounded-[8px] hover:border-[#c9a227] hover:shadow-[0_2px_8px_rgba(26,28,44,0.06)] transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-6 h-6 text-[#1a1c2c]" />
                <span className="font-josefin font-100 text-xs text-[#4a4e69]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Direito Empresarial",
      description: "Consultoria completa para empresas, desde a constituição até operações complexas.",
    },
    {
      icon: Scale,
      title: "Recuperação Judicial",
      description: "Assessoria especializada em processos de recuperação judicial e extrajudicial.",
    },
    {
      icon: Briefcase,
      title: "Direito Falimentar",
      description: "Atuação em processos de falência, com experiência em gestão de ativos.",
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração, revisão e negociação de contratos comerciais e societários.",
    },
    {
      icon: User,
      title: "Consultoria Estratégica",
      description: "Orientação jurídica estratégica para tomada de decisões corporativas.",
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Implementação de programas de conformidade e governança corporativa.",
    },
  ]
  
  return (
    <section id="servicos" className="py-20 bg-[#f8f5f0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle 
            subtitle="SERVIÇOS"
            title="Áreas de Atuação"
            description="Especialidades jurídicas para o ambiente corporativo moderno."
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} variant="hover" className="group">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-[8px] flex items-center justify-center mb-4 group-hover:bg-[#c9a227] transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#c9a227] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-josefin font-600 text-xl text-[#1a1c2c] mb-3">
                {service.title}
              </h3>
              <p className="font-josefin font-300 text-[#4a4e69] leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 mt-4 font-josefin font-400 text-sm text-[#c9a227] hover:gap-3 transition-all duration-200"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contato" className="py-20 bg-[#1a1c2c]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <SectionTitle 
              subtitle="CONTATO"
              title="Vamos resolver seu caso?"
              description="Entre em contato conosco para uma consultoria jurídica especializada."
              align="left"
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-[8px] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Endereço</p>
                  <p className="font-josefin font-400 text-white">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-[8px] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Telefone</p>
                  <p className="font-josefin font-400 text-white">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-[8px] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Email</p>
                  <p className="font-josefin font-400 text-white">contato@mpdiario.com.br</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-[8px] flex items-center justify-center hover:bg-[#c9a227] transition-colors duration-200">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-[8px] flex items-center justify-center hover:bg-[#c9a227] transition-colors duration-200">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-[8px] flex items-center justify-center hover:bg-[#c9a227] transition-colors duration-200">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Form */}
          <Card className="bg-white">
            <form className="space-y-4">
              <Input label="Nome Completo" placeholder="Seu nome" icon={User} />
              <Input label="Email" placeholder="seu@email.com" type="email" icon={Mail} />
              <Input label="Telefone" placeholder="(11) 99999-9999" type="tel" icon={Phone} />
              
              <div className="flex flex-col gap-2">
                <label className="font-josefin font-300 text-sm text-[#4a4e69] tracking-wide">
                  Mensagem
                </label>
                <textarea
                  placeholder="Descreva seu caso..."
                  rows={4}
                  className="w-full px-4 py-3 font-josefin font-300 text-base bg-white border border-[#e8e4df] rounded-[4px] outline-none transition-all duration-200 focus:border-[#c9a227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)] placeholder:text-[#9a8c98] resize-none"
                />
              </div>
              
              <Button variant="primary" className="w-full" icon={ArrowRight} iconPosition="right">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#1a1c2c] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c9a227] rounded-[4px] flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#1a1c2c]" />
              </div>
              <div>
                <span className="font-josefin font-600 text-xl text-white block leading-none">
                  MP DIÁRIO
                </span>
                <span className="font-josefin font-100 text-xs text-white/60 tracking-widest">
                  DESIGN SYSTEM
                </span>
              </div>
            </div>
            <p className="font-josefin font-300 text-white/60 max-w-sm">
              Primeira versão do design system jurídico. 
              Implementado com React + Tailwind (como Lovable).
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-josefin font-600 text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Home", "Design System", "Serviços", "Sobre", "Contato"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-josefin font-300 text-white/60 hover:text-[#c9a227] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Areas */}
          <div>
            <h4 className="font-josefin font-600 text-white mb-4">Áreas</h4>
            <ul className="space-y-2">
              {["Direito Empresarial", "Recuperação Judicial", "Direito Falimentar", "Contratos", "Compliance"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-josefin font-300 text-white/60 hover:text-[#c9a227] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-josefin font-100 text-sm text-white/40">
            © 2026 MP Diário. Primeira versão do Design System.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-josefin font-100 text-sm text-white/40 hover:text-white/60">
              Privacidade
            </a>
            <a href="#" className="font-josefin font-100 text-sm text-white/40 hover:text-white/60">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN APP
// ============================================

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DesignSystemShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
