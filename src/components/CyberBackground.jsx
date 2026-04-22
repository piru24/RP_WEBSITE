function CyberBackground() {
  const columns = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-black" />
      <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-40" />
      <div className="absolute inset-0 bg-scanline bg-[length:100%_5px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyber-purple/20 blur-[140px]" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-cyber-cyan/10 blur-[120px]" />
      <div className="matrix-rain" aria-hidden="true">
        {columns.map((column) => (
          <span
            key={column}
            style={{
              left: `${column * 6}%`,
              animationDelay: `${(column % 7) * 0.55}s`,
              animationDuration: `${7 + (column % 5)}s`,
            }}
          >
            010011001101
          </span>
        ))}
      </div>
    </div>
  );
}

export default CyberBackground;
