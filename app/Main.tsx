/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pt-6 pb-10 md:pt-10 md:pb-14">
          <div className="space-y-3">
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
              AI Tools That Help Small Businesses Save Time and Make More Money
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Tested AI tools for marketing, sales, and automation — with real comparisons,
              pricing insights, and clear recommendations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/blog"
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
            >
              Explore Best AI Tools
            </Link>
            <Link
              href="/tags"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              Browse Categories
            </Link>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Sales</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Find AI tools that help small teams close more deals faster.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Automation
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Discover tools that reduce manual work and save hours every week.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Customer Support
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Compare AI tools that help businesses respond faster and support customers
                better.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Marketing
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Review AI tools for content, growth, and smarter customer acquisition.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            People come to this site to find the best AI tools to grow their business without
            hiring more people.
          </p>
        </div>
<div className="space-y-4 py-8">
  <div className="space-y-2">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      Top AI Tool Picks for Small Businesses
    </h2>
    <p className="text-gray-600 dark:text-gray-400">
      Start with the categories that usually create the fastest ROI for small teams.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Best AI for Sales
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Tools that help teams qualify leads, follow up faster, and close more deals.
      </p>
      <div className="mt-4">
        <Link
          href="/tags/sales"
          className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Explore sales tools &rarr;
        </Link>
      </div>
    </div>

    <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Best AI for Automation
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Tools that remove repetitive work and save hours every week.
      </p>
      <div className="mt-4">
        <Link
          href="/tags/automation"
          className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Explore automation tools &rarr;
        </Link>
      </div>
    </div>

    <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Best AI for Customer Support
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Tools that improve response speed and help support more customers with less effort.
      </p>
      <div className="mt-4">
        <Link
          href="/tags/customer-support"
          className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Explore support tools &rarr;
        </Link>
      </div>
    </div>
    <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Best AI for Marketing
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Tools for content, campaigns, and customer acquisition.
      </p>
      <div className="mt-4">
        <Link
          href="/tags/marketing"
          className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Explore marketing tools &rarr;
        </Link>
      </div>
    </div>
  </div>
</div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post

            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>

                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>

                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>

                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>

                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-8">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
