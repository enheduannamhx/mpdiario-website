/**
 * MP DIÁRIO - Design System v2
 * Wireframe Minimalista + Acessibilidade
 */

import { useState } from "react"
import { 
  IcoBalanca, 
  IcoDocumento, 
  IcoEmail, 
  IcoTelefone, 
  IcoLocalizacao, 
  IcoUsuario,
  IcoMartelo,
  IcoLivro,
  IcoMaleta,
  IcoCalendario,
  IcoCheck,
  IcoSetaDireita,
  IcoLinkedin
} from "./components/icons"

// ============================================
// COMPONENTES - Design System v2
// ============================================

// Button com brilho e profundidade
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
  icon?: React.FC<{ size?: number; className?: string }>
  iconPosition?: "left" | "right"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-josefin font-normal transition-all duration-250 cursor-pointer rounded-[4px]"
  
  const variantClasses = {
    primary: `
      bg-[#1A1A1A] text-[#FFFFFF]
      hover:bg-[#2D2D2D]
      hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]
      active:shadow-[0_2px_4px_rgba(0,0,0,0.1)]
    `,
    secondary: `
      bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A]
      hover:bg-[#1A1A1A] hover:text-[#FFFFFF]
      hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
    `,
    outline: `
      bg-transparent border border-[#D4D4D4] text-[#4A4A4A]
      hover:border-[#1A1A1A] hover:text-[#1A1A1A]
    `,
    ghost: `
      bg-transparent text-[#4A4A4A]
      hover:text-[#C9A227] hover:bg-[#F5F2ED]
    `,
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  )
}

// Card com profundidade
function Card({ children, variant = "default", className = "" }: { 
  children: React.ReactNode
  variant?: "default" | "hover"
  className?: string
}) {
  return (
    <div
      className={`
        bg-white rounded-[8px] p-6
        border border-[#D4D4D4]
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]
        transition-all duration-250
        ${variant === "hover" ? "hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Input com foco acessível
function Input({ label, placeholder, type = "text", icon: Icon, className = "" }: { 
  label?: string
  placeholder?: string
  type?: string
  icon?: React.FC<{ size?: number; className?: string }>
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="font-josefin font-300 text-sm text-[#4A4A4A] tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3
            font-josefin font-300 text-base
            bg-white
            border border-[#D4D4D4] rounded-[4px]
            outline-none
            transition-all duration-200
            ${Icon ? "pl-12" : ""}
            focus:border-[#1A1A1A]
            focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]
            placeholder:text-[#8A8A8A]
          `}
        />
      </div>
    </div>
  )
}

// Section Title
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
        <span className="font-josefin font-300 text-sm text-[#C9A227] tracking-[0.2em] uppercase">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="font-josefin font-600 text-4xl text-[#1A1A1A] leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="font-josefin font-300 text-base text-[#4A4A4A] max-w-xl mt-2">
          {description}
        </p>
      )}
      <div className={`w-16 h-0.5 bg-[#C9A227] mt-2 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`} />
    </div>
  )
}

// ============================================
// SEÇÕES DA PÁGINA
// ============================================

// Header
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
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-[4px] flex items-center justify-center">
            <IcoBalanca size={24} className="text-[#C9A227]" />
          </div>
          <div>
            <span className="font-josefin font-600 text-xl text-[#1A1A1A] block leading-none">
              MP DIÁRIO
            </span>
            <span className="font-josefin font-100 text-xs text-[#4A4A4A] tracking-widest">
              DESIGN SYSTEM v2
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-josefin font-300 text-sm text-[#4A4A4A] hover:text-[#C9A227] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  )
}

// Hero
function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-[#F5F2ED] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 rounded-full">
              <IcoMartelo size={16} className="text-[#C9A227]" />
              <span className="font-josefin font-300 text-sm text-[#C9A227]">
                Design System v2
              </span>
            </div>
            
            <h1 className="font-josefin font-600 text-5xl md:text-6xl text-[#1A1A1A] leading-[1.1]">
              MP Diário
              <span className="text-[#C9A227]"> Design System</span>
            </h1>
            
            <p className="font-josefin font-300 text-lg text-[#4A4A4A] max-w-md">
              Primeiro protótipo do novo design system jurídico. 
              Explore os componentes, cores e ícones propostos.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" icon={IcoSetaDireita} iconPosition="right">
                Ver Componentes
              </Button>
              <Button variant="secondary" icon={IcoDocumento}>
                Baixar Spec
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-[16px] p-8 flex items-center justify-center">
              <div className="text-center">
                <IcoBalanca size={120} className="mx-auto mb-6 text-[#C9A227]" />
                <h3 className="font-josefin font-400 text-2xl text-white mb-2">
                  Justitia Fiat
                </h3>
                <p className="font-josefin font-100 text-sm text-white/60">
                  "Que a justiça seja feita"
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A227]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1A1A1A]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Design System Showcase
function DesignSystemShowcase() {
  const icons = [
    { Icon: IcoBalanca, name: "Balanca" },
    { Icon: IcoDocumento, name: "Documento" },
    { Icon: IcoEmail, name: "Email" },
    { Icon: IcoTelefone, name: "Telefone" },
    { Icon: IcoLocalizacao, name: "Localizacao" },
    { Icon: IcoUsuario, name: "Usuario" },
    { Icon: IcoMartelo, name: "Martelo" },
    { Icon: IcoLivro, name: "Livro" },
    { Icon: IcoMaleta, name: "Maleta" },
    { Icon: IcoCalendario, name: "Calendario" },
    { Icon: IcoCheck, name: "Check" },
    { Icon: IcoSetaDireita, name: "Seta" },
  ]
  
  return (
    <section id="design-system" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle 
            subtitle="DESIGN SYSTEM v2"
            title="Componentes & Cores"
            description="Primeira versão do design system para o MP Diário."
          />
        </div>
        
        {/* Buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
              Botões - Primários
            </h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" icon={IcoSetaDireita}>Com Ícone</Button>
              <Button variant="primary" icon={IcoSetaDireita} iconPosition="left">Ícone Esquerda</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
              Botões - Secundários
            </h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" icon={IcoSetaDireita}>Com Ícone</Button>
              <Button variant="secondary" icon={IcoSetaDireita} iconPosition="left">Ícone Esquerda</Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
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
            <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
              Paleta de Cores
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-full h-16 bg-[#1A1A1A] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Midnight</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#2D2D2D] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Navy</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#C9A227] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Gold</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#F5F2ED] rounded-[8px] mb-2 border border-[#D4D4D4]" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Cream</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#4A4A4A] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Slate</span>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-[#8A8A8A] rounded-[8px] mb-2" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">Gray</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Typography */}
        <Card className="mb-16">
          <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
            Tipografia - Josefin Sans
          </h3>
          <div className="space-y-6">
            <div>
              <span className="font-josefin font-100 text-sm text-[#8A8A8A]">Weight 100 - Thin</span>
              <p className="font-josefin font-100 text-3xl text-[#1A1A1A]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-300 text-sm text-[#8A8A8A]">Weight 300 - Light</span>
              <p className="font-josefin font-300 text-3xl text-[#1A1A1A]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-400 text-sm text-[#8A8A8A]">Weight 400 - Regular</span>
              <p className="font-josefin font-400 text-3xl text-[#1A1A1A]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <span className="font-josefin font-600 text-sm text-[#8A8A8A]">Weight 600 - Semi-Bold</span>
              <p className="font-josefin font-600 text-3xl text-[#1A1A1A]">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Icons Showcase */}
        <Card>
          <h3 className="font-josefin font-600 text-lg text-[#1A1A1A] mb-6">
            Biblioteca de Ícones - Wireframe Minimalista
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {icons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 p-4 border border-[#D4D4D4] rounded-[8px] hover:border-[#C9A227] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer"
              >
                <Icon size={32} className="text-[#1A1A1A]" />
                <span className="font-josefin font-100 text-xs text-[#4A4A4A]">
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

// Services
function Services() {
  const services = [
    { icon: IcoLivro, title: "Direito Empresarial", description: "Consultoria completa para empresas." },
    { icon: IcoBalanca, title: "Recuperação Judicial", description: "Assessoria especializada." },
    { icon: IcoMaleta, title: "Direito Falimentar", description: "Atuação em processos de falência." },
    { icon: IcoDocumento, title: "Contratos", description: "Elaboração e revisão de contratos." },
    { icon: IcoUsuario, title: "Consultoria Estratégica", description: "Orientação jurídica estratégica." },
    { icon: IcoCheck, title: "Compliance", description: "Programas de conformidade." },
  ]
  
  return (
    <section id="servicos" className="py-20 bg-[#F5F2ED]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle 
            subtitle="SERVIÇOS"
            title="Áreas de Atuação"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} variant="hover" className="group">
              <div className="w-12 h-12 bg-[#C9A227]/10 rounded-[8px] flex items-center justify-center mb-4 group-hover:bg-[#C9A227] transition-colors duration-300">
                <service.icon size={24} className="text-[#C9A227] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-josefin font-600 text-xl text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="font-josefin font-300 text-[#4A4A4A] leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  return (
    <section id="contato" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionTitle 
              subtitle="CONTATO"
              title="Vamos resolver seu caso?"
              description="Entre em contato conosco para uma consultoria jurídica especializada."
              align="left"
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A227]/20 rounded-[8px] flex items-center justify-center">
                  <IcoLocalizacao size={20} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Endereço</p>
                  <p className="font-josefin font-400 text-white">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A227]/20 rounded-[8px] flex items-center justify-center">
                  <IcoTelefone size={20} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Telefone</p>
                  <p className="font-josefin font-400 text-white">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A227]/20 rounded-[8px] flex items-center justify-center">
                  <IcoEmail size={20} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="font-josefin font-300 text-white/60 text-sm">Email</p>
                  <p className="font-josefin font-400 text-white">contato@mpdiario.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-[8px] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-200">
                <IcoLinkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <Card className="bg-white">
            <form className="space-y-4">
              <Input label="Nome Completo" placeholder="Seu nome" icon={IcoUsuario} />
              <Input label="Email" placeholder="seu@email.com" type="email" icon={IcoEmail} />
              <Input label="Telefone" placeholder="(11) 99999-9999" type="tel" icon={IcoTelefone} />
              
              <div className="flex flex-col gap-2">
                <label className="font-josefin font-300 text-sm text-[#4A4A4A] tracking-wide">
                  Mensagem
                </label>
                <textarea
                  placeholder="Descreva seu caso..."
                  rows={4}
                  className="w-full px-4 py-3 font-josefin font-300 text-base bg-white border border-[#D4D4D4] rounded-[4px] outline-none transition-all duration-200 focus:border-[#1A1A1A] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)] placeholder:text-[#8A8A8A] resize-none"
                />
              </div>
              
              <Button variant="primary" className="w-full" icon={IcoSetaDireita} iconPosition="right">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C9A227] rounded-[4px] flex items-center justify-center">
                <IcoBalanca size={24} className="text-[#1A1A1A]" />
              </div>
              <div>
                <span className="font-josefin font-600 text-xl text-white block leading-none">
                  MP DIÁRIO
                </span>
                <span className="font-josefin font-100 text-xs text-white/60 tracking-widest">
                  DESIGN SYSTEM v2
                </span>
              </div>
            </div>
            <p className="font-josefin font-300 text-white/60 max-w-sm">
              Primeira versão do design system jurídico. 
              Implementado com React + Tailwind.
            </p>
          </div>
          
          <div>
            <h4 className="font-josefin font-600 text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Home", "Design System", "Serviços", "Sobre", "Contato"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-josefin font-300 text-white/60 hover:text-[#C9A227] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-josefin font-600 text-white mb-4">Áreas</h4>
            <ul className="space-y-2">
              {["Direito Empresarial", "Recuperação Judicial", "Direito Falimentar", "Contratos", "Compliance"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-josefin font-300 text-white/60 hover:text-[#C9A227] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-josefin font-100 text-sm text-white/40">
            © 2026 MP Diário. Design System v2.
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

// App Principal
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;600&display=swap');
        
        .font-josefin {
          font-family: 'Josefin Sans', sans-serif;
        }
        
        .font-100 { font-weight: 100; }
        .font-300 { font-weight: 300; }
        .font-400 { font-weight: 400; }
        .font-600 { font-weight: 600; }
      `}</style>
      
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
