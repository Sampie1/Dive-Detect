/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownInputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/badges/badges${`?${string}` | `#${string}` | ''}` | `/screens/GameScreen${`?${string}` | `#${string}` | ''}` | `/screens/HomeScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownInputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
