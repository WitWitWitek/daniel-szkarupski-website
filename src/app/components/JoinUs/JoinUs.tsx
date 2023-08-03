import styles from './JoinUs.module.scss';
import Person from './Person/Person';

const teamArray: Person[] = [
  {
    name: 'Daniel Szkarupski',
    position: 'Kandydat w wyborach do Sejmu RP',
    thumbnail: '/team/bartlomiej-czuchnowski.jpeg',
  },
  {
    name: 'Bartłomiej Czuchnowski',
    position: 'Rzecznik prasowy komitetu, koordynator Rady Programowej',
    thumbnail: '/team/bartlomiej-czuchnowski.jpeg',
  },
  {
    name: 'Dawid Gaczyński',
    position: 'Szef sztabu wyborczego',
    thumbnail: '/team/dawid-gaczynski.jpg',
  },
  {
    name: 'Bartłomiej Lach',
    // position: 'Zastępca szefa sztabu wyborczego, pełnomocnik ds. finansowych',
    position: 'Pełnomocnik ds. finansowych',
    thumbnail: '/team/bartlomiej-lach.jpg',
  },
  {
    name: 'Karsten Glensk',
    position: 'Specialista ds. marketingu',
    thumbnail: '/team/karsten-glensk.jpg',
  },
  {
    name: 'Kacper Lachowicz',
    position: 'Koordynator działu logistycznego',
    thumbnail: '/team/kacper-lachowicz.jpeg',
  },
  {
    name: 'Łukasz Hałaszkiewicz',
    position: 'Koordynator ds. wsparcia sympatyków',
    thumbnail: '/team/lukasz-halaszkiewicz.jpg',
  },
  {
    name: 'Łukasz Pukas',
    position: 'Koordynator zespołu filmowego',
    thumbnail: '/team/lukasz-pukas.jpg',
  },
];

export default function JoinUs() {
  return (
    <section className={styles['join-us']}>
      <h2 id="dolacz-do-nas">
        Dołącz
        <br /> do nas!
      </h2>
      <div className={styles['join-us__wrapper']}>
        {teamArray.map((person) => (
          <Person key={person.position} teamMember={person} />
        ))}
      </div>
    </section>
  );
}
