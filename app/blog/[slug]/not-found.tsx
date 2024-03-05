import NotFound from '@/app/components/NotFound/NotFound';

export default function PostNotFound() {
  return (
    <div>
      <NotFound
        title="Poszukiwany post nie istnieje"
        url="/blog"
        linkContent="Wróć do listy postów"
      />
    </div>
  );
}
