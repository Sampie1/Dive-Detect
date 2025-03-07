/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/badges/BadgeContext`; params?: Router.UnknownInputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownInputParams; } | { pathname: `/screens/BadgeScherm`; params?: Router.UnknownInputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/badges/BadgeContext`; params?: Router.UnknownOutputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/BadgeScherm`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/badges/BadgeContext${`?${string}` | `#${string}` | ''}` | `/badges/badges${`?${string}` | `#${string}` | ''}` | `/screens/BadgeScherm${`?${string}` | `#${string}` | ''}` | `/screens/GameScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/badges/BadgeContext`; params?: Router.UnknownInputParams; } | { pathname: `/badges/badges`; params?: Router.UnknownInputParams; } | { pathname: `/screens/BadgeScherm`; params?: Router.UnknownInputParams; } | { pathname: `/screens/GameScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
