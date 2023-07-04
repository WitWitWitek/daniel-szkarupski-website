import styles from './JoinUs.module.scss';
import Person from './Person/Person';

const teamArray: Person[] = [
  {
    name: 'Bartłomiej Czuchnowski',
    position: 'Rzecznik prasowy komitetu, koordynator rady programowej',
    thumbnail: '/team/bartlomiej-czuchnowski.jpeg',
  },
  {
    name: 'Dawid Gaczyński',
    position: 'Szef sztabu wyborczego',
    thumbnail: '/team/dawid-gaczynski.jpg',
  },
  {
    name: 'Bartłomiej Lach',
    position: 'Zastępca szefa sztabu wyborczego, pełnomocnik ds. finansowych',
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
    name: 'Romuald Kałwa',
    position: 'Specialista ds. kontaktu z mediami',
    thumbnail: '/team/romuald-kalwa.jpg',
  },
  {
    name: 'Łukasz Pukas',
    position: 'Koordynator zespołu graficznego',
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
