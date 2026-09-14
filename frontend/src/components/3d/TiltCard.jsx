import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const TiltCard = ({ children, className = '', maxTilt = 12, glare = true }) => {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    // Motion values for normalized cursor (-0.5 to 0.5)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics configuration for butter-smooth movement
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    // Calculate rotation angles
    const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt])

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div 
            ref={cardRef} 
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                animate={{
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full preserve-3d"
            >
                {children}

                {/* Specular 3D Glare effect */}
                {glare && isHovered && (
                    <div
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-80 z-30"
                    />
                )}
            </motion.div>
        </div>
    )
}

export default TiltCard
