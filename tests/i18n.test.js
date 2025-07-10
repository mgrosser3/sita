import { I18n } from "../.trash/src/i18n.js";

test("returns translation if key exists", () => {
  const i18n = new I18n("de");
  i18n.load("data/locales");
  expect(i18n.t("greeting")).toBe("Hallo");
});
