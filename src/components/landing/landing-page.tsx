import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faChevronRight,
  faCircleCheck,
  faClipboardCheck,
  faDiagramProject,
  faEnvelope,
  faIndustry,
  faPhone,
  faShieldHalved,
  faTruckFast,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

import {
  advantages,
  companyName,
  contacts,
  imageDirections,
  industries,
  navItems,
  productCategories,
  serviceItems,
  trustPoints,
  workflowSteps
} from "./data";
import { QuoteForm } from "./quote-form";
import { SectionTitle } from "./section-title";

const iconDecorativeProps = { "aria-hidden": true } as const;

function CardGrid({ items }: { items: Array<{ title: string; description: string }> }) {
  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-slate-300 bg-slate-100 p-4 text-slate-700">
        Раздел временно заполняется.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="min-w-0 rounded-xl border border-slate-300 bg-white p-5 shadow-panel"
        >
          <h3 className="font-[var(--font-heading)] text-xl font-semibold leading-snug text-brand-900">
            {item.title}
          </h3>
          <p className="mt-2 break-words text-sm leading-relaxed text-slate-700">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="reveal-in bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-300 bg-white/95 pt-[max(env(safe-area-inset-top),0px)] backdrop-blur">
        <div className="container-main">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-[var(--font-heading)] text-2xl font-semibold text-brand-950">
                  {companyName}
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                  Комплексная поставка материалов для реставрации и капитального ремонта.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-brand-500 hover:text-brand-900 active:border-brand-700"
                >
                  <FontAwesomeIcon icon={faPhone} {...iconDecorativeProps} />
                  {contacts.phone}
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-brand-500 hover:text-brand-900 active:border-brand-700"
                >
                  <FontAwesomeIcon icon={faEnvelope} {...iconDecorativeProps} />
                  {contacts.email}
                </a>
                <Link
                  href="#quote"
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-900"
                >
                  Оставить заявку
                  <FontAwesomeIcon icon={faArrowRight} {...iconDecorativeProps} />
                </Link>
              </div>
            </div>

            <nav aria-label="Разделы страницы" className="overflow-x-auto pb-1">
              <ul className="flex min-w-max items-center gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="focus-ring inline-flex rounded-md border border-transparent px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-brand-900 active:bg-slate-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="hero" className="section-shell border-b border-slate-300 bg-white">
          <div className="container-main grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">
                Материалы для сложных объектов
              </p>
              <h1 className="mt-3 text-balance font-[var(--font-heading)] text-3xl font-semibold leading-tight text-brand-950 sm:text-4xl lg:text-5xl">
                Комплексные поставки материалов для реставрации и капитального ремонта
              </h1>
              <p className="mt-4 max-w-2xl break-words text-base leading-relaxed text-slate-700 sm:text-lg">
                Экспертно подбираем материалы для объектов разной сложности: от жилых домов до
                станций метро и памятников. Обеспечиваем широкий ассортимент, техническое
                сопровождение и надежную логистику до объекта.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#quote"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-900"
                >
                  Получить консультацию
                  <FontAwesomeIcon icon={faArrowRight} {...iconDecorativeProps} />
                </Link>
                <Link
                  href="#categories"
                  className="focus-ring inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-500 hover:text-brand-900 active:border-brand-700"
                >
                  Смотреть категории материалов
                </Link>
              </div>
            </div>

            <figure className="overflow-hidden rounded-xl border border-slate-300 bg-slate-100 shadow-panel">
              <Image
                src="/images/hero-construction-overhead.png"
                alt="Вид сверху на объект капитального ремонта с рабочими и арматурным каркасом"
                width={960}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="container-main">
            <SectionTitle
              kicker="О компании"
              title="ООО «РЕШЕНИЕ» — поставщик материалов для реставрации и капитального ремонта"
              description="Работаем с проектами, где критичны корректный подбор материалов, техническая совместимость и срок поставки. Поддерживаем подрядчиков, проектировщиков и закупки на каждом этапе."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Поддержка по технологическим картам",
                "Сопровождение проектирования узлов и деталей",
                "Техническое сопровождение применения материалов",
                "Взаимодействие с техническими отделами производителей"
              ].map((point) => (
                <div
                  key={point}
                  className="min-w-0 rounded-xl border border-slate-300 bg-white p-4 shadow-panel"
                >
                  <p className="flex items-start gap-3 break-words text-sm leading-relaxed text-slate-800">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="mt-0.5 text-brand-700"
                      {...iconDecorativeProps}
                    />
                    <span>{point}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="section-shell bg-white">
          <div className="container-main">
            <SectionTitle
              kicker="Категории материалов"
              title="Широкий ассортимент под задачи реставрации и капремонта"
              description="Собираем комплекс поставки из нескольких категорий в одном предложении, чтобы сократить сроки согласования и закупки."
            />
            <CardGrid items={productCategories} />
          </div>
        </section>

        <section id="services" className="section-shell">
          <div className="container-main">
            <SectionTitle
              kicker="Техническая поддержка"
              title="Сервис, который снижает проектные и закупочные риски"
              description="Помогаем команде объекта не только с закупкой, но и с техническими решениями в ходе реализации."
            />
            <CardGrid items={serviceItems} />
          </div>
        </section>

        <section id="advantages" className="section-shell bg-white">
          <div className="container-main">
            <SectionTitle kicker="Преимущества" title="Почему подрядчики выбирают ООО «РЕШЕНИЕ»" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item, idx) => {
                const icon =
                  idx % 6 === 0
                    ? faBuilding
                    : idx % 6 === 1
                      ? faDiagramProject
                      : idx % 6 === 2
                        ? faShieldHalved
                        : idx % 6 === 3
                          ? faClipboardCheck
                          : idx % 6 === 4
                            ? faTruckFast
                            : faIndustry;

                return (
                  <article
                    key={item.title}
                    className="min-w-0 rounded-xl border border-slate-300 bg-white p-5 shadow-panel"
                  >
                    <h3 className="flex items-center gap-3 font-[var(--font-heading)] text-xl font-semibold leading-snug text-brand-900">
                      <FontAwesomeIcon icon={icon} className="text-brand-700" {...iconDecorativeProps} />
                      <span>{item.title}</span>
                    </h3>
                    <p className="mt-2 break-words text-sm leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="section-shell">
          <div className="container-main">
            <SectionTitle
              kicker="Как мы работаем"
              title="Понятный и контролируемый B2B‑процесс поставки"
            />
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-300 bg-white p-4 shadow-panel"
                >
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-900"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <p className="break-words text-sm font-medium leading-relaxed text-slate-800">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="industries" className="section-shell bg-white">
          <div className="container-main">
            <SectionTitle
              kicker="Типы объектов"
              title="Опыт поставок для разных отраслей и уровней сложности"
            />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-brand-900"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-brand-700" {...iconDecorativeProps} />
                  <span className="break-words">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="image-directions" className="section-shell">
          <div className="container-main">
            <SectionTitle
              kicker="Фотоориентиры"
              title="Визуальные направления для контента сайта"
              description="Подборка сюжетов для реальных фото или рендеров: подходит для кейсов, каталога и презентаций."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {imageDirections.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-panel"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={960}
                    height={640}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brand-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="section-shell bg-white">
          <div className="container-main">
            <SectionTitle
              kicker="Доверие и партнерство"
              title="Надежность поставщика подтверждается процессом и экспертизой"
            />
            <CardGrid items={trustPoints} />
          </div>
        </section>

        <section id="quote" className="section-shell">
          <div className="container-main grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <aside className="rounded-xl border border-slate-300 bg-brand-950 p-6 text-slate-100 shadow-panel">
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-white">
                Запросить коммерческое предложение
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Отправьте заявку, и мы подготовим подбор материалов под ваш объект, сроки поставки и
                требуемые объемы.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faWrench} className="mt-0.5 text-accent-300" {...iconDecorativeProps} />
                  Подбор материалов под проектные требования
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="mt-0.5 text-accent-300"
                    {...iconDecorativeProps}
                  />
                  Планирование поставки и контроль логистики
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className="mt-0.5 text-accent-300"
                    {...iconDecorativeProps}
                  />
                  Поддержка менеджера и технического специалиста
                </li>
              </ul>
            </aside>
            <QuoteForm />
          </div>
        </section>

        <section id="contacts" className="section-shell bg-white">
          <div className="container-main">
            <SectionTitle kicker="Контакты" title="Свяжитесь с нами удобным способом" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-xl border border-slate-300 bg-white p-5 shadow-panel">
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brand-900">Телефон</h3>
                <a
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className="focus-ring mt-2 inline-flex text-base font-semibold text-slate-800 transition-colors hover:text-brand-900"
                >
                  {contacts.phone}
                </a>
              </article>
              <article className="rounded-xl border border-slate-300 bg-white p-5 shadow-panel">
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brand-900">Email</h3>
                <a
                  href={`mailto:${contacts.email}`}
                  className="focus-ring mt-2 inline-flex break-all text-base font-semibold text-slate-800 transition-colors hover:text-brand-900"
                >
                  {contacts.email}
                </a>
              </article>
              <article className="rounded-xl border border-slate-300 bg-white p-5 shadow-panel">
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brand-900">
                  Контактное лицо
                </h3>
                <p className="mt-2 text-base font-semibold text-slate-800">{contacts.person}</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-300 bg-brand-950 py-10 text-slate-200">
        <div className="container-main grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-[var(--font-heading)] text-xl font-semibold text-white">{companyName}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Комплексные поставки материалов для реставрации и капитального ремонта с техническим
              сопровождением и надежной логистикой.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <p className="font-[var(--font-heading)] text-lg font-semibold text-white">Разделы</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-[var(--font-heading)] text-lg font-semibold text-white">Связь</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                Телефон:{" "}
                <a
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className="focus-ring transition-colors hover:text-white"
                >
                  {contacts.phone}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contacts.email}`}
                  className="focus-ring break-all transition-colors hover:text-white"
                >
                  {contacts.email}
                </a>
              </li>
              <li>Контактное лицо: {contacts.person}</li>
            </ul>
            <Link
              href="#quote"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-500 active:bg-accent-700"
            >
              Получить подбор материалов
              <FontAwesomeIcon icon={faArrowRight} {...iconDecorativeProps} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
