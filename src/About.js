import React from 'react';


export default class About extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('unmounted');
  }
  render() {
    return (
      <div>
        <h1 align='center'>About Viruses</h1>
        <h3>
          A virus is an infectious agent that can only replicate within a host
          organism. Viruses can infect a variety of living organisms, including
          bacteria, plants, and animals. Viruses are so small that a microscope
          is necessary to visualize them, and they have a very simple structure.
          When a virus particle is independent from its host, it consists of a
          viral genome, or genetic material, contained within a protein shell
          called a capsid. In some viruses, the protein shell is enclosed in a
          membrane called an envelope. Viral genomes are very diverse, since
          they can be DNA or RNA, single- or double-stranded, linear or
          circular, and vary in length and in the number of DNA or RNA
          molecules. The viral replication process begins when a virus infects
          its host by attaching to the host cell and penetrating the cell wall
          or membrane. The virus's genome is uncoated from the protein and
          injected into the host cell. Then the viral genome hijacks the host
          cell's machinery, forcing it to replicate the viral genome and produce
          viral proteins to make new capsids. Next, the viral particles are
          assembled into new viruses. The new viruses burst out of the host cell
          during a process called lysis, which kills the host cell. Some viruses
          take a portion of the host's membrane during the lysis process to form
          an envelope around the capsid. Following viral replication, the new
          viruses may go on to infect new hosts. Many viruses cause diseases in
          humans, such as influenza, chicken pox, AIDS, the common cold, and
          rabies. The primary way to prevent viral infections is vaccination,
          which administers a vaccine made of inactive viral particles to an
          unaffected individual, in order to increase the individual's immunity
          to the disease.
        </h3>
      </div>
    );
  }
}
