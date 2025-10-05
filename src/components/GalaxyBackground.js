import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let stars = [];
    let numStars = 400;
    let galaxyRotation = 0;

    const colors = [
      "rgba(255,255,255,0.9)",
      "rgba(0,180,255,0.9)",
      "rgba(160,100,255,0.9)",
      "rgba(100,200,255,0.9)",
    ];

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.radius = Math.random() * 2;
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * Math.min(width, height) * 0.6;
        this.speed = 0.0005 + Math.random() * 0.001;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.speed;
      }

      draw() {
        const x = width / 2 + Math.cos(this.angle + galaxyRotation) * this.distance;
        const y = height / 2 + Math.sin(this.angle + galaxyRotation) * this.distance;

        const size = this.radius * (1 + Math.sin(Date.now() / 800 + this.distance / 300) * 0.5);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);

      galaxyRotation += 0.0005;

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    initStars();
    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default GalaxyBackground;
