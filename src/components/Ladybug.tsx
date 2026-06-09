"use client";
import { useEffect, useRef } from "react";

export default function Ladybug() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Dotted trail — stores recent positions
    const trail: { x: number; y: number; opacity: number }[] = [];

    // Ladybug state
    let x = 100;
    let y = 200;
    let angle = 0;
    let targetAngle = 0;
    let speed = 1.2;
    let wanderTimer = 0;
    let legPhase = 0;

    function newTarget() {
      targetAngle = Math.random() * Math.PI * 2;
      wanderTimer = 80 + Math.random() * 120;
    }

    newTarget();

    function drawLadybug(cx: number, cy: number, a: number, phase: number) {
      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.rotate(a + Math.PI / 2);

      const s = 1;

      // Shadow
      ctx!.save();
      ctx!.translate(3, 3);
      ctx!.globalAlpha = 0.15;
      ctx!.beginPath();
      ctx!.ellipse(0, 2 * s, 9 * s, 12 * s, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "#000";
      ctx!.fill();
      ctx!.restore();

      // Legs (3 per side)
      ctx!.strokeStyle = "#1a1a1a";
      ctx!.lineWidth = 1.2;
      const legOffsets = [-6, 0, 6];
      for (let i = 0; i < 3; i++) {
        const swing = Math.sin(phase + i * 1.2) * 4;
        // left legs
        ctx!.beginPath();
        ctx!.moveTo(-7 * s, legOffsets[i] * s);
        ctx!.lineTo(-14 * s + swing, (legOffsets[i] + 5) * s);
        ctx!.stroke();
        // right legs
        ctx!.beginPath();
        ctx!.moveTo(7 * s, legOffsets[i] * s);
        ctx!.lineTo(14 * s - swing, (legOffsets[i] + 5) * s);
        ctx!.stroke();
      }

      // Body (red ellipse)
      ctx!.beginPath();
      ctx!.ellipse(0, 2 * s, 9 * s, 12 * s, 0, 0, Math.PI * 2);
      const bodyGrad = ctx!.createRadialGradient(-3 * s, -4 * s, 1, 0, 2 * s, 14 * s);
      bodyGrad.addColorStop(0, "#ff6b6b");
      bodyGrad.addColorStop(0.5, "#e63946");
      bodyGrad.addColorStop(1, "#9b1c1c");
      ctx!.fillStyle = bodyGrad;
      ctx!.fill();

      // Center line
      ctx!.beginPath();
      ctx!.moveTo(0, -10 * s);
      ctx!.lineTo(0, 14 * s);
      ctx!.strokeStyle = "#1a0000";
      ctx!.lineWidth = 1.5;
      ctx!.stroke();

      // Spots
      const spots = [
        { x: -4, y: -4, r: 2.8 },
        { x: 4, y: -4, r: 2.8 },
        { x: -5, y: 3, r: 2.5 },
        { x: 5, y: 3, r: 2.5 },
        { x: -3, y: 10, r: 2 },
        { x: 3, y: 10, r: 2 },
      ];
      ctx!.fillStyle = "#1a0000";
      for (const spot of spots) {
        ctx!.beginPath();
        ctx!.arc(spot.x * s, spot.y * s, spot.r * s, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Head
      ctx!.beginPath();
      ctx!.ellipse(0, -11 * s, 6 * s, 5 * s, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "#1a0000";
      ctx!.fill();

      // Eyes
      ctx!.fillStyle = "#ffffff";
      ctx!.beginPath();
      ctx!.arc(-2.5 * s, -12 * s, 1.5 * s, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(2.5 * s, -12 * s, 1.5 * s, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = "#000";
      ctx!.beginPath();
      ctx!.arc(-2.5 * s, -12 * s, 0.7 * s, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(2.5 * s, -12 * s, 0.7 * s, 0, Math.PI * 2);
      ctx!.fill();

      // Antennae
      ctx!.strokeStyle = "#1a0000";
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(-2 * s, -15 * s);
      ctx!.quadraticCurveTo(-8 * s, -22 * s, -6 * s, -26 * s);
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.moveTo(2 * s, -15 * s);
      ctx!.quadraticCurveTo(8 * s, -22 * s, 6 * s, -26 * s);
      ctx!.stroke();
      // antenna tips
      ctx!.fillStyle = "#1a0000";
      ctx!.beginPath();
      ctx!.arc(-6 * s, -26 * s, 1.5 * s, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(6 * s, -26 * s, 1.5 * s, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.restore();
    }

    function drawDot(tx: number, ty: number, opacity: number) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.beginPath();
      ctx!.arc(tx, ty, 2, 0, Math.PI * 2);
      ctx!.fillStyle = "#8B1A1A";
      ctx!.fill();
      ctx!.restore();
    }

    let footprintTimer = 0;
    let frame = 0;

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Move ladybug
      wanderTimer--;
      if (wanderTimer <= 0) newTarget();

      // Smoothly rotate toward target
      let diff = targetAngle - angle;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      angle += diff * 0.04;

      // Move forward
      x += Math.cos(angle) * speed;
      y += Math.sin(angle) * speed;

      // Bounce off edges with random escape to avoid corner trapping
      let bounced = false;
      if (x < 20 || x > canvas!.width - 20) {
        targetAngle = Math.PI - angle + (Math.random() - 0.5) * 1.0;
        wanderTimer = 80;
        bounced = true;
      }
      if (y < 20 || y > canvas!.height - 20) {
        targetAngle = -angle + (Math.random() - 0.5) * 1.0;
        wanderTimer = 80;
        bounced = true;
      }
      // If stuck in corner, fire a completely random angle pointing inward
      if (x < 20 && y < 20) targetAngle = Math.random() * (Math.PI / 2) + 0;
      if (x > canvas!.width - 20 && y < 20) targetAngle = Math.random() * (Math.PI / 2) + Math.PI / 2;
      if (x < 20 && y > canvas!.height - 20) targetAngle = Math.random() * (Math.PI / 2) - Math.PI / 2;
      if (x > canvas!.width - 20 && y > canvas!.height - 20) targetAngle = Math.random() * (Math.PI / 2) + Math.PI;
      x = Math.max(20, Math.min(canvas!.width - 20, x));
      y = Math.max(20, Math.min(canvas!.height - 20, y));

      // Bias ladybug downward — gently nudge target angle toward downward
      targetAngle += (Math.PI / 2 - targetAngle) * 0.002;

      // Add dot every 10 frames
      footprintTimer++;
      if (footprintTimer > 10) {
        trail.push({ x, y, opacity: 0.8 });
        footprintTimer = 0;
      }

      // Fade dots, keep max 80
      for (const t of trail) t.opacity -= 0.003;
      while (trail.length > 80) trail.shift();

      // Draw trail dots
      for (const t of trail) {
        if (t.opacity > 0) drawDot(t.x, t.y, t.opacity);
      }

      // Animate legs
      legPhase += 0.2;

      // Draw ladybug
      drawLadybug(x, y, angle, legPhase);

      frame++;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}