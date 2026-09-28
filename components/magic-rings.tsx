'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./magic-rings.css";

const vertexShader = `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const fragmentShader = `
precision highp float;
uniform float uTime, uResolution, uOpacity;
uniform vec2 uSize;
uniform vec3 uColor, uColorTwo;
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uSize) / min(uSize.x, uSize.y);
  float t = uTime * 0.22;
  float glow = 0.0;
  vec3 color = vec3(0.0);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float radius = 0.23 + fi * 0.105 + mod(t + fi * 0.34, 3.4) / 3.4 * 0.09;
    float distanceToRing = abs(length(p) - radius);
    float ring = exp(-74.0 * distanceToRing) * (0.82 - fi * 0.055);
    vec3 ringColor = mix(uColor, uColorTwo, fi / 6.0);
    color += ringColor * ring;
    glow += ring;
  }
  float vignette = 1.0 - smoothstep(0.2, 1.08, length(p));
  color += mix(uColor, uColorTwo, 0.45) * 0.045 * vignette;
  gl_FragColor = vec4(color, clamp(glow * uOpacity, 0.0, 0.84));
}`;

interface MagicRingsProps {
  color?: string;
  colorTwo?: string;
  ringCount?: number;
  speed?: number;
  attenuation?: number;
  lineThickness?: number;
  baseRadius?: number;
  radiusStep?: number;
  scaleRate?: number;
  opacity?: number;
  blur?: number;
  noiseAmount?: number;
  rotation?: number;
  ringGap?: number;
  fadeIn?: number;
  fadeOut?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  hoverScale?: number;
  parallax?: number;
  clickBurst?: boolean;
}

export function MagicRings({
  color = "#37b7ff",
  colorTwo = "#9b5cff",
  opacity = 1,
}: MagicRingsProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;
    const uniforms = {
      uTime: { value: 0 }, uResolution: { value: 0 }, uSize: { value: new THREE.Vector2() },
      uColor: { value: new THREE.Color(color) }, uColorTwo: { value: new THREE.Color(colorTwo) },
      uOpacity: { value: opacity },
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(quad);
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(dpr);
      uniforms.uSize.value.set(mount.clientWidth * dpr, mount.clientHeight * dpr);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    let frame = 0;
    const animate = (time: number) => {
      uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
      material.dispose();
      quad.geometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [color, colorTwo, opacity]);

  return <div ref={mountRef} className="magic-rings-container" aria-hidden="true" />;
}
