'use client';

import { useEffect, useState } from 'react';

interface TunaLogoProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
}

export function TunaLogo({ size = 'medium', animated = true, className = '' }: TunaLogoProps) {
  const [waves, setWaves] = useState<Array<{ id: number; x: number; y: number; char: string }>>([]);
  
  const sizeConfig = {
    small: { width: 100, height: 100, strokeWidth: 1.5 },
    medium: { width: 150, height: 150, strokeWidth: 2 },
    large: { width: 200, height: 200, strokeWidth: 2.5 }
  };

  const config = sizeConfig[size];

  // 0과 1의 파도 생성
  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setWaves(prev => {
        const newWaves = [...prev];
        
        // 새로운 파도 추가 (랜덤하게)
        if (Math.random() > 0.7 && newWaves.length < 15) {
          newWaves.push({
            id: Date.now() + Math.random(),
            x: -20,
            y: Math.random() * config.height,
            char: Math.random() > 0.5 ? '1' : '0'
          });
        }
        
        // 파도 이동 및 오래된 것 제거
        return newWaves
          .map(wave => ({ ...wave, x: wave.x + 2 }))
          .filter(wave => wave.x < config.width + 20);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [animated, config.height, config.width]);

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={config.width}
        height={config.height}
        viewBox="0 0 200 200"
        className="relative z-10"
      >
        {/* 배경 파도 효과 */}
        {animated && (
          <>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* 파도 라인들 */}
            <g opacity="0.2">
              <path
                d="M0,100 Q50,80 100,100 T200,100"
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              >
                <animate
                  attributeName="d"
                  values="M0,100 Q50,80 100,100 T200,100;M0,100 Q50,120 100,100 T200,100;M0,100 Q50,80 100,100 T200,100"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M0,120 Q50,100 100,120 T200,120"
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              >
                <animate
                  attributeName="d"
                  values="M0,120 Q50,100 100,120 T200,120;M0,120 Q50,140 100,120 T200,120;M0,120 Q50,100 100,120 T200,120"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </>
        )}

        {/* 참치 SVG 패스 */}
        <g 
          transform="translate(100, 100)"
          className={animated ? 'animate-tuna-swim' : ''}
        >
          {/* 참치 몸체 */}
          <path
            d="M-40,0 C-40,-15 -20,-20 0,-20 C30,-20 50,-15 60,-5 L65,0 L60,5 C50,15 30,20 0,20 C-20,20 -40,15 -40,0 Z"
            fill="white"
            stroke="white"
            strokeWidth={config.strokeWidth}
            opacity="0.9"
          >
            {animated && (
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1,1; 1.02,0.98; 1,1"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </path>
          
          {/* 참치 꼬리 */}
          <path
            d="M55,0 L70,-8 L75,-5 L70,0 L75,5 L70,8 L55,0 Z"
            fill="white"
            stroke="white"
            strokeWidth={config.strokeWidth}
            opacity="0.9"
          >
            {animated && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 55 0; -10 55 0; 10 55 0; 0 55 0"
                dur="1s"
                repeatCount="indefinite"
              />
            )}
          </path>
          
          {/* 참치 지느러미 */}
          <path
            d="M0,-20 L-5,-30 L5,-30 Z"
            fill="white"
            stroke="white"
            strokeWidth={config.strokeWidth}
            opacity="0.8"
          />
          <path
            d="M0,20 L-5,30 L5,30 Z"
            fill="white"
            stroke="white"
            strokeWidth={config.strokeWidth}
            opacity="0.8"
          />
          
          {/* 참치 눈 */}
          <circle
            cx="-20"
            cy="-5"
            r="3"
            fill="black"
            opacity="0.8"
          >
            {animated && (
              <animate
                attributeName="r"
                values="3; 2; 3"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>
      </svg>

      {/* 0과 1 파도 텍스트 */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {waves.map(wave => (
            <span
              key={wave.id}
              className="absolute text-white font-mono text-xs opacity-30"
              style={{
                left: `${wave.x}px`,
                top: `${wave.y}px`,
                transform: 'translateY(0)',
                animation: 'float 2s ease-in-out infinite'
              }}
            >
              {wave.char}
            </span>
          ))}
        </div>
      )}

      {/* 바이너리 배경 파티클 */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 font-mono text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(-5px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}