export function ProblemSection() {
  return (
    <section className="py-32 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="text-xs text-gray-500 font-mono uppercase tracking-[0.3em] mb-4">
              Problem Statement
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
              아무도 풀려고<br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                시도조차 하지 않는
              </span><br />
              문제
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-8 max-w-md mx-auto"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            대한민국은 매년 정치적 비효율과 사회적 갈등으로<br />
            국가 경쟁력을 잠식하는 막대한 비용을 지불하고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 문제 현황 */}
          <div className="space-y-8">
            <div className="border border-gray-800 bg-black/50 backdrop-blur">
              <div className="border-b border-gray-800 p-6">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                  Current State Analysis
                </div>
                <h3 className="text-2xl font-bold">현재 상황</h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      정치적 비효율 비용
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      연간 233조원 (GDP 10%) 사회적 갈등비용 발생
                    </p>
                    <div className="mt-2 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      극단적 소통 방식
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      대통령이 "소통을 위해" 계엄령을 선택하는 현실
                    </p>
                    <div className="mt-2 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      저효율 소통 방식
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      스팸성 문자, 현수막, 보도자료 중심의<br />구식 정치 커뮤니케이션
                    </p>
                    <div className="mt-2 h-px bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 비용 시각화 - 하이테크 스타일 */}
          <div className="space-y-8">
            <div className="border border-gray-800 bg-black/80 backdrop-blur">
              <div className="border-b border-gray-800 p-6">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                  Cost Analysis Dashboard
                </div>
                <h3 className="text-2xl font-bold">정치적 갈등의 실제 비용</h3>
              </div>
              
              <div className="p-6 space-y-8">
                {/* 연간 갈등비용 */}
                <div className="border border-gray-800/50 bg-gray-900/30 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                        Annual Conflict Cost
                      </div>
                      <span className="text-gray-300 text-sm">연간 갈등비용</span>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-red-400">233</span>
                      <span className="text-lg text-gray-300 ml-1">조원</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 h-2 mb-2">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 h-2" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">0</span>
                    <span className="text-gray-400">전체 GDP의 10%</span>
                    <span className="text-gray-500">100%</span>
                  </div>
                </div>

                {/* 계엄령 손실 */}
                <div className="border border-gray-800/50 bg-gray-900/30 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                        Martial Law Impact
                      </div>
                      <span className="text-gray-300 text-sm">계엄령 하루 손실</span>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-red-400">79</span>
                      <span className="text-lg text-gray-300 ml-1">조원</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 h-2 mb-2">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 h-2" style={{ width: '34%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">0</span>
                    <span className="text-gray-400">증시 시가총액 증발</span>
                    <span className="text-gray-500">233조</span>
                  </div>
                </div>

                {/* 비교 데이터 */}
                <div className="border border-gray-800/50 bg-gray-900/30 p-6">
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">
                    Budget Comparison
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span className="text-gray-300 text-sm">교육예산 3년치</span>
                      <span className="text-gray-400 font-mono text-sm">76조원</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span className="text-gray-300 text-sm">국방예산 4년치</span>
                      <span className="text-gray-400 font-mono text-sm">228조원</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300 text-sm">보건복지예산 2.5년치</span>
                      <span className="text-gray-400 font-mono text-sm">234조원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 문제 정의 - 파도와 함께 */}
        <div className="mt-16 text-center relative">
          <div className="bg-black text-white border-2 border-white p-8 sm:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* 파도 배경 */}
            <div className="absolute bottom-0 left-0 w-full h-20 opacity-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white to-transparent animate-wave"></div>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-t from-gray-300 to-transparent animate-wave" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-t from-gray-500 to-transparent animate-wave" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-4">
                Core Problem Definition
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                핵심은 정부/정치인 ↔ 시민/유권자 간 
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  소통 혁신
                </span>
                입니다
              </h3>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-gray-300 leading-relaxed font-mono text-sm">
                  기존의 일방향적이고 비효율적인 정치 커뮤니케이션 방식을<br />
                  근본적으로 혁신해야 합니다.<br />
                  <span className="text-white font-bold">
                    정치인과 국민 사이의 진정한 소통이 이루어져야<br />
                    민주주의가 제대로 작동할 수 있습니다.
                  </span>
                </p>
              </div>
              
              {/* 바이너리 장식 */}
              <div className="mt-6 flex justify-center space-x-2 text-xs font-mono text-gray-500">
                <span className="hover:text-white transition-colors">01010011</span>
                <span className="hover:text-white transition-colors">01001111</span>
                <span className="hover:text-white transition-colors">01001100</span>
                <span className="hover:text-white transition-colors">01010110</span>
                <span className="hover:text-white transition-colors">01000101</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
