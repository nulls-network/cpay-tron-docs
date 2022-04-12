import type { FunctionalComponent } from "preact";
import { h, Fragment } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import "./ThemeToggleButton.css";

const languages = ["English", "中文"];

const LangToggle: FunctionalComponent = () => {
  const [lang, setLang] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("lang")) {
      return localStorage.getItem("lang");
    }

    let lang = window.navigator.language.slice(0, 2)
    let defaultLang = 'English'
    if(lang == 'zh'){
      defaultLang = '中文'
    }
    return defaultLang;
  });
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
    } else {
      let t
      if (lang === "English") {
        t=window.location.href.replace('/zh-CN','/en')
      } else {
        t=window.location.href.replace('/en','/zh-CN')
      }
      window.location.href = t

    }
  }, [lang]);

  return (
    <div class="theme-toggle">
      {languages.map((t, i) => {
        const showLang = languages[i];
        const checked = t === lang;
        return (
          <label className={checked ? " checked" : ""}>
            {showLang == "中文" ? "/ " : ""}
            {showLang}
            <input
              style="display:none;"
              type="radio"
              name="lang-toggle"
              checked={checked}
              value={t}
              onChange={() => {
                localStorage.setItem("lang", t);
                setLang(t);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default LangToggle;
