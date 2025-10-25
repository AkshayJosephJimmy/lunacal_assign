


function GridIcon() {
  return (
    <div className="grid size-5 grid-cols-2 gap-[4px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-[10px] h-[10px] rounded-[2px] bg-gray-500/30"
        ></div>
      ))}
    </div>
  );
}

export default GridIcon;