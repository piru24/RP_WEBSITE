import Section from '../components/Section.jsx';
import { documents } from '../data/data.js';

function Documents() {
  return (
    <Section id="documents" eyebrow="07 / Docs" title="Project Documents">
      <div className="mx-auto max-w-7xl space-y-10">
        {documents.map((group) => (
          <div key={group.category}>
            <h3 className="mb-5 font-mono text-2xl font-bold text-cyber-green">{group.category}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.files.map((file) => (
                <article key={file.name} className="glass-panel p-5">
                  <p className="font-mono text-sm text-white">{file.name}</p>
                  <div className="mt-5 flex gap-3">
                    {file.file ? (
                      <>
                        <a href={file.file} target="_blank" rel="noreferrer" className="small-button">
                          View
                        </a>
                        <a href={file.file} download className="small-button small-button-fill">
                          Download
                        </a>
                      </>
                    ) : (
                      <span className="border border-cyber-green/15 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cyber-muted">
                        PDF Pending
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Documents;
