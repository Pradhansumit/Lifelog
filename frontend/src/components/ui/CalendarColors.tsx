const CalendarColors = () => {
  return (
    <div className="flex gap-2 items-center justify-center my-2">
      {/* happy */}
      <div>
        <span className="w-4 h-4 rounded-full inline-block  bg-[#34d399]"></span>
        <span className="mx-2">Happy</span>
      </div>
      {/* sad */}
      <div>
        <span className="w-4 h-4 rounded-full inline-block  bg-[#60a5fa]"></span>
        <span className="mx-2">Sad</span>
      </div>
      {/* angry */}
      <div>
        <span className="w-4 h-4 rounded-full inline-block  bg-[#f87171]"></span>
        <span className="mx-2">Angry</span>
      </div>
      {/* neutral */}
      <div>
        <span className="w-4 h-4 rounded-full inline-block  bg-[#a1a1aa]"></span>
        <span className="mx-2">Neutral</span>
      </div>
      {/* good */}
      <div>
        <span className="w-4 h-4 rounded-full inline-block  bg-[#fbbf24]"></span>
        <span className="mx-2">Good</span>
      </div>
    </div>
  );
};

export default CalendarColors;
