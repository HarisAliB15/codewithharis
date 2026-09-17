'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import { getPricingContactHref } from '@/lib/pricingInquiries';
import { pricingCategories, pricingCategoryIds } from '@/lib/pricingPlans';
import pageStyles from '@/app/page.module.css';
import tabStyles from './PricingSection.module.css';

function CheckIcon({ included = true }) {
  return (
    <svg
      className={`${pageStyles.pricingCheck} ${included ? '' : pageStyles.pricingCheckMuted}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.5 8.2 6.4 11l6.1-6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState('mobile');
  const category = pricingCategories[activeCategory];

  return (
    <section className={pageStyles.pricing} id="pricing">
      <div className={pageStyles.pricingGridBg} aria-hidden="true" />
      <div className={pageStyles.pricingGlow} aria-hidden="true" />
      <div className={`container ${pageStyles.pricingContainer}`}>
        <header className={pageStyles.pricingHeader}>
          <div className={pageStyles.pricingHeaderMain}>
            <p className={pageStyles.pricingEyebrow}>
              <span className={pageStyles.pricingEyebrowDot} />
              Pricing
            </p>
            <h2 className={pageStyles.pricingTitle}>Start small, scale big</h2>
          </div>
          <p className={pageStyles.pricingSubtitle}>
            Transparent starting points — every project is scoped to your goals and quoted before we begin.
          </p>
        </header>

        <div className={pageStyles.pricingToolbar}>
          <div className={tabStyles.pricingTabs} role="tablist" aria-label="Pricing categories">
          {pricingCategoryIds.map((categoryId) => (
            <button
              key={categoryId}
              type="button"
              role="tab"
              aria-selected={activeCategory === categoryId}
              className={`${tabStyles.pricingTab} ${activeCategory === categoryId ? tabStyles.pricingTabActive : ''}`}
              onClick={() => setActiveCategory(categoryId)}
            >
              {pricingCategories[categoryId].label}
            </button>
          ))}
          </div>
        </div>

        <div className={pageStyles.pricingGrid} role="tabpanel">
          {category.plans.map((plan, index) => {
            const includedSet = new Set(plan.included);

            return (
              <article
                key={plan.slug}
                className={`${pageStyles.pricingCard} ${plan.featured ? pageStyles.pricingCardFeatured : ''}`}
              >
                <div className={pageStyles.pricingCardTop}>
                  <ServiceIcon
                    name={plan.icon}
                    size="lg"
                    featured={plan.featured}
                    stageClassName={pageStyles.serviceIconStage}
                  />
                  <div className={pageStyles.pricingCardHeading}>
                    {plan.featured ? (
                      <span className={pageStyles.featuredTag}>Most chosen</span>
                    ) : (
                      <span className={pageStyles.pricingIndex}>{String(index + 1).padStart(2, '0')}</span>
                    )}
                    <p className={pageStyles.pricingTierLabel}>{plan.tierLabel}</p>
                    <h3 className={pageStyles.serviceTitle}>{plan.name}</h3>
                  </div>
                </div>
                <p className={pageStyles.pricingPrice}>{plan.price}</p>
                <p className={pageStyles.serviceDesc}>{plan.desc}</p>
                <div className={pageStyles.pricingMeta}>
                  <span className={pageStyles.pricingMetaItem}>
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 4.5V8l2.25 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {plan.delivery}
                  </span>
                  <span className={pageStyles.pricingMetaItem}>
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M12.5 8a4.5 4.5 0 1 1-1.5-3.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12.5 3.5V6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {plan.revisions}
                  </span>
                </div>
                <p className={pageStyles.pricingIncludesLabel}>What&apos;s included</p>
                <ul className={pageStyles.pricingFeatures}>
                  {category.featureList.map((feature) => {
                    const included = includedSet.has(feature);
                    return (
                      <li
                        key={feature}
                        className={`${pageStyles.pricingFeature} ${included ? '' : pageStyles.pricingFeatureMuted}`}
                      >
                        <CheckIcon included={included} />
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={getPricingContactHref(plan.slug)}
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} ${pageStyles.pricingCta}`}
                >
                  Get started
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
