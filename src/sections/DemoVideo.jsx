import Section from '../components/Section.jsx';

function DemoVideo() {
  return (
    <Section id="demo-video" eyebrow="09 / Demo" title="UI Demo Video">
      <div className="mx-auto max-w-5xl">
        <div className="terminal-card p-4 sm:p-6">
          <iframe
            className="h-[260px] w-full border border-cyber-green/20 sm:h-[500px]"
            src="https://www.youtube.com/embed/ndSQbrTyQm4"
            title="Project Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}

export default DemoVideo;
