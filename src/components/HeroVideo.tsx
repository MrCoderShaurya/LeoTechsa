const HeroVideo = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[500px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://leotechsa.com/videodemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};

export default HeroVideo;
