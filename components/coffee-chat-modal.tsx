'use client';

import { useState } from 'react';

interface CoffeeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoffeeChatModal({ isOpen, onClose }: CoffeeChatModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    purpose: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제로는 여기서 API 호출
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // 3초 후 모달 닫기
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      // 폼 초기화
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        purpose: '',
        preferredTime: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-black border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="border-b border-white/20 p-6 sticky top-0 bg-black z-10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="pr-8">
            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
              COFFEE_CHAT.request()
            </div>
            <h2 className="text-2xl font-bold text-white">
              참치상사와 커피챗 신청
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              대한민국 정치 혁신을 함께 논의해보세요
            </p>
          </div>
        </div>

        {/* 성공 메시지 */}
        {showSuccess ? (
          <div className="p-12 text-center">
            <div className="inline-block p-4 bg-green-500/10 border border-green-500 rounded-full mb-6">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
            <p className="text-gray-400">곧 연락드리겠습니다.</p>
            <div className="mt-6 font-mono text-xs text-gray-500">
              {`> STATUS: SUCCESS`}
              <br />
              {`> RESPONSE_TIME: 24h`}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* 기본 정보 섹션 */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                01. BASIC_INFO
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="홍길동"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    회사/조직
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="참치상사"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    직책/역할
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="CEO"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            {/* 미팅 정보 섹션 */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                02. MEETING_DETAILS
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  커피챗 목적 <span className="text-red-500">*</span>
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                >
                  <option value="">선택해주세요</option>
                  <option value="partnership">파트너십 논의</option>
                  <option value="investment">투자 상담</option>
                  <option value="service">서비스 이용 문의</option>
                  <option value="recruitment">인재 채용</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  선호 시간대
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm"
                >
                  <option value="">언제든 가능</option>
                  <option value="morning">오전 (09:00-12:00)</option>
                  <option value="afternoon">오후 (12:00-18:00)</option>
                  <option value="evening">저녁 (18:00-21:00)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors font-mono text-sm resize-none"
                  placeholder="참치상사와 논의하고 싶은 내용을 자유롭게 작성해주세요..."
                />
              </div>
            </div>

            {/* 바이너리 장식 */}
            <div className="flex justify-center space-x-4 text-xs font-mono text-gray-600">
              <span>01001000</span>
              <span>01000101</span>
              <span>01001100</span>
              <span>01001100</span>
              <span>01001111</span>
            </div>

            {/* 제출 버튼 */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 px-6 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-bold"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-4 px-6 bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    처리 중...
                  </span>
                ) : (
                  '신청하기 →'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
