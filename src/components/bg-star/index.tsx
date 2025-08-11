import React from "react";

const StarEffect = () => {
  return (
    <>
      {/* Night sky stars with glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          // Small stars
          { top: "10%", left: "20%", size: 8, delay: "0s" },
          { top: "30%", left: "72%", size: 8, delay: "0.5s" },
          { top: "50%", left: "40%", size: 8, delay: "1s" },
          { top: "15%", left: "81%", size: 8, delay: "1.5s" },
          { top: "70%", left: "18%", size: 8, delay: "2s" },
          { top: "85%", left: "66%", size: 8, delay: "0.8s" },
          { top: "25%", left: "52%", size: 8, delay: "1.2s" },
          { top: "60%", left: "85%", size: 8, delay: "0.3s" },
          { top: "40%", left: "15%", size: 8, delay: "1.8s" },
          { top: "75%", left: "45%", size: 8, delay: "2.3s" },
          { top: "70%", left: "95%", size: 8, delay: "0.3s" },
          { top: "80%", left: "95%", size: 8, delay: "1.8s" },
          { top: "95%", left: "99%", size: 8, delay: "2.3s" },

          // Medium stars (3)
          { top: "20%", left: "35%", size: 12, delay: "0.4s" },
          { top: "55%", left: "25%", size: 12, delay: "1.6s" },
          { top: "65%", left: "75%", size: 12, delay: "2.1s" },
          { top: "90%", left: "35%", size: 12, delay: "0.4s" },
          { top: "65%", left: "25%", size: 12, delay: "1.6s" },
          { top: "75%", left: "75%", size: 12, delay: "2.1s" },

          // Big stars (2)
          { top: "5%", left: "59%", size: 18, delay: "0.7s" },
          { top: "80%", left: "32%", size: 18, delay: "1.4s" },
          { top: "10%", left: "54%", size: 18, delay: "0.7s" },
          { top: "90%", left: "71%", size: 18, delay: "0.4s" },
        ].map((star, i) => (
          <svg
            key={i}
            className="absolute twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="url(#starGradient)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <path d="M12 2L14.09 8.26L20.97 8.91L15.45 13.14L17.27 19.9L12 16.77L6.73 19.9L8.55 13.14L3.03 8.91L9.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    </>
  );
};
export default StarEffect;
