import { TunaLogo } from './tuna-logo';

export function SolutionSection() {
  return (
    <section className="py-32 bg-white text-black relative overflow-hidden">
      {/* 바이너리 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-sm font-mono text-black animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="text-xs text-gray-500 font-mono uppercase tracking-[0.3em] mb-4">
              Solution Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
              참치상사만의<br />
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                혁신적 접근법
              </span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent mt-8 max-w-md mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            기존의 저효율 소통방식을 혁신하여<br />
            정치인과 국민을 효과적으로 연결합니다
          </p>
        </div>



        {/* 기존 vs 참치상사 비교 - 극명한 흑백 대비 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* 기존 방식 - 완전 검은색 */}
          <div className="bg-black text-white border border-gray-800 relative overflow-hidden group">
            <div className="border-b border-gray-800 p-6">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                Legacy System
              </div>
              <h3 className="text-2xl font-bold mb-4">기존 정치 소통</h3>
              
              {/* 바이너리 아이콘 */}
              <div className="w-16 h-16 bg-gray-900 border border-gray-700 flex items-center justify-center mx-auto font-mono text-red-400">
                <div className="text-center text-xs">
                  <div>0000</div>
                  <div>0000</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 group-hover:text-red-400 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-none"></div>
                <span className="font-mono text-sm">스팸성 문자 발송</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:text-red-400 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-none"></div>
                <span className="font-mono text-sm">현수막 도배</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:text-red-400 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-none"></div>
                <span className="font-mono text-sm">일방적 보도자료</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:text-red-400 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-none"></div>
                <span className="font-mono text-sm">획일적 메시지</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:text-red-400 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-none"></div>
                <span className="font-mono text-sm">피드백 부재</span>
              </div>
            </div>

            <div className="border-t border-gray-800 p-6">
              <div className="text-red-400 font-mono text-sm text-center">
                RESULT: SYSTEM_FAILURE
              </div>
              <div className="text-xs text-gray-500 text-center mt-1">
                시민 불신 증가, 정치적 갈등 심화
              </div>
            </div>

            {/* 글리치 효과 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-red-500 font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  0
                </div>
              ))}
            </div>
          </div>

          {/* 참치상사 방식 - 완전 흰색 */}
          <div className="bg-white text-black border-2 border-black relative overflow-hidden group">
            <div className="border-b-2 border-black p-6 relative">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                TUNA_CORP Solution
              </div>
              <h3 className="text-2xl font-bold mb-4">참치상사 솔루션</h3>
              
              {/* 참치 로고 - 원본 사용 */}
              <div className="flex justify-center bg-black p-4">
                <TunaLogo size="small" />
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 group-hover:font-bold transition-all">
                <div className="w-2 h-2 bg-black rounded-none"></div>
                <span className="font-mono text-sm">타게팅된 맞춤 컨텐츠</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:font-bold transition-all">
                <div className="w-2 h-2 bg-black rounded-none"></div>
                <span className="font-mono text-sm">도파민 터지는 유익한 메시지</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:font-bold transition-all">
                <div className="w-2 h-2 bg-black rounded-none"></div>
                <span className="font-mono text-sm">10배 효율적 전달</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:font-bold transition-all">
                <div className="w-2 h-2 bg-black rounded-none"></div>
                <span className="font-mono text-sm">양방향 실시간 소통</span>
              </div>
              <div className="flex items-center space-x-3 group-hover:font-bold transition-all">
                <div className="w-2 h-2 bg-black rounded-none"></div>
                <span className="font-mono text-sm">데이터 기반 최적화</span>
              </div>
            </div>

            <div className="border-t-2 border-black p-6 bg-black text-white">
              <div className="font-mono text-sm text-center">
                RESULT: SYSTEM_UPGRADE
              </div>
              <div className="text-xs text-gray-300 text-center mt-1">
                시민 참여 증가, 건설적 정치 문화 조성
              </div>
            </div>

            {/* 성공 효과 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-black font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  1
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* 차별화 포인트 */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white border border-white relative overflow-hidden">

            <div className="relative z-10 p-8 sm:p-12">
              <div className="border-b border-white/20 pb-6 mb-6">
                <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-4">
                  Market Exclusivity Statement
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-6 leading-tight">
                  참치상사는 이 문제를 풀고 있는 
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    유일한 테크 스타트업
                  </span>
                  입니다
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed max-w-3xl mx-auto">
                <p>
                  {`> MVP.validation() = TRUE`}
                </p>
                <p>
                  {`> investment.amount = 300000000 KRW`}
                </p>
                <p>
                  {`> launch.date = 2025.01`}
                </p>
                <p className="text-white font-bold">
                  {`> status: OPERATIONAL`}
                </p>
              </div>

              {/* 바이너리 강조 효과 */}
              <div className="mt-8 flex justify-center space-x-4 text-xs font-mono">
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01010101</span>
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01001110</span>
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01001001</span>
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01010001</span>
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01010101</span>
                <span className="hover:text-white transition-colors cursor-default text-gray-500">01000101</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
