import React, { useEffect, useRef, useState } from 'react'

const AnimatedShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Configuração dos Meteoros
    const meteors: {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }[] = []
    const stars: { x: number; y: number; size: number; opacity: number }[] = []

    // Criar estrelas estáticas (fundo)
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random()
      })
    }

    const createMeteor = () => {
      const x = Math.random() * canvas.width + canvas.width / 2 // Começa mais à direita
      const y = Math.random() * canvas.height * 0.1 // Começa no topo
      meteors.push({
        x,
        y,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: 1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar estrelas (fundo)
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Desenhar e atualizar meteoros
      meteors.forEach((meteor, index) => {
        // Rastro do meteoro (gradiente)
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.length,
          meteor.y + meteor.length
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(meteor.x - meteor.length, meteor.y + meteor.length) // Movimento diagonal
        ctx.stroke()

        // Mover
        meteor.x -= meteor.speed
        meteor.y += meteor.speed
        meteor.opacity -= 0.01

        // Remover se sair da tela ou desaparecer
        if (meteor.opacity <= 0 || meteor.x < 0 || meteor.y > canvas.height) {
          meteors.splice(index, 1)
        }
      })

      // Criar novos meteoros aleatoriamente
      if (Math.random() < 0.05) {
        // Ajuste a frequência (0.05 = 5% de chance por frame)
        createMeteor()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default AnimatedShaderBackground
