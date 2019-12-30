import {
  CreateNavigatorConfig,
  NavigationRoute,
  NavigationRouteConfigMap,
  NavigationStackRouterConfig
} from "react-navigation";
import {NavigationStackConfig, NavigationStackOptions, NavigationStackProp} from "react-navigation-stack/src/types";

export interface RouterType {
  routeConfigMap: NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp<NavigationRoute, any>>;
  stackConfig?: CreateNavigatorConfig<
    NavigationStackConfig,
    NavigationStackRouterConfig,
    NavigationStackOptions,
    NavigationStackProp<NavigationRoute, any>
    >;
}
