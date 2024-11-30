declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
/*
@Utility / custom.d.ts 

The *.d.ts files are TypeScript type declaration files, used to provide typing information for libraries or modules that are not written 
in TypeScript. This allows developers to use libraries written in JavaScript with the type safety provided by TypeScript.

SO...

this is designed to provide typing support for importing SVG files as React components into a TypeScript project.
It is especially useful when you use a bundler such as Webpack or Vite configured with the appropriate loader to handle SVG files in this way


Typed for SVG as components: By declaring this module, you are defining that any file that ends with 
.svg and is imported into your project will be treated as a functional React component

*/
