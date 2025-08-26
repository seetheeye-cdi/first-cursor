import { TunaLogo } from './tuna-logo';

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 바이너리 코드 배경 애니메이션 */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-white animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      {/* 상단 네비게이션 */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight">
            참치상사
          </div>
          <div className="flex items-center space-x-8">
            <button className="text-sm font-mono hover:text-red-500 transition-colors">ABOUT</button>
            <button className="text-sm font-mono hover:text-red-500 transition-colors">CONTACT</button>
          </div>
        </div>
      </nav>

      {/* 중앙 참치 로고 - SVG 애니메이션 */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity duration-500">
        <TunaLogo size="large" animated={true} />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center space-y-12">


          {/* 핵심 메시지 */}
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              우리는 지금
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                한국에서 가장 중요한 문제
              </span>
              를 풀고 있습니다
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-gray-400 text-sm font-medium">
              <div className="hover:text-white transition-colors cursor-default">교육?</div>
              <div className="hover:text-white transition-colors cursor-default">커머스?</div>
              <div className="hover:text-white transition-colors cursor-default">의료?</div>
              <div className="hover:text-white transition-colors cursor-default">뷰티?</div>
              <div className="hover:text-white transition-colors cursor-default">배달?</div>
              <div className="hover:text-white transition-colors cursor-default">채용?</div>
              <div className="hover:text-white transition-colors cursor-default">부동산?</div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-gray-300">
                이 모든 것을 합친 것보다 중요한 문제
              </p>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  정치
                </span>
              </div>
            </div>
          </div>

          {/* 핵심 통계 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-white p-8">
              <div className="space-y-4">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                  Annual Political Inefficiency Cost
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter">
                  <span className="text-red-500">233</span>
                  <span className="text-white text-2xl ml-2">조원</span>
                </div>
                <div className="text-gray-400 text-sm">
                  = 10% of GDP / 사회적 갈등비용
                </div>
                <div className="h-px bg-white opacity-20"></div>
              </div>
            </div>

            <div className="border border-white p-8">
              <div className="space-y-4">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                  Market Cap Evaporated (2024.12.03)
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter">
                  <span className="text-red-500">79</span>
                  <span className="text-white text-2xl ml-2">조원</span>
                </div>
                <div className="text-gray-400 text-sm">
                  계엄령 선언 하루만에 증발
                </div>
                <div className="h-px bg-white opacity-20"></div>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <button className="bg-white text-black font-bold py-4 px-12 hover:bg-red-500 hover:text-white transition-all duration-300">
              참치상사와 커피챗하기 →
            </button>
            
            <button className="border border-white text-white hover:bg-white hover:text-black font-medium py-4 px-12 transition-all duration-300">
              MORE INFO
            </button>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 인디케이터 - 바이너리 스타일 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-white transition-colors">
          <div className="text-xs font-mono uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">SCROLL</div>
          <div className="absolute top-0 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
            01010011 01000011 01010010
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent group-hover:animate-pulse mt-6"></div>
          
          {/* 스크롤 파도 효과 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
