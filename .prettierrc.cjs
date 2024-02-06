module.exports = {
  "printWidth": 100,
  "singleQuote": true,
  "plugins": [require.resolve("@trivago/prettier-plugin-sort-imports")],
  "importOrder": ["<THIRD_PARTY_MODULES>", "^@/pages/(.*)$", "^@/layouts/(.*)$", "^@/components/(.*)$", "^@/sections/(.*)$",  "^@/types/(.*)$", "^@/lib/(.*)$", "^@/helpers/(.*)$", "^@/constants/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}
