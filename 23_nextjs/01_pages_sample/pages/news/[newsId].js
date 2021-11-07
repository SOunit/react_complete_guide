// our-domain.com/news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>DetailPage</h1>;
}

export default DetailPage;
