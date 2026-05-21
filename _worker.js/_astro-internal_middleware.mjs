globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_B4DOhe7O.mjs';
import './chunks/astro/server_yAIZpgu2.mjs';
import { w as sequence } from './chunks/index_DsIinD5c.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
