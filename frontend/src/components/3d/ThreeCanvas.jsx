import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeCanvas = ({ className = '' }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // 1. Scene Setup
        const scene = new THREE.Scene()

        // 2. Camera Setup
        const width = container.clientWidth || window.innerWidth
        const height = container.clientHeight || window.innerHeight
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        camera.position.z = 7

        // 3. WebGL Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        container.appendChild(renderer.domElement)

        // 4. 3D Objects
        // 4a. 3D Cyber Torus Knot (Wireframe + Glowing Points)
        const torusGeometry = new THREE.TorusKnotGeometry(1.5, 0.4, 120, 24)
        const torusMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B5CF6,
            roughness: 0.2,
            metalness: 0.8,
            wireframe: true,
            transparent: true,
            opacity: 0.85
        })
        const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial)
        scene.add(torusKnot)

        // 4b. Inner Glowing Core
        const coreGeo = new THREE.IcosahedronGeometry(0.8, 2)
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0xEC4899,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        })
        const coreMesh = new THREE.Mesh(coreGeo, coreMat)
        scene.add(coreMesh)

        // 4c. 3D Particle Cloud / Starfield
        const particleCount = 700
        const particleGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        const color1 = new THREE.Color(0x8B5CF6) // Purple
        const color2 = new THREE.Color(0x3B82F6) // Blue
        const color3 = new THREE.Color(0xEC4899) // Pink

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3
            // Distribute in a spherical radius
            const radius = 3.5 + Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi)

            // Random blended colors
            const mixedColor = Math.random() < 0.4 ? color1 : (Math.random() < 0.7 ? color2 : color3)
            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.035,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
        })
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
        scene.add(particleSystem)

        // 5. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)

        const pointLight1 = new THREE.PointLight(0x8B5CF6, 3, 20)
        pointLight1.position.set(4, 4, 4)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(0x3B82F6, 2.5, 20)
        pointLight2.position.set(-4, -4, 2)
        scene.add(pointLight2)

        // 6. Interactive Mouse Motion Tracking
        let targetX = 0
        let targetY = 0
        let currentX = 0
        let currentY = 0

        const handleMouseMove = (event) => {
            const windowHalfX = window.innerWidth / 2
            const windowHalfY = window.innerHeight / 2
            targetX = (event.clientX - windowHalfX) * 0.0015
            targetY = (event.clientY - windowHalfY) * 0.0015
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })

        // 7. Resize Handler
        const handleResize = () => {
            if (!container) return
            const newWidth = container.clientWidth || window.innerWidth
            const newHeight = container.clientHeight || window.innerHeight

            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()

            renderer.setSize(newWidth, newHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }

        window.addEventListener('resize', handleResize)

        // 8. Animation Loop
        let animationFrameId
        let clock = new THREE.Clock()

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            const elapsedTime = clock.getElapsedTime()

            // Smooth mouse interpolation (LERP)
            currentX += (targetX - currentX) * 0.05
            currentY += (targetY - currentY) * 0.05

            // Rotate 3D Torus Knot
            torusKnot.rotation.x = elapsedTime * 0.35 + currentY * 0.8
            torusKnot.rotation.y = elapsedTime * 0.45 + currentX * 0.8

            // Counter rotate Inner Core
            coreMesh.rotation.x = -elapsedTime * 0.2
            coreMesh.rotation.y = -elapsedTime * 0.3

            // Rotate particle cloud gently
            particleSystem.rotation.y = elapsedTime * 0.08 + currentX * 0.3
            particleSystem.rotation.x = currentY * 0.2

            // Subtle camera floating
            camera.position.x = Math.sin(elapsedTime * 0.3) * 0.2 + currentX * 0.5
            camera.position.y = Math.cos(elapsedTime * 0.3) * 0.2 - currentY * 0.5
            camera.lookAt(scene.position)

            renderer.render(scene, camera)
        }

        animate()

        // 9. Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)

            if (container && renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement)
            }

            torusGeometry.dispose()
            torusMaterial.dispose()
            coreGeo.dispose()
            coreMat.dispose()
            particleGeometry.dispose()
            particleMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div 
            ref={containerRef} 
            className={`pointer-events-none select-none overflow-hidden ${className}`}
            style={{ width: '100%', height: '100%' }}
        />
    )
}

export default ThreeCanvas
