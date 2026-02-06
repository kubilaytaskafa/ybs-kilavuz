// src/utils/helpers.js

export const slugify = (text) => {
  const trMap = {
    ç: "c",
    ğ: "g",
    ş: "s",
    ü: "u",
    ö: "o",
    ı: "i",
    İ: "i",
    Ç: "c",
    Ğ: "g",
    Ş: "s",
    Ü: "u",
    Ö: "o",
  };
  return text
    .split("")
    .map((char) => trMap[char] || char)
    .join("")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};
