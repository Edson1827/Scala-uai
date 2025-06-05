import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building,
  Heart,
  Rocket,
  MessageCircle,
  Phone,
  LineChart,
  PieChart,
  Activity,
  Percent,
  Plus,
  Check,
  Mail
} from 'lucide-react'
import './App.css'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Scala Uai" className="h-8 md:h-10 w-auto mr-3" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('precos')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Dark mode toggle for desktop */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('precos')}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 w-full"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Gestão de Tráfego Pago que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Gera Resultados</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Aumente suas vendas em até 300% com nossa gestão especializada em Facebook e Google Ads. 
            Resultados comprovados em 30 dias ou seu dinheiro de volta.
          </p>
          
          {/* Métricas de destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">300%</div>
              <div className="text-gray-600 dark:text-gray-300">Aumento médio em vendas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">127+</div>
              <div className="text-gray-600 dark:text-gray-300">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3.5x</div>
              <div className="text-gray-600 dark:text-gray-300">ROI médio</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('calculadora').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Meu ROI
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4"
            >
              Ver Planos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Como Funciona
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Analisamos seu negócio, concorrência e identificamos as melhores oportunidades de crescimento.",
      icon: Target,
      duration: "1-2 dias"
    },
    {
      number: "02", 
      title: "Estratégia Personalizada",
      description: "Criamos uma estratégia única para seu negócio com campanhas otimizadas para máximo ROI.",
      icon: BarChart3,
      duration: "3-5 dias"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Configuramos todas as campanhas, pixels de rastreamento e sistemas de automação.",
      icon: Zap,
      duration: "5-7 dias"
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description: "Monitoramos e otimizamos suas campanhas 24/7 para garantir os melhores resultados.",
      icon: TrendingUp,
      duration: "Contínuo"
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nosso processo comprovado para transformar seu investimento em anúncios em resultados reais
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600 rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{step.duration}</div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline number */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-blue-600">{step.number}</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Calculadora ROI
const ROICalculator = () => {
  const [faturamento, setFaturamento] = useState('')
  const [investimento, setInvestimento] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularROI = () => {
    const fat = parseFloat(faturamento.replace(/\D/g, ''))
    const inv = parseFloat(investimento.replace(/\D/g, ''))
    
    if (fat && inv) {
      const roiAtual = (fat / inv) * 100
      const potencialCrescimento = fat * 3 // 300% de aumento
      const novoROI = (potencialCrescimento / inv) * 100
      const aumentoFaturamento = potencialCrescimento - fat
      
      setResultado({
        roiAtual: roiAtual.toFixed(0),
        novoROI: novoROI.toFixed(0),
        aumentoFaturamento: aumentoFaturamento.toLocaleString('pt-BR'),
        potencialCrescimento: potencialCrescimento.toLocaleString('pt-BR')
      })
    }
  }

  const formatCurrency = (value) => {
    const numericValue = value.replace(/\D/g, '')
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calculadora de ROI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubra o potencial de crescimento do seu negócio
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="faturamento" className="text-lg font-semibold">
                    Faturamento Mensal Atual
                  </Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                    <Input
                      id="faturamento"
                      type="text"
                      placeholder="100.000"
                      value={faturamento}
                      onChange={(e) => setFaturamento(formatCurrency(e.target.value))}
                      className="pl-10 text-lg h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="investimento" className="text-lg font-semibold">
                    Investimento Mensal em Ads
                  </Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                    <Input
                      id="investimento"
                      type="text"
                      placeholder="20.000"
                      value={investimento}
                      onChange={(e) => setInvestimento(formatCurrency(e.target.value))}
                      className="pl-10 text-lg h-12"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calcularROI}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg h-12"
                  disabled={!faturamento || !investimento}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Potencial de Crescimento
                </Button>
              </div>

              {resultado && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Seu Potencial de Crescimento
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">ROI Atual:</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{resultado.roiAtual}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">ROI com Scala Uai:</span>
                      <span className="text-xl font-bold text-green-600">{resultado.novoROI}%</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Aumento no Faturamento:</span>
                        <span className="text-xl font-bold text-green-600">+R$ {resultado.aumentoFaturamento}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Novo Faturamento:</span>
                        <span className="text-2xl font-bold text-green-600">R$ {resultado.potencialCrescimento}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    Quero Estes Resultados
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente Modal de Upsells
const UpsellModal = ({ isOpen, onClose, selectedPlan, onConfirm }) => {
  const [selectedUpsells, setSelectedUpsells] = useState([])

  const upsellsByPlan = {
    starter: [
      { id: 'vendas-avancada', name: 'Campanha de Vendas Avançada', price: 97, featured: true, description: 'Campanha especializada para maximizar conversões' },
      { id: 'criativo-premium', name: 'Criativo Premium', price: 67, featured: false, description: 'Criativos profissionais de alta conversão' },
      { id: 'relatorios-semanais', name: 'Relatórios Semanais', price: 47, featured: false, description: 'Relatórios detalhados toda semana' }
    ],
    aceleracao: [
      { id: 'funil-basico', name: 'Funil de Vendas Básico', price: 197, featured: true, description: 'Sistema completo de funil de vendas' },
      { id: 'campanha-marca', name: 'Campanha de Marca Premium', price: 127, featured: false, description: 'Campanha focada em branding e autoridade' },
      { id: 'consultoria-mensal', name: 'Consultoria Estratégica Mensal', price: 297, featured: false, description: 'Consultoria personalizada com especialista' }
    ],
    crescimento: [
      { id: 'automacao-avancada', name: 'Automação de Marketing Avançada', price: 397, featured: true, description: 'Automação completa do funil de vendas' },
      { id: 'multi-plataforma', name: 'Campanha Multi-Plataforma', price: 297, featured: false, description: 'Expansão para TikTok, LinkedIn e YouTube' },
      { id: 'consultoria-vip', name: 'Consultoria Semanal VIP', price: 497, featured: false, description: 'Acesso direto ao CEO e consultoria semanal' }
    ]
  }

  const currentUpsells = upsellsByPlan[selectedPlan] || []

  const toggleUpsell = (upsellId) => {
    setSelectedUpsells(prev => 
      prev.includes(upsellId) 
        ? prev.filter(id => id !== upsellId)
        : [...prev, upsellId]
    )
  }

  const calculateTotal = () => {
    return currentUpsells
      .filter(upsell => selectedUpsells.includes(upsell.id))
      .reduce((total, upsell) => total + upsell.price, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Potencialize Seus Resultados
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Adicione estes serviços para acelerar ainda mais seus resultados:
          </p>

          <div className="space-y-4 mb-6">
            {currentUpsells.map((upsell) => (
              <div 
                key={upsell.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  upsell.featured 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 scale-105' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                } ${
                  selectedUpsells.includes(upsell.id) 
                    ? 'ring-2 ring-green-500' 
                    : ''
                }`}
                onClick={() => toggleUpsell(upsell.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                        selectedUpsells.includes(upsell.id) 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedUpsells.includes(upsell.id) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                          {upsell.name}
                          {upsell.featured && (
                            <Badge className="ml-2 bg-green-500">MAIS POPULAR</Badge>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {upsell.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      +R$ {upsell.price}/mês
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedUpsells.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total dos Upsells:</span>
                <span className="text-xl font-bold text-green-600">
                  +R$ {calculateTotal()}/mês
                </span>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Continuar sem Upsells
            </Button>
            <Button 
              onClick={() => onConfirm(selectedUpsells)}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Confirmar Seleção
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente Planos de Preços
const PricingSection = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      label: 'Básico',
      price: 197,
      buttonText: 'Garantir Resultados',
      features: [
        '1 campanha ativa',
        '2 criativos por mês',
        'Configuração inicial',
        'Relatórios mensais',
        'Suporte por WhatsApp'
      ]
    },
    {
      id: 'aceleracao',
      name: 'Aceleração',
      label: 'Recomendado',
      price: 397,
      buttonText: 'Acelerar Crescimento',
      popular: true,
      features: [
        '2 campanhas ativas',
        '4 criativos por mês',
        'Otimização de anúncios',
        'Estratégia de conversão',
        'Relatórios mensais',
        'Suporte por WhatsApp'
      ]
    },
    {
      id: 'crescimento',
      name: 'Crescimento Exponencial',
      label: 'Premium',
      price: 797,
      buttonText: 'Escalar Negócio',
      features: [
        '4 campanhas ativas',
        '5 criativos por mês',
        'Sistema completo de funil',
        'Estratégia omnichannel',
        'Relatórios quinzenais',
        'Suporte prioritário'
      ]
    }
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
    setShowUpsellModal(true)
  }

  const handleUpsellConfirm = (selectedUpsells) => {
    // Aqui seria a integração com o checkout Yamp
    console.log('Plano selecionado:', selectedPlan)
    console.log('Upsells selecionados:', selectedUpsells)
    setShowUpsellModal(false)
    alert('Redirecionando para checkout Yamp...')
  }

  return (
    <section id="precos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Planos flexíveis para empresas de todos os tamanhos. Taxa de serviço de 8% sobre investimento em anúncios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    {plan.label}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  {!plan.popular && (
                    <Badge variant="outline" className="text-xs">
                      {plan.label}
                    </Badge>
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Todos os planos incluem garantia de 30 dias ou seu dinheiro de volta
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Garantia 30 dias
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Suporte especializado
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              Resultados comprovados
            </div>
          </div>
        </div>
      </div>

      <UpsellModal 
        isOpen={showUpsellModal}
        onClose={() => setShowUpsellModal(false)}
        selectedPlan={selectedPlan}
        onConfirm={handleUpsellConfirm}
      />
    </section>
  )
}

// Componente Depoimentos
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "E-commerce Fashion",
      role: "CEO",
      content: "Em 3 meses, nosso faturamento aumentou 280%. A equipe da Scala Uai é excepcional e os resultados falam por si só.",
      rating: 5,
      results: "280% aumento em vendas"
    },
    {
      name: "Maria Santos",
      company: "Clínica Odontológica",
      role: "Proprietária",
      content: "Conseguimos 150 novos pacientes em 60 dias. O ROI foi incrível e o suporte é sempre muito atencioso.",
      rating: 5,
      results: "150 novos pacientes"
    },
    {
      name: "João Oliveira",
      company: "Restaurante Gourmet",
      role: "Sócio",
      content: "Triplicamos nossos pedidos online. A estratégia foi perfeita para nosso negócio local.",
      rating: 5,
      results: "300% mais pedidos"
    },
    {
      name: "Ana Costa",
      company: "Loja de Cosméticos",
      role: "Gerente",
      content: "ROI de 450% no primeiro mês. Nunca imaginei que os anúncios pudessem ser tão eficazes.",
      rating: 5,
      results: "450% ROI"
    },
    {
      name: "Pedro Almeida",
      company: "Academia Fitness",
      role: "Diretor",
      content: "200 novos alunos em 45 dias. A Scala Uai entende realmente do mercado fitness.",
      rating: 5,
      results: "200 novos alunos"
    },
    {
      name: "Lucia Ferreira",
      company: "Escola de Idiomas",
      role: "Coordenadora",
      content: "Aumentamos nossas matrículas em 320%. O investimento se pagou na primeira semana.",
      rating: 5,
      results: "320% mais matrículas"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Resultados reais de empresas que transformaram seus negócios
          </p>
        </div>

        <div className="relative">
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="mb-6">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                  </div>
                </div>
                
                <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                  {testimonials[currentTestimonial].results}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronUp className="h-6 w-6 rotate-[-90deg]" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown className="h-6 w-6 rotate-[-90deg]" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Comparação
const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Preço Mensal",
      traditional: "R$ 1.500 - R$ 5.000",
      scalauai: "A partir de R$ 197",
      advantage: "scalauai"
    },
    {
      feature: "Setup Inicial",
      traditional: "R$ 2.000 - R$ 8.000",
      scalauai: "Incluído no plano",
      advantage: "scalauai"
    },
    {
      feature: "Tempo de Implementação",
      traditional: "15-30 dias",
      scalauai: "5-7 dias",
      advantage: "scalauai"
    },
    {
      feature: "Relatórios",
      traditional: "Mensais básicos",
      scalauai: "Detalhados + Dashboard",
      advantage: "scalauai"
    },
    {
      feature: "Suporte",
      traditional: "Email (48h)",
      scalauai: "WhatsApp direto",
      advantage: "scalauai"
    },
    {
      feature: "Otimização",
      traditional: "Manual esporádica",
      scalauai: "Automática 24/7",
      advantage: "scalauai"
    },
    {
      feature: "Garantia",
      traditional: "Sem garantia",
      scalauai: "30 dias ou dinheiro de volta",
      advantage: "scalauai"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por Que Escolher Scala Uai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Compare nossos diferenciais com agências tradicionais
          </p>
        </div>

        <Card className="shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Características</th>
                  <th className="px-6 py-4 text-center font-semibold">Agências Tradicionais</th>
                  <th className="px-6 py-4 text-center font-semibold">Scala Uai</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      {item.traditional}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-green-600 font-semibold mr-2">
                          {item.scalauai}
                        </span>
                        {item.advantage === 'scalauai' && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Enquanto agências tradicionais cobram a partir de R$ 1.500/mês para gestão, 
            nós cobramos a partir de R$ 197/mês com resultados superiores.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente FAQ
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "O que é taxa de serviço?",
      answer: "A taxa de serviço de 8% é aplicada sobre o valor investido em anúncios para cobrir os custos operacionais da plataforma e garantir a qualidade do serviço. Exemplo prático: Investimento em anúncios: R$ 1.000/mês, Taxa de serviço (8%): R$ 80/mês, Total cobrado: Plano escolhido + R$ 80."
    },
    {
      question: "O que é estratégia omnichannel?",
      answer: "Estratégia omnichannel é uma abordagem integrada que conecta todos os pontos de contato com o cliente, criando uma experiência unificada e consistente entre redes sociais, site, email e WhatsApp."
    },
    {
      question: "O que é ROAS?",
      answer: "ROAS (Return on Ad Spend) é a métrica que mostra quanto você ganha para cada real investido em anúncios. Por exemplo, ROAS 4:1 significa que para cada R$ 1 investido, você ganha R$ 4 de volta."
    },
    {
      question: "Quais plataformas de anúncios vocês trabalham?",
      answer: "Trabalhamos principalmente com Facebook Ads, Instagram Ads e Google Ads. No plano Crescimento Exponencial, também incluímos TikTok Ads, LinkedIn Ads e YouTube Ads."
    },
    {
      question: "Quanto tempo para ver os primeiros resultados?",
      answer: "Os primeiros resultados aparecem entre 7-14 dias. Resultados consistentes e otimizados geralmente são alcançados em 30 dias. Oferecemos garantia de 30 dias ou seu dinheiro de volta."
    },
    {
      question: "Vocês trabalham com que tipos de negócio?",
      answer: "Atendemos desde pequenos restaurantes até grandes empresas. Nossos especialistas adaptam as estratégias para e-commerce, serviços locais, clínicas, academias, escolas e muito mais."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte via WhatsApp direto com nossa equipe. No plano Starter e Aceleração é suporte padrão, no Crescimento Exponencial é suporte prioritário com resposta em até 2 horas."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar a qualquer momento sem multas ou taxas adicionais. Recomendamos pelo menos 60 dias para ver os resultados completos da estratégia."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Missão
const MissionSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Nossa Missão
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Nossa missão é aumentar a presença digital das empresas, atrair clientes, gerar engajamento ou vender mais. 
          Você escolhe por onde quer começar - atendemos desde o pequeno restaurante até as maiores empresas.
        </p>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Scala Uai" className="h-6 w-auto mr-3" />
              <span className="text-xl font-bold">Scala Uai</span>
            </div>
            <p className="text-gray-400 mb-4">
              Gestão e análise de tráfego pago para PMEs
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook Ads</li>
              <li>Google Ads</li>
              <li>Instagram Ads</li>
              <li>TikTok Ads</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nós</li>
              <li>Casos de Sucesso</li>
              <li>Blog</li>
              <li>Carreira</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <span className="block">Suporte:</span>
                <a 
                  href="mailto:suporte.tech@scalauai.com"
                  className="text-green-400 hover:text-green-300"
                >
                  suporte.tech@scalauai.com
                </a>
              </div>
              <div>
                <span className="block">WhatsApp:</span>
                <a 
                  href="https://wa.me/5511999999999"
                  className="text-green-400 hover:text-green-300"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Scala Uai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Botão WhatsApp Flutuante
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

// Componente Principal App Atualizado
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ROICalculator />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <MissionSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

