import Image from 'next/image';
import Link from 'next/link';
import ArticleFigure from '@/components/ArticleFigure';
import ArticleLogoGrid from '@/components/ArticleLogoGrid';
import PageCta from '@/components/PageCta';
import { aiBubbleImages, aiBubbleLogos } from '@/lib/blog/ai-bubble-images';
import figureStyles from '@/components/ArticleFigure.module.css';
import styles from './page.module.css';

const post = {
  tag: 'Technology',
  title: 'The AI Bubble: Is OpenAI Manipulating Oracle and Other Tech Giants?',
  date: 'Apr 18, 2026',
  readTime: '6 min read',
  image: '/blog-ai-bubble.jpg',
  topics: ['OpenAI', 'Oracle', 'AI Bubble', 'Tech Giants'],
};

export const metadata = {
  title: post.title,
};

export default function BlogPost() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGridBg} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Article</span>
          </nav>

          <div className={styles.heroMain}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                {post.tag}
              </p>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.authorRow}>
                <div className={styles.authorAvatar}>
                  <Image src="/profile.png" alt="Haris Ali" width={48} height={48} style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <div className={styles.authorName}>Haris Ali</div>
                  <div className={styles.authorMeta}>{post.date} · {post.readTime}</div>
                </div>
              </div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>6 min</span>
                <span className={styles.statLabel}>Read time</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Apr 18</span>
                <span className={styles.statLabel}>Published</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>2026</span>
                <span className={styles.statLabel}>Year</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.accentBar} aria-hidden="true" />
      </section>

      <div className={styles.heroImageSection}>
        <div className={`container ${styles.heroImageWrap}`}>
          <div className={styles.heroImageFrame}>
            <Image
              src={post.image}
              alt="AI Bubble"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.articleGridBg} aria-hidden="true" />
        <div className={`container ${styles.articleInner}`}>
          <header className={styles.topicsHeader}>
            <div className={styles.topicsHeaderAccent} aria-hidden="true" />
            <div>
              <p className={styles.topicsHeaderLabel}>In this article</p>
              <p className={styles.topicsHeaderTitle}>Key themes covered below</p>
            </div>
            <ul className={styles.topicsList} aria-label="Article topics">
              {post.topics.map((topic) => (
                <li key={topic} className={styles.topic}>{topic}</li>
              ))}
            </ul>
          </header>

          <div className={styles.lead}>
            <p>The artificial intelligence industry is experiencing one of the biggest investment booms in the history of technology. Billions of dollars are flowing into AI companies, valuations are skyrocketing, and tech giants are making desperate moves to stay relevant in the AI race.</p>
            <p>But behind the excitement and the headlines, a darker story is emerging. Critics, economists, and even some insiders are asking a dangerous question — <strong>Is AI just another bubble? And is OpenAI at the center of a massive manipulation of the tech industry?</strong></p>
            <p>In this blog, I want to break down what is really happening, who is benefiting, and whether the AI gold rush is built on solid foundations or on hype and fear.</p>
          </div>

          <div className={styles.content}>
            <h2>What is the AI Bubble?</h2>
            <p>A financial bubble occurs when the price or valuation of an asset rises far beyond its real value, driven by speculation, hype, and fear of missing out — until it eventually crashes.</p>
            <p>We have seen this before:</p>
            <ul>
              <li><strong>Dot-com bubble (2000)</strong> — Internet companies with no revenue were valued at billions. When it crashed, trillions were wiped out.</li>
              <li><strong>Crypto bubble (2021)</strong> — Cryptocurrency valuations exploded on hype, then collapsed by over 70%.</li>
            </ul>
            <p>Many economists and tech analysts believe <strong>AI is following the same pattern</strong>. Companies are spending hundreds of billions of dollars on AI infrastructure, but the actual revenue and real-world returns are not yet matching the investment.</p>

            <ArticleFigure {...aiBubbleImages.bubbleChart} wide />

            <h2>OpenAI: The Center of the AI Universe</h2>
            <p>OpenAI, the company behind ChatGPT, is the most influential AI company in the world right now. But its business model, valuation, and relationships with other companies deserve serious scrutiny.</p>

            <ArticleFigure {...aiBubbleImages.aiNeural} />

            <h3>The Numbers Don&apos;t Add Up</h3>
            <ul>
              <li>OpenAI was valued at <strong>$157 billion</strong> in 2024 — making it one of the most valuable private companies in history.</li>
              <li>Yet OpenAI is <strong>losing billions of dollars every year</strong>. Reports suggest it lost over <strong>$5 billion in 2024</strong> alone.</li>
              <li>ChatGPT, despite having hundreds of millions of users, struggles to convert users into paying customers at the scale needed to justify its valuation.</li>
            </ul>

            <h3>How is OpenAI Surviving?</h3>
            <p>OpenAI survives on <strong>massive investments</strong> — primarily from Microsoft, which has poured over <strong>$13 billion</strong> into the company. But this raises a question — at what point do investors stop pouring money into a company that keeps losing billions?</p>

            <h2>The Oracle Deal — A Closer Look</h2>
            <p>One of the most talked-about stories in the AI world is the relationship between OpenAI and <strong>Oracle</strong>, the database and cloud computing giant led by Larry Ellison.</p>

            <h3>What Happened?</h3>
            <p>In 2024, OpenAI announced a massive deal with Oracle to use its cloud infrastructure for AI computing. This was part of a broader initiative called <strong>Stargate</strong> — a $500 billion AI infrastructure project backed by OpenAI, Oracle, SoftBank, and the US government.</p>

            <div className={figureStyles.row}>
              <ArticleFigure {...aiBubbleImages.dataCenter} />
              <ArticleFigure {...aiBubbleImages.techNetwork} aspect="square" />
            </div>

            <h3>Why is This Controversial?</h3>
            <p>Critics have raised several concerns:</p>
            <ol>
              <li><strong>Inflated Valuations</strong> — When OpenAI announces massive deals with companies like Oracle, it creates the appearance of massive revenue and growth — which drives up OpenAI&apos;s valuation even further.</li>
              <li><strong>Circular Investment</strong> — Some analysts argue that these deals are structured in ways where companies invest in each other, creating an illusion of growth without real market demand driving it.</li>
              <li><strong>Larry Ellison&apos;s Enthusiasm</strong> — Oracle&apos;s CEO Larry Ellison has been one of the most vocal cheerleaders for AI and OpenAI specifically. His public statements have been so enthusiastic that some critics have questioned whether they are designed to drive up stock prices and valuations rather than reflect genuine business fundamentals.</li>
              <li><strong>Government Involvement</strong> — The Stargate project involves significant US government backing, raising questions about whether taxpayer money is being used to inflate private company valuations.</li>
            </ol>

            <h2>Other Companies Caught in the AI Hype</h2>
            <p>OpenAI and Oracle are not the only players in this story. Several other major companies are spending enormous amounts of money on AI — and critics question whether these investments make sense.</p>

            <ArticleLogoGrid title="Major players in the AI spend" items={aiBubbleLogos} />

            <h3>Microsoft</h3>
            <p>Microsoft has invested over $13 billion in OpenAI and integrated AI into every product it makes — from Word to Azure cloud services. But analysts note that Microsoft&apos;s AI revenue is still a tiny fraction of its overall business, and the company&apos;s stock price has risen dramatically on AI hype alone.</p>

            <h3>NVIDIA</h3>
            <p>NVIDIA has become the biggest winner of the AI boom. Its chips power almost every major AI system. Its stock rose over <strong>800%</strong> in two years — making it briefly the most valuable company in the world. But analysts warn that if AI spending slows down, NVIDIA&apos;s growth could collapse just as fast.</p>

            <ArticleFigure {...aiBubbleImages.gpuChips} />

            <h3>Google and Meta</h3>
            <p>Both Google and Meta are spending tens of billions on AI infrastructure. Google&apos;s core search business is under threat from AI chatbots, forcing it to invest massively just to defend its existing revenue. Meta is spending billions on AI with no clear monetization strategy beyond improving its ad targeting.</p>

            <h3>SoftBank</h3>
            <p>SoftBank, the Japanese investment giant led by Masayoshi Son, has committed $100 billion to the Stargate project. SoftBank famously lost billions in its WeWork investment — another company that was massively overhyped before collapsing. Critics ask whether SoftBank is making the same mistake again with AI.</p>

            <h2>Sam Altman — Visionary or Master Manipulator?</h2>
            <p>OpenAI&apos;s CEO <strong>Sam Altman</strong> is one of the most powerful and controversial figures in tech today. He is a brilliant communicator who has convinced governments, investors, and the public that AI is the most important technology in human history.</p>
            <p>But critics point to several concerning patterns:</p>
            <ul>
              <li><strong>Conflict of Interest</strong> — Altman has personal investments in dozens of AI and tech companies that benefit from OpenAI&apos;s success.</li>
              <li><strong>The Boardroom Drama</strong> — In 2023, OpenAI&apos;s board briefly fired Altman before rehiring him days later. The full story of what happened has never been fully disclosed, raising questions about transparency and governance.</li>
              <li><strong>Doomsday Rhetoric</strong> — Altman frequently warns about the existential dangers of AI — while simultaneously being the person building the most powerful AI systems. Critics argue this is a strategy to make regulation focus on fictional future risks rather than real present-day harms like job displacement and misinformation.</li>
            </ul>

            <h2>Is the Bubble About to Burst?</h2>
            <p>Several warning signs suggest the AI bubble may be closer to bursting than most people realize:</p>

            <ArticleFigure {...aiBubbleImages.stockCrash} wide />
            <ol>
              <li><strong>Revenue vs Investment Gap</strong> — The gap between what companies are spending on AI and what they are earning from it keeps growing.</li>
              <li><strong>Energy Crisis</strong> — AI data centers consume enormous amounts of electricity. The energy costs of running these systems are becoming unsustainable.</li>
              <li><strong>Talent Shortage</strong> — There are not enough AI engineers in the world to build everything that is being promised.</li>
              <li><strong>Regulatory Pressure</strong> — Governments around the world are beginning to regulate AI, which could slow down deployment and revenue growth.</li>
              <li><strong>User Fatigue</strong> — After the initial excitement of ChatGPT, many users are returning to traditional search and tools, suggesting AI adoption may plateau sooner than expected.</li>
            </ol>

            <h2>What Happens if the Bubble Bursts?</h2>
            <p>If the AI bubble bursts, the consequences could be severe:</p>
            <ul>
              <li><strong>Massive layoffs</strong> at AI companies and companies that over-invested in AI</li>
              <li><strong>Stock market crash</strong> affecting NVIDIA, Microsoft, Google, and Meta</li>
              <li><strong>Loss of public trust</strong> in AI technology, slowing down genuinely useful applications</li>
              <li><strong>Bankruptcy of smaller AI startups</strong> that depend on continued investment</li>
            </ul>
            <p>However, unlike the dot-com crash, AI technology is genuinely useful and will survive. Just as the internet survived the dot-com bubble, AI will continue to grow — but the companies that survive will be those with real products, real revenue, and real users.</p>

            <h2>Conclusion</h2>
            <p>The AI industry is at a critical crossroads. The technology is real, the potential is enormous, but the valuations, the deals, and the hype surrounding companies like OpenAI, Oracle, and others have gone far beyond what the current reality justifies.</p>
            <p>Whether this is a full bubble or just an overcorrection, one thing is clear — the companies that will survive and thrive in the long run are those that focus on building genuinely useful products rather than chasing valuations and headlines.</p>
            <p>As developers, our job is to cut through the hype, understand the technology deeply, and build things that actually solve real problems. That is what will matter when the dust settles.</p>
          </div>

          <div className={styles.backRow}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <PageCta
        badgeIcon="rocket"
        badge="Let's Work Together"
        title="Ready to Elevate Your Digital Presence?"
        subtitle="Bring your vision to life with Code With Haris. Work directly with me — one developer, end-to-end — and ship your next project with confidence."
        buttonText="Get in Touch"
      />
    </>
  );
}
