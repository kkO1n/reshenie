"use client";

import { FormEvent, useMemo, useState } from "react";

type QuoteFields = {
  name: string;
  phone: string;
  email: string;
  company: string;
  supply: string;
  comment: string;
};

type QuoteErrors = Partial<Record<keyof QuoteFields, string>>;
type QuoteFormProps = {
  className?: string;
};

const phonePattern = /^\+?[0-9\s\-()]{10,20}$/;

const fieldOrder: Array<keyof QuoteFields> = ["name", "phone", "email", "company", "supply", "comment"];

function getValue(formData: FormData, field: keyof QuoteFields) {
  return String(formData.get(field) ?? "").trim();
}

function validate(formData: FormData): QuoteErrors {
  const nextErrors: QuoteErrors = {};
  const name = getValue(formData, "name");
  const phone = getValue(formData, "phone");
  const email = getValue(formData, "email");
  const company = getValue(formData, "company");
  const supply = getValue(formData, "supply");
  const comment = getValue(formData, "comment");

  if (!name) {
    nextErrors.name = "Укажите имя контактного лица.";
  }
  if (!phone) {
    nextErrors.phone = "Укажите телефон для связи.";
  } else if (!phonePattern.test(phone)) {
    nextErrors.phone = "Проверьте формат телефона. Пример: +7 911 765-77-77.";
  }
  if (!email) {
    nextErrors.email = "Укажите email для отправки КП.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    nextErrors.email = "Проверьте формат email. Пример: info@company.ru.";
  }
  if (!company) {
    nextErrors.company = "Укажите название компании.";
  }
  if (!supply) {
    nextErrors.supply = "Опишите, что требуется поставить.";
  }
  if (!comment) {
    nextErrors.comment = "Добавьте информацию по объекту или этапу работ.";
  }

  return nextErrors;
}

export function QuoteForm({ className }: QuoteFormProps) {
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Заполните форму, и менеджер свяжется с вами с подбором и коммерческим предложением."
  );

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function focusFirstError(nextErrors: QuoteErrors) {
    const firstField = fieldOrder.find((field) => nextErrors[field]);

    if (!firstField) {
      return;
    }

    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        `[name="${firstField}"]`
      );
      el?.focus();
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Проверьте поля формы. Ошибки указаны рядом с полями.");
      focusFirstError(nextErrors);
      return;
    }

    setStatus("submitting");
    setStatusMessage("Отправляем заявку…");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      form.reset();
      setErrors({});
      setStatus("success");
      setStatusMessage("Заявка отправлена. Алексей свяжется с вами в рабочее время.");
    } catch {
      setStatus("error");
      setStatusMessage("Не удалось отправить заявку. Повторите попытку или позвоните нам.");
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`grid gap-4 rounded-xl border border-slate-300 bg-white p-5 shadow-panel sm:grid-cols-2 sm:p-6 ${className ?? ""}`}
      aria-describedby="quote-form-status"
    >
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Например, Иван Петров…"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="focus-ring min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-accent-800">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-800">
          Телефон
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="Например, +7 911 765-77-77…"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="focus-ring min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1 text-xs text-accent-800">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          placeholder="Например, info@company.ru…"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="focus-ring min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-accent-800">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-800">
          Название компании
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Например, ООО «СтройПроект»…"
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          className="focus-ring min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.company ? (
          <p id="company-error" className="mt-1 text-xs text-accent-800">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="supply" className="mb-2 block text-sm font-semibold text-slate-800">
          Что требуется поставить
        </label>
        <input
          id="supply"
          name="supply"
          type="text"
          required
          autoComplete="off"
          placeholder="Например, инъекционные составы, гидроизоляция, ЛКМ…"
          aria-invalid={Boolean(errors.supply)}
          aria-describedby={errors.supply ? "supply-error" : undefined}
          className="focus-ring min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.supply ? (
          <p id="supply-error" className="mt-1 text-xs text-accent-800">
            {errors.supply}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="comment" className="mb-2 block text-sm font-semibold text-slate-800">
          Комментарий по объекту
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          required
          placeholder="Например, объект культурного наследия, старт работ в мае, важна поставка поэтапно…"
          aria-invalid={Boolean(errors.comment)}
          aria-describedby={errors.comment ? "comment-error" : undefined}
          className="focus-ring min-h-28 w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-500 hover:border-slate-400 focus-visible:border-brand-600"
        />
        {errors.comment ? (
          <p id="comment-error" className="mt-1 text-xs text-accent-800">
            {errors.comment}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-900 disabled:cursor-not-allowed disabled:bg-brand-500 md:w-auto"
        >
          {status === "submitting" ? "Отправка…" : "Запросить коммерческое предложение"}
        </button>
        <p className="text-sm text-slate-600">Нажимая кнопку, вы соглашаетесь на обработку заявки.</p>
      </div>

      <p
        id="quote-form-status"
        aria-live="polite"
        className={`sm:col-span-2 text-sm ${
          status === "error"
            ? "text-accent-800"
            : status === "success"
              ? "text-emerald-700"
              : "text-slate-700"
        }`}
      >
        {statusMessage}
      </p>
      {hasErrors ? <span className="sr-only">В форме есть ошибки.</span> : null}
    </form>
  );
}
