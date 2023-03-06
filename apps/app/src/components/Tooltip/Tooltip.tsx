import { useState, useRef, useEffect } from 'react';

const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetRect = targetRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const tooltipRect = tooltipRef?.current?.getBoundingClientRect() || { width: 0, height: 0 };

    const tooltipLeft = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
    const tooltipTop = targetRect.top - tooltipRect.height - 8;

    tooltipRef.current.style.left = `${tooltipLeft}px`;
    tooltipRef.current.style.top = `${tooltipTop}px`;

    const isTooltipOutsideViewport =
      tooltipLeft < 0 ||
      tooltipLeft + tooltipRect.width > window.innerWidth ||
      tooltipTop < 0 ||
      tooltipTop + tooltipRect.height > window.innerHeight;

    if (isTooltipOutsideViewport && tooltipRef.current) {
      const tooltipRight = targetRect.right + tooltipRect.width / 2;
      const tooltipBottom = targetRect.bottom + 8;
      tooltipRef.current.style.left = `${tooltipRight - tooltipRect.width}px`;
      tooltipRef.current.style.top = `${tooltipBottom}px`;
    }
  }, [showTooltip]);

  return (
    <div className="relative">
      <span
        ref={targetRef}
        className="text-gray-800 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
      {showTooltip && (
        <div ref={tooltipRef} className="absolute bg-gray-800 text-white px-2 py-1 text-sm rounded">
          <span className="font-medium">{text}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
