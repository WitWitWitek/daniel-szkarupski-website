import NotFound from './components/NotFound/NotFound';

export default function PageNotFound() {
  return (
    <section className="not-found">
      <NotFound
        title="Strona nie istnieje"
        url="/#kontakt"
        linkContent="Wróć do strony głównej"
      />
    </section>
  );
}
