interface TunaLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function TunaLogo({ size = 'medium', className = '' }: TunaLogoProps) {
  const pixelSize = {
    small: 'w-1.5 h-1.5',
    medium: 'w-2.5 h-2.5',
    large: 'w-4 h-4'
  };

  // 이미지에서 정확히 읽은 패턴 - 1은 검은색, 0은 투명
  const tunaPattern = [
    // 1행
    [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1],
    // 2행
    [0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0],
    // 3행
    [0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1],
    // 4행
    [0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0],
    // 5행
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    // 6행
    [0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0],
    // 7행
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    // 8행
    [0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0],
    // 9행
    [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    // 10행
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    // 11행
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    // 12행
    [0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
    // 13행
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    // 14행
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
  ];

  return (
    <div className={`inline-block ${className}`}>
      <div className="grid grid-cols-16 gap-0">
        {tunaPattern.map((row, rowIndex) => (
          row.map((bit, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`
                ${pixelSize[size]}
                ${bit === 1 ? 'bg-white' : 'bg-transparent'}
              `}
            />
          ))
        ))}
      </div>
    </div>
  );
}