import sanityClient from "@sanity/client";

/* admin */
const SANIITY_WRITE_KEY = `sk66IegNCk6lVET4Nd7LRk1HJihEcui5p3eNytgk8Ka8dg3eQAjWpwk2XcntLnheAe3kFQ4aHPxw7s6J9hAtrHtuBNEUAhB3i5dILxUal6ydPtjwGtfMJssiuzxhfroQXpEdp7KW9uVX7gyKf1v3HBq71xCZAaICfPIUh3R7gq1l9bNikYf3`;
/* editor */
const SANIITY_WRITE_KEY_EDITOR = `skh2mfl3bbGMKl9R4YIwcESySALbFGoYzwavOi7gs4ert5ZAb86cidEkMkbw1YWB4V0ZcHuZYseoIEYIij8LmD1pkW0C8uIT9NFD35KTB7Va9x26WNYnI1afAbjMoI088pMh80YDLAoNQEiaBitWCmGQJRzyBFC2WoZRgDS8ayGpl8ybyHXi`;

export default sanityClient({
  projectId: "9qwu66sw", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2021-04-28",
  token: SANIITY_WRITE_KEY_EDITOR,
  useCdn: false,
});
