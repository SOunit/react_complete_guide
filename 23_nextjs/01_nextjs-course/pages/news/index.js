// our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function News() {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default News;
